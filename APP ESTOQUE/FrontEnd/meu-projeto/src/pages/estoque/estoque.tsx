import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';
import { Estoque } from '../../Models/Estoque';
import ComponentMenu from '../../Component/ComponentMenu';
import './estoque.css';

function Estoques() {

  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [estoque, setEstoque] = useState<Array<Estoque>>([]);
  const [filteredEstoque, setFilteredEstoque] = useState<Array<Estoque>>([]);
  

  async function carregarEstoque() {
    const resp = await axios.get('http://localhost:8081/estoque/encontrarEstoque');
    setEstoque(resp.data.slice(0, 10));
    setFilteredEstoque(resp.data.slice(0, 10)); // Inicializa a lista filtrada
  }

  useEffect(() => {
    carregarEstoque();
  }, []);


  useEffect(() => {
    if (searchTerm === '') {
        setFilteredEstoque(estoque);
    } else {
        const results = estoque.filter(estoque =>
            `Estoque ${estoque.estoqueidprod}`.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEstoque(results);
    }
}, [searchTerm, estoque]);

  return (
    <ComponentMenu>
      <div className="containerEstoque">
        <h1 className="tituloEstoque">Gestão de Estoque</h1>
        <input
          type="text"
          placeholder="Buscar produto por nome"
          className="search-inputEstoque"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <table className="estoque-table">
          <thead>
            <tr>
              <th>ID Estoque</th>
              <th>ID Produto</th>
              <th>Tipo Mov</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Pornto Rep</th>
              <th>Valor Medio</th>
            </tr>
          </thead>
          <tbody>
            {filteredEstoque.map(estoque => (
              <tr key={estoque.estoque}>
                <td>{estoque.estoque}</td>
                <td>{estoque.estoqueidprod}</td>
                <td>{estoque.estoquetipo}</td>
                <td>{estoque.estoqueqtd}</td>
                <td>{estoque.estoquevalor}</td>
                <td>{estoque.estoquepontrep}</td>
                <td>{estoque.estoquevalormedio}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-containerEstoque">
          <button className="action-buttonEstoque" onClick={() => navegacao('../cadastrarFornecedores')}>Cadastrar Fornecedor</button>
          <button className="action-buttonEstoque" onClick={() => navegacao('../fornecedorxproduto')}>Fornecedores x Produtos</button>
        </div>
        <div className="button-containerEstoque">
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Estoques;