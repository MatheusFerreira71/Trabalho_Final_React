import './style.scss';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom'
import { Flower } from '../../interfaces';
import { ReactComponent as TrashIcon } from '../../assets/svg/lixeira.svg';
import Swal from 'sweetalert2';

const FlowerShow = () => {
  const [flower, setFlower] = useState<Flower>({} as Flower);
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    api.get<Flower>(`flowers/${id}`).then(response => {
      setFlower(response.data);
    })
  }, [id])

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: `Deseja excluir a flor ${flower.nome}?`,
      showCancelButton: true,
      confirmButtonText: `Confirmar`,
      cancelButtonColor: "#ea5455",
      cancelButtonText: "Cancelar",
      icon: "warning"
    });

    if (result.isConfirmed) {
      await api.delete(`flowers/${flower.id}`);
      await Swal.fire('Sucesso', 'Flor removida com sucesso', 'success');
      history.push('/');
    }
  }

  return (
    <div className="container">
      <article className="flower">
        <header>
          <h1>Informações sobre {flower.nome}</h1>
        </header>

        <div className="content">
          <div className="field">
            <label htmlFor="nome">Nome</label>
            <h3 id="nome">{flower.nome}</h3>
          </div>
          <div className="field">
            <label htmlFor="grupo">Grupo</label>
            <h3 id="grupo">{flower.grupo}</h3>
          </div>
          <div className="field">
            <label htmlFor="tipo">Tipo</label>
            <h3 id="tipo">{flower.tipo}</h3>
          </div>
          <div className="field">
            <label htmlFor="tamanho">Tamanho</label>
            <h3 id="tamanho">{flower.tamanho}</h3>
          </div>
        </div>
        <button type="button" className="delete" title="Excluir" onClick={handleDelete}><TrashIcon /></button>
      </article>
    </div>
  );
}

export default FlowerShow;