import './style.scss';
import api from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Flower } from '../../interfaces';

const FlowerShow = () => {
  const [flower, setFlower] = useState<Flower>({} as Flower);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    api.get<Flower>(`flowers/${id}`).then(response => {
      setFlower(response.data);
    })
  }, [id])

  return (
    <div className="container">
      <article>
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
      </article>
    </div>
  );
}

export default FlowerShow;