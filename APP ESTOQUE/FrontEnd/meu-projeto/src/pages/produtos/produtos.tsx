import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import ComponentMenu from '../../Component/ComponentMenu';
import './produtos.css';


function Produtos() {
  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [produto, setProduto] = useState<Array<Produto>>([]);


  async function carregarProdutos() {
    const resp = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    setProduto(resp.data.slice(0, 10));

  }


  useEffect(() => {
    carregarProdutos();

  }, [])



  return (
    <ComponentMenu>
      <div className="containerProduto">
        <h1 className="tituloProduto">Gestão de Produtos</h1>
        <input
          type="text"
          placeholder="Buscar produto por nome"
          className="search-inputProduto"
        />
        <table className="product-table">
          <thead>
            <tr>
              <th>ID Produto</th>
              <th>ID Fornecedor</th>
              <th>Nome Produto</th>
              <th>Descrição</th>
              <th>Ponto de Reposição</th>
              <th>Valor Unit</th>
              <th>Status</th>
              <th>Exibir Produto</th>
            </tr>
          </thead>
          <tbody>
            {produto.map(produto => (
              <tr key={produto.id_prod}>
                <td>{produto.id_prod}</td>
                <td>{produto.fk_id_forn}</td>
                <td>{produto.prod_nome}</td>
                <td>{produto.prod_descricao}</td>
                <td>{produto.prod_ponto_rep}</td>
                <td>{produto.valor_quant}</td>
                <td>{produto.prod_status}</td>
                <td><button onClick={() => navegacao('../editarProdutos')}>Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-containerProduto">
          <button className="action-button" onClick={() => navegacao('../cadastroProdutos')}>Cadastrar Produto</button>
        </div>
      </div>
    </ComponentMenu>
  )
}

export default Produtos;