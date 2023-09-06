import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Produto from './Produto';

function App() {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((resposta) => {
        setProdutos(resposta.data);
      });
  }, []);

  return (
    <div className="App">
      <div className="produtos-grid">
        {produtos.map((produto) => {
          return <Produto
            key={produto.id}
            id={produto.id}
            titulo={produto.title}
            description={produto.description}
            price={produto.price}
            image={produto.image}
          />
        })}
      </div>
    </div>
  );
}

export default App;
