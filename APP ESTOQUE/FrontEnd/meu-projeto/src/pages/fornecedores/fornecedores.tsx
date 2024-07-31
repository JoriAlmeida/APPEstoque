import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './fornecedores.css';

function Fornecedores() {

  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
  const [filteredFornecedores, setFilteredFornecedores] = useState<Array<Fornecedor>>([]);
  const param = useParams();

  async function carregarFornecedores() {
    const resp = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    setFornecedores(resp.data.slice(0, 10));
    setFilteredFornecedores(resp.data.slice(0, 10)); // Inicializa a lista filtrada
  }

  useEffect(() => {
    carregarFornecedores();
    console.log(param)
  }, []);

  useEffect(() => {
    // Filtrar fornecedores com base no termo de busca
    const results = fornecedores.filter(fornecedor =>
      fornecedor.forn_nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFornecedores(results);
  }, [searchTerm, fornecedores]);




  return (
    <ComponentMenu>
      <div className="containerFornecedor">
        <h1 className="tituloFornecedor">Gestão de Fornecedores</h1>
        <input
          type="text"
          placeholder="Buscar fornecedor por nome"
          className="search-inputFornecedor"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <table className="fornecedor-table">
          <thead>
            <tr>
              <th>ID Fornecedor</th>
              <th>Nome Fornecedor</th>
              <th>Telefone</th>
              <th>Email</th>
              <th>CNPJ</th>
              <th>ENDERECO</th>
              <th>Status</th>
              <th>Exibir Fornecedor</th>
            </tr>
          </thead>
          <tbody>
            {filteredFornecedores.map(fornecedor => (
              <tr key={fornecedor.id_forn}>
                <td>{fornecedor.id_forn}</td>
                <td>{fornecedor.forn_nome}</td>
                <td>{fornecedor.forn_telefone}</td>
                <td>{fornecedor.forn_email}</td>
                <td>{fornecedor.forn_cnpj}</td>
                <td>{fornecedor.forn_endereco}</td>
                <td>{fornecedor.forn_status}</td>
                <td><button onClick={() => navegacao('../editarFornecedor/'+ param.id +"/"+ fornecedor.id_forn)}>Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-containerFornecedor">
          <button className="action-buttonFornecedor" onClick={() => navegacao('../cadastrarFornecedores/'+param.id)}>Cadastrar Fornecedor</button>
          <button className="action-buttonFornecedor" onClick={() => navegacao('../fornecedorxproduto/'+param.id)}>Fornecedores x Produtos</button>
        </div>
        <div className="button-containerFornecedor">
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Fornecedores;