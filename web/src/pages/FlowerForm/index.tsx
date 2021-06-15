import { ChangeEvent, useState } from 'react';
import { FlowerCreation } from '../../interfaces';
import './style.scss';

const FlowerForm = () => {

  const [flowerData, setFlowerData] = useState<FlowerCreation>({ nome: '', grupo: '', tamanho: '', tipo: '' });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFlowerData({ ...flowerData, [name]: value })
  };

  return (
    <form>
      <h1>Cadastro de Flores</h1>
      <fieldset>
        <legend>Dados</legend>
        <div className="field">
          <input type="text" name="nome" id="nome" onChange={handleInputChange} required />
          <label htmlFor="nome" className={flowerData.nome !== '' ? 'active' : ''}>Nome</label>
        </div>
        <div className="field">
          <input type="text" name="grupo" id="grupo" onChange={handleInputChange} required />
          <label htmlFor="grupo" className={flowerData.grupo !== '' ? 'active' : ''}>Grupo</label>
        </div>
        <div className="field">
          <input type="text" name="tipo" id="tipo" onChange={handleInputChange} required />
          <label htmlFor="tipo" className={flowerData.tipo !== '' ? 'active' : ''}>Tipo</label>
        </div>
        <div className="field">
          <input type="text" name="tamanho" id="tamanho" onChange={handleInputChange} required />
          <label htmlFor="tamanho" className={flowerData.tamanho !== '' ? 'active' : ''}>Tamanho</label>
        </div>
        <div className="field">
          <button type="submit">Salvar</button>
        </div>
      </fieldset>
    </form>
  );
}

export default FlowerForm;