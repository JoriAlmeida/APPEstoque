import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';
import { Produto } from '../../Models/Produto';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './fornecedorxproduto.css';

function Fornecedoresxproduto() {

  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
  const [produtos, setProdutos] = useState<Array<Produto>>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Array<Produto>>([]);

  async function carregarFornecedores() {
    const resp = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    setProdutos(respProd.data.slice(0, 10));
    setFornecedores(resp.data.slice(0, 10));
    setFilteredProdutos(resp.data.slice(0, 10));

    console.log();

  }

  useEffect(() => {
    carregarFornecedores();
  }, []);

  const getNomeFornecedor = (id: number) => {
    const fornecedor = fornecedores.find(fornecedor => fornecedor.id_forn === id);
    return fornecedor ? fornecedor.forn_nome : 'Desconhecido';
  };


  useEffect(() => {
    // Filtrar fornecedores com base no termo de busca
    const results = produtos.filter(produtos =>
      getNomeFornecedor(produtos.fk_id_forn).toLowerCase().includes(searchTerm.toLowerCase())
      
    );
    setFilteredProdutos(results);
  }, [searchTerm, produtos]);

  return (
    <ComponentMenu>
      <div className="containerFornecedorXprod">
        <h1 className="tituloFornecedorXprod">Produto x Fornecedor</h1>
        <input
          type="text"
          placeholder="Buscar fornecedor por nome"
          className="search-inputProdutoXprod"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <table className="fornecedorXprod-table">
          <thead>
            <tr>
              <th>Fornecedor</th>
              <th>produto</th>
            </tr>
          </thead>
          <tbody>
            {filteredProdutos.map(produtos => (
              <tr key={produtos.id_prod}>
                <td>{getNomeFornecedor(produtos.fk_id_forn)}</td>
                <td>{produtos.prod_nome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ComponentMenu>
  );
}

export default Fornecedoresxproduto;