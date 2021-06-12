import React from 'react';
import { Link } from 'react-router-dom';
import { FlowerListItemProps, FlowerListProps } from '../../interfaces';
import './style.scss';
import { ReactComponent as TrashIcon } from '../../assets/svg/lixeira.svg';
import { ReactComponent as PensilIcon } from '../../assets/svg/lapis.svg';

const FlowerList: React.FC<FlowerListProps> = ({ flowers }) => {
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
				<div className="first">&#171;</div>
				<div className="prev">&lt;</div>
				<div className="numbers">
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
				</div>
				<div className="next">&gt;</div>
				<div className="last">&#187;</div>
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