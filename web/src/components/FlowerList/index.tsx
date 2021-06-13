import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { Count, FlowerListItemProps } from '../../interfaces';
import { Flower } from '../../interfaces';
import api from '../../services/api';
import './style.scss';
import { ReactComponent as TrashIcon } from '../../assets/svg/lixeira.svg';
import { ReactComponent as PensilIcon } from '../../assets/svg/lapis.svg';

const FlowerList = () => {

  const [flowers, setFlowers] = useState<Flower[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);
  const [maxVisibleButtons] = useState<number>(5); //Somente números impares.

  useEffect(() => {
    api.get<Count>('flowers/count').then(response => {
      setTotalPages(Math.ceil(response.data.totalCount / itemsPerPage))
    })

    api.get<Flower[]>(`flowers?page=${page}&itemsPerPage=${itemsPerPage}`).then(response => {
      setFlowers(response.data);
    });
  }, [page, itemsPerPage]);


  const next = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  const prev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  const goTo = (targetPage: number) => {
    if (targetPage >= 1 && targetPage <= totalPages) {
      setPage(targetPage);
    }
  }

  const calcButtons = () => {
    let maxLeft = (page - Math.floor(maxVisibleButtons / 2));
    let maxRight = (page + Math.floor(maxVisibleButtons / 2));

    if (maxLeft < 1) {
      maxLeft = 1
      maxRight = maxVisibleButtons;
    }

    if (maxRight > totalPages) {
      maxLeft = totalPages - (maxVisibleButtons - 1);
      maxRight = totalPages

      if (maxLeft < 1) maxLeft = 1
    }

    const buttons = [];
    for (let buttonIndex = maxLeft; buttonIndex <= maxRight; buttonIndex++) {
      buttons.push(<div key={`paginate-buttons-${buttonIndex}`} className={page === buttonIndex ? 'active' : ''} onClick={() => goTo(buttonIndex)}>{buttonIndex}</div>)
    }

    return buttons;
  }

  const handleItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setPage(1);
    setItemsPerPage(+value);
  }

  return (
    <>
      <div className="pagination">
        <div className="items">
          <ul>
            {flowers.map(flower => <FlowerListItem flower={flower} key={flower.id} />)}
          </ul>
        </div>
      </div>
      <div className="pagination-buttons">
        <div className="first" onClick={() => goTo(1)}>&#171;</div>
        <div className="prev" onClick={prev}>&lt;</div>
        <div className="numbers">
          {calcButtons()}
        </div>
        <div className="next" onClick={next}>&gt;</div>
        <div className="last" onClick={() => goTo(totalPages)}>&#187;</div>
        <select onChange={handleItemsPerPageChange}>
          <option value="5" selected>5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div>
    </>
  );
}

const FlowerListItem: React.FC<FlowerListItemProps> = ({ flower }) => {
  return (
    <li>
      <Link to={`/flower/${flower.id}`}>{flower.nome}</Link>
      <div className="item-buttons">
        <Link to={`/edit/${flower.id}`} className="edit" title="Editar"><PensilIcon /></Link>
        <button type="button" className="delete" title="Excluir"><TrashIcon /></button>
      </div>
    </li>
  );
}

export default FlowerList;