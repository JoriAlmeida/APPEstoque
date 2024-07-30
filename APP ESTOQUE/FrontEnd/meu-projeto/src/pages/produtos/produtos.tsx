import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { Fornecedor } from '../../Models/Fornecedor';
import ComponentMenu from '../../Component/ComponentMenu';
import './produtos.css';
import { FaRegEdit, FaPlusCircle } from "react-icons/fa";

function Produtos() {
  const navegacao = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [produto, setProduto] = useState<Array<Produto>>([]);
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Array<Produto>>([]);

  async function carregarProdutos() {
    const resp = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    const respForn = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    setProduto(resp.data);
    setFornecedores(respForn.data.slice(0, 10));
    setFilteredProdutos(resp.data);
  }

  useEffect(() => {
    carregarProdutos();
  }, []);

  useEffect(() => {
    const results = produto.filter(produto =>
      produto.prod_nome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProdutos(results);
  }, [searchTerm, produto]);

  const getNomeFornecedor = (id: number) => {
    const fornecedor = fornecedores.find(fornecedor => fornecedor.id_forn === id);
    return fornecedor ? fornecedor.forn_nome : 'Desconhecido';
  };

  const ProductTable = ({ produto }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 10; // Número de linhas por página

    const handlePrevious = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };

    const handleNext = () => {
      setCurrentPage((prevPage) =>
        (prevPage + 1) * rowsPerPage < produto.length ? prevPage + 1 : prevPage
      );
    };

    const startRow = currentPage * rowsPerPage;
    const endRow = startRow + rowsPerPage;
    const currentRows = produto.slice(startRow, endRow);

    const formatCurrency = (value: number) => {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    return (
      <ComponentMenu>
        <div className="containerProduto">
          <h1 className="tituloProduto">Gestão de Produtos</h1>
          <div className="boxSuperiorProduto">
            <input
              type="text"
              placeholder="Buscar produto por nome"
              className="search-inputProduto"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <div className="botaoCadastroProduto">
              <FaPlusCircle className="action-button" onClick={() => navegacao('../cadastroProdutos')} />
            </div>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>Nome Produto</th>
                <th>Descrição</th>
                <th>Ponto de Rep</th>
                <th>Valor Unit</th>
                <th>Status</th>
                <th>Fornecedor</th>
                <th>Exibir Produto</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.prod_nome}</td>
                  <td>{produto.prod_descricao}</td>
                  <td>{produto.prod_ponto_rep}</td>
                  <td>{formatCurrency(produto.valor_quant)}</td>
                  <td>{produto.prod_status}</td>
                  <td>{getNomeFornecedor(produto.fk_id_forn)}</td>
                  <td onClick={() => navegacao('../editarProdutos/' + produto.id_prod)}><FaRegEdit /></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination-controls">
            <button onClick={handlePrevious} disabled={currentPage === 0}>
              Anterior
            </button>
            <button onClick={handleNext} disabled={(currentPage + 1) * rowsPerPage >= produto.length}>
              Próximo
            </button>
          </div>
        </div>
      </ComponentMenu>
    );
  };

  return <ProductTable produto={filteredProdutos} />;
}

export default Produtos;