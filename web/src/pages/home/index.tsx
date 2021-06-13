
import './style.scss';
import FlowerList from '../../components/FlowerList';
import { ReactComponent as PlusIcon } from '../../assets/svg/mais.svg';
import { Link } from 'react-router-dom';

const Home = () => {

	return (
		<section className="listagem-container">
			<header>
				<h1>Listagem de Flores</h1>
				<Link to="/create" className="add" title="Adicionar"><PlusIcon /></Link>
			</header>
			<FlowerList />
		</section>
	);
}

export default Home;