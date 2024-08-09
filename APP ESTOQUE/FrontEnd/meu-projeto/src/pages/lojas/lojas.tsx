import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Lojas } from '../../Models/Lojas';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './lojas.css';
import { FaRegEdit, FaPlusCircle, FaStore } from "react-icons/fa";



function Loja() {

  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [lojas, setLojas] = useState<Array<Lojas>>([]);
  const [filteredLojas, setFilteredLojas] = useState<Array<Lojas>>([]);
  const param = useParams();

  async function carregarLojas() {
    const resp = await axios.get('http://localhost:8081/loja/encontrarLojas');
    setLojas(resp.data.slice(0, 10));
    setFilteredLojas(resp.data.slice(0, 10));
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
      <div className="containerLoja">
        <h1 className="tituloLoja">Lojas</h1>
        <div className="boxSuperiorProduto">
          <input
            type="text"
            placeholder="Informe o número da loja"
            className="search-inputProduto"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <div className="botaoCadastroProduto">
            <FaPlusCircle className="action-button" onClick={() => navegacao('../cadastrarLoja/' + param.id)} />
          </div>
        </div>
        <table className="loja-table">
          <thead>
            <tr>
              <th>Loja</th>
              <th>Proprietario</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Editar</th>
              <th>Exibir</th>
            </tr>
          </thead>
          <tbody>
            {filteredLojas.map(lojas => (
              <tr key={lojas.loja}>
                <td>Loja {lojas.loja}</td>
                <td>{lojas.loja_nome}</td>
                <td>{lojas.loja_endereco}</td>
                <td>{lojas.loja_contato}</td>
                <td onClick={() => navegacao('../editarProdutos/' + param.id + "/" )}><FaRegEdit /></td>
                <td onClick={() => navegacao('../movimentacaoLoja/' + param.id + "/" + lojas.loja)}><FaStore /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ComponentMenu>
  );
}
export default Loja;