import './style.scss';

const Navbar = () => {
	return (
		<header>
			<nav>
				<div className="logo">
					<h2>Plankton</h2>
				</div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/">About</a></li>
				</ul>
			</nav>
		</header>
	);
}

export default Navbar;