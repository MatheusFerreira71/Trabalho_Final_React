import { FormEvent, useEffect } from 'react';
import { ChangeEvent, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Flower, FlowerCreation } from '../../interfaces';
import api from '../../services/api';
import './style.scss';
import Swal from 'sweetalert2';

const FlowerForm = () => {

  const [flowerData, setFlowerData] = useState<FlowerCreation>({ nome: '', grupo: '', tamanho: '', tipo: '' });
  const { id } = useParams<{ id?: string }>();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      api.get<Flower>(`flowers/${id}`).then(response => {
        const { nome, grupo, tamanho, tipo } = response.data;
        setFlowerData({ nome, grupo, tamanho, tipo });
      })
    }
  }, [id])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFlowerData({ ...flowerData, [name]: value })
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (id) {
      await api.put(`flowers/${id}`, flowerData);
    } else {
      await api.post('flowers', flowerData);
    }

    await Swal.fire('Parabéns', `Flor ${id ? 'editada' : 'cadastrada'} com sucesso!`, 'success');
    history.push('/');
  }

  const handleCancel = async () => {
    if (flowerData.nome !== '' || flowerData.grupo !== '' || flowerData.tipo !== '' || flowerData.tamanho !== '') {
      const result = await Swal.fire({
        title: 'Se você fizer isso, pode haver perda de dados, deseja continuar?',
        showCancelButton: true,
        confirmButtonText: `Confirmar`,
        cancelButtonColor: "#ea5455",
        cancelButtonText: "Cancelar",
        icon: "warning"
      });

      if (result.isConfirmed) {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? 'Edição' : 'Cadastro'} de {id ? flowerData.nome : 'Flores'}</h1>
      <fieldset>
        <legend>Dados</legend>
        <div className="field">
          <input type="text" name="nome" id="nome" onChange={handleInputChange} value={flowerData.nome} required />
          <label htmlFor="nome" className={flowerData.nome !== '' ? 'active' : ''}>Nome</label>
        </div>
        <div className="field">
          <input type="text" name="grupo" id="grupo" onChange={handleInputChange} value={flowerData.grupo} required />
          <label htmlFor="grupo" className={flowerData.grupo !== '' ? 'active' : ''}>Grupo</label>
        </div>
        <div className="field">
          <input type="text" name="tipo" id="tipo" onChange={handleInputChange} value={flowerData.tipo} required />
          <label htmlFor="tipo" className={flowerData.tipo !== '' ? 'active' : ''}>Tipo</label>
        </div>
        <div className="field">
          <input type="text" name="tamanho" id="tamanho" onChange={handleInputChange} value={flowerData.tamanho} required />
          <label htmlFor="tamanho" className={flowerData.tamanho !== '' ? 'active' : ''}>Tamanho</label>
        </div>
        <div className="action-buttons">
          <button type="submit" className="save">Salvar</button>
          <button type="button" className="cancel" onClick={handleCancel}>Cancelar</button>
        </div>
      </fieldset>
    </form>
  );
}

export default FlowerForm;