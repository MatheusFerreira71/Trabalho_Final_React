import { useState, useEffect } from 'react';
import './style.scss';
import FlowerList from '../../components/FlowerList';
import { Flower } from '../../interfaces';
import api from '../../services/api';
import { ReactComponent as PlusIcon } from '../../assets/svg/mais.svg';

const Home = () => {
	const [flowers, setFlowers] = useState<Flower[]>([]);
	useEffect(() => {
		api.get<Flower[]>('flowers?page=1&itemsPerPage=5').then(response => {
			setFlowers(response.data);
		});
	}, []);


	return (
		<section className="listagem-container">
			<header>
				<h1>Listagem de Flores</h1>
				<a href="/" className="add" title="Adicionar"><PlusIcon /></a>
			</header>
			<FlowerList flowers={flowers} />
		</section>
	);
}

export default Home;