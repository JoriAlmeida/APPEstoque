import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { Fornecedor } from '../../Models/Fornecedor';
import ComponentMenu from '../../Component/ComponentMenu';
import './produtos.css';


function Produtos() {
  const navegacao = useNavigate();

  const [searchTerm, setSearchTerm] = useState('');
  const [produto, setProduto] = useState<Array<Produto>>([]);
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);


  async function carregarProdutos() {
    const resp = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    const respForn = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    setProduto(resp.data.slice(0, 10));
    setFornecedores(respForn.data.slice(0, 10));

  }


  useEffect(() => {
    carregarProdutos();
  }, [])

  const getNomeFornecedor = (id: number) => {
    const fornecedor = fornecedores.find(fornecedor => fornecedor.id_forn === id);
    return fornecedor ? fornecedor.forn_nome : 'Desconhecido';

  };


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

              <th>Nome Produto</th>
              <th>Descrição</th>
              <th>Ponto de Reposição</th>
              <th>Valor Unit</th>
              <th>Status</th>
              <th>ID Fornecedor</th>
              <th>Exibir Produto</th>
            </tr>
          </thead>
          <tbody>
            {produto.map(produto => (
              <tr key={produto.id_prod}>

                <td>{produto.prod_nome}</td>
                <td>{produto.prod_descricao}</td>
                <td>{produto.prod_ponto_rep}</td>
                <td>{produto.valor_quant}</td>
                <td>{produto.prod_status}</td>
                <td>{getNomeFornecedor(produto.fk_id_forn)}</td>
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