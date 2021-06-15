import './style.scss';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';

const About = () => {
	return (
		<div className="cards-container">
			<article className="dev-card">
				<h1>Matheus Fernando Freire Ferreira</h1>
				<p>Caboclinho do Backend</p>
				<ul>
					<li>Desenvolvimento</li>
					<li>Banco de Dados</li>
				</ul>
				<img src={require('../../assets/images/matheus.png').default} alt='Dev Pic' />
				<a href="https://github.com/MatheusFerreira71" target="_blank" rel="noreferrer"><GithubIcon /></a>
			</article>
			<article className="dev-card">
				<h1>Mário Roberto Ronca</h1>
				<p>Caboclinho do Frontend</p>
				<ul>
					<li>CSS</li>
					<li>Resolução de Problemas</li>
				</ul>
				<img src={require('../../assets/images/mario.jpg').default} alt='Dev Pic' />
				<a href="https://github.com/MarioRobertoRonca" target="_blank" rel="noreferrer"><GithubIcon /></a>
			</article>
			<article className="dev-card">
				<h1>Ana Carolina Fonseca Barreto</h1>
				<p>Caboclinha do Frontend</p>
				<ul>
					<li>HTML</li>
					<li>Pesquisadora de Plantas</li>
				</ul>
				<img src={require('../../assets/images/carol.jpg').default} alt='Dev Pic' />
				<a href="https://github.com/anafbarreto" target="_blank" rel="noreferrer"><GithubIcon /></a>
			</article>
		</div>
	);
};

export default About;