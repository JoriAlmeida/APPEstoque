import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';
import { Produto } from '../../Models/Produto';
import ComponentMenu from '../../Component/ComponentMenu';
import '../fornecedorxproduto/fornecedorxproduto';

function Fornecedoresxproduto() {

  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
  const [produtos, setProdutos] = useState<Array<Produto>>([]);
  const [filteredFornecedores, setFilteredFornecedores] = useState<Array<Fornecedor>>([]);

  async function carregarFornecedores() {
    const resp = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    setProdutos(respProd.data.slice(0, 10));
    setFornecedores(resp.data.slice(0, 10));
    setFilteredFornecedores(resp.data.slice(0, 10));

    console.log();

  }

  useEffect(() => {
    carregarFornecedores();
  }, []);

  const getNomeFornecedor = (id: number) => {
    const fornecedor = fornecedores.find(fornecedor => fornecedor.id_forn === id);
    return fornecedor ? fornecedor.forn_nome : 'Desconhecido';
  };

  return (
    <ComponentMenu>
      <div className="containerFornecedor">
        <h1 className="tituloFornecedor">Produto x Fornecedor</h1>
        <input
          type="text"
          placeholder="Buscar fornecedor por nome"
          className="search-inputProduto"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <table className="fornecedor-table">
          <thead>
            <tr>
              <th>Fornecedor</th>
              <th>produto</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map(produtos => (
              <tr key={produtos.id_prod}>
                <td>{getNomeFornecedor(produtos.fk_id_forn)}</td>
                <td>{produtos.prod_nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-containerFornecedor">
          <button className="action-buttonFornecedor" onClick={() => navegacao('../cadastrarFornecedores')}>Cadastrar Fornecedor</button>

        </div>
        <div className="button-containerFornecedor">
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Fornecedoresxproduto;