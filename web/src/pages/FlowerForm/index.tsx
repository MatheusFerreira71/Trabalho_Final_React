import './style.scss';

const FlowerForm = () => {
	return (
		<form>
			<h1>Cadastro de Flores</h1>
			<fieldset>
				<legend>Dados</legend>
				<div className="field">
					<label htmlFor="nome">Nome</label>
					<input type="text" name="nome" id="nome" required/>
				</div>
				<div className="field">
					<label htmlFor="grupo">Grupo</label>
					<input type="text" name="grupo" id="grupo" required/>
				</div>
				<div className="field">
					<label htmlFor="tipo">Tipo</label>
					<input type="text" name="tipo" id="tipo" required/>
				</div>
				<div className="field">
					<label htmlFor="tamanho">Tamanho</label>
					<input type="text" name="tamanho" id="tamanho" required/>
				</div>
			</fieldset>
		</form>
	);
}

export default FlowerForm;