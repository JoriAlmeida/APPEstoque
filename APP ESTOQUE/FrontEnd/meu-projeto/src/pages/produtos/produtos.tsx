import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { Fornecedor } from '../../Models/Fornecedor';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './produtos.css';
import { FaRegEdit, FaPlusCircle } from "react-icons/fa";


function Produtos() {
  const navegacao = useNavigate();
  const param = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [produto, setProduto] = useState<Array<Produto>>([]);
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
  const [filteredProdutos, setFilteredProdutos] = useState<Array<Produto>>([]);



  useEffect(() => {
    const results = produto.filter(produto =>
      produto.prodnome.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProdutos(results);
  }, [searchTerm, produto]);


  async function carregarProdutos() {
    const resp = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    const respForn = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    setProduto(resp.data);
    setFornecedores(respForn.data);
    setFilteredProdutos(resp.data);
  }
  useEffect(() => {
    carregarProdutos();
  }, []);







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
          <h1 className="tituloProduto">GESTÃO DE PRODUTOS</h1>
          <div className="boxSuperiorProduto">
            <input
              type="text"
              placeholder="Buscar produto por nome"
              className="search-inputProduto"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />

            <div className="botaoCadastroProduto">
              <FaPlusCircle className="action-button" onClick={() => navegacao('../cadastroProdutos/' + param.id)} />
            </div>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>PRODUTO</th>
                <th>DESCRIÇÃO</th>
                <th>PONTO REP</th>
                <th>VALOR</th>
                <th>STATUS</th>
                <th>FORNECEDOR</th>
                <th>EDITAR</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.prodnome}</td>
                  <td>{produto.proddescricao}</td>
                  <td>{produto.prodpontorep}</td>
                  <td>{formatCurrency(produto.prodvalor)}</td>
                  <td>{produto.prodstatus}</td>
                  <td>{getNomeFornecedor(produto.fkidforn)}</td>
                  <td onClick={() => navegacao('../editarProdutos/' + param.id + "/" + produto.produto)}><FaRegEdit /></td>
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