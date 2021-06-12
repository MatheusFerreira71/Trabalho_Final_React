import './style.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<header>
			<nav>
				<div className="logo">
					<h2>Plankton</h2>
				</div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;