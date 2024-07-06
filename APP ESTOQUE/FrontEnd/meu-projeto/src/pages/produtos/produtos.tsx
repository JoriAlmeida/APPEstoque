import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Produto } from 'Models/Produto';


function Produtos() {
    const navegate = useNavigate();

    const [produto, setProduto] = useState<Array<Produto>>([]);
    const [validador, setValidador] = useState('');
  
  


  return (
    <div className="menu-produtos">
    <div className="produtos-box">
      <div className="textoProduto">
        <h1>PRODUTOS</h1>
      </div>
      <div className="produto-bar">
      </div>
      <div className="produtoFornecedor-bar">
      </div>
      <table className="tableProdutos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Ponto de Reposição</th>
            <th>Editar</th>
          </tr>
        </thead>
        <tbody>
          {produto.map(produto => (
            <tr key={produto.id_prod}>
              <td>{produto.id_prod}</td>
              <td>{produto.prod_nome}</td>
              <td>{produto.prod_descricao}</td>
              <td>{produto.prod_ponto_rep}</td>
              <td><button className="btnAlteracao" onClick={() => navegate('../editarProdutos/' + produto.id_prod)}>Editar</button></td>

            </tr>)
          )}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default Produtos;