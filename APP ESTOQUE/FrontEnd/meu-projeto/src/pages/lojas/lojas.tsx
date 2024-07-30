import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lojas } from '../../Models/Lojas';
import ComponentMenu from '../../Component/ComponentMenu';
import './lojas.css';

function Loja() {

  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [lojas, setLojas] = useState<Array<Lojas>>([]);
  const [filteredLojas, setFilteredLojas] = useState<Array<Lojas>>([]);

  async function carregarLojas() {
    const resp = await axios.get('http://localhost:8081/loja/encontrarLojas');
    setLojas(resp.data.slice(0, 10));
    setFilteredLojas(resp.data.slice(0,10));
  }

useEffect(() => {
    if (searchTerm === '') {
      setFilteredLojas(lojas);
    } else {
      const results = lojas.filter(loja =>
        `Loja ${loja.loja}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLojas(results);
    }
  }, [searchTerm, lojas]);

  useEffect(() => {
    carregarLojas();
  }, []);

  return (
    <ComponentMenu>
      <div className="containerFornecedor">
        <h1 className="tituloFornecedor">Lojas</h1>
        <input
          type="text"
          placeholder="Informe o número da loja"
          className="search-inputProduto"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <table className="fornecedor-table">
          <thead>
            <tr>
              <th>Loja</th>
              <th>Proprietario</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Movimentação</th>
            </tr>
          </thead>
          <tbody>
            {filteredLojas.map(lojas => (
              <tr key={lojas.loja}>
                <td>Loja {lojas.loja}</td>
                <td>{lojas.loja_nome}</td>
                <td>{lojas.loja_endereco}</td>
                <td>{lojas.loja_contato}</td>
                <td><button onClick={() => navegacao('../movimentacaoLoja/' + lojas.loja)}>Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ComponentMenu>
  );
}
export default Loja;