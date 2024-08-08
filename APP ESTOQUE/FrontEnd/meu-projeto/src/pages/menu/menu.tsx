import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import React, { useState, useEffect } from 'react';
import './menu.css';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { Fornecedor } from '../../Models/Fornecedor';
import { Lojas } from '../../Models/Lojas';
import { useNavigate, useParams } from 'react-router-dom';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';

function Menu() {

  const [produto, setProduto] = useState<Array<Produto>>([]);
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
  const [lojas, setLojas] = useState<Array<Lojas>>([]);
  const navegacao = useNavigate();
  const param = useParams();

  async function carregarProdutos() {
    const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    setProduto(respProd.data);
  }

  async function carregarFornecedores() {
    const respForn = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    setFornecedores(respForn.data);
  }

  async function carregarLojas() {
    const resp = await axios.get('http://localhost:8081/loja/encontrarLojas');
    setLojas(resp.data);
  }

  useEffect(() => {
    carregarProdutos();
    carregarFornecedores();
    carregarLojas();
  }, [])

  const getQuantProd = () => {
    return produto.length;
  }

  const getQuantForn = () => {
    return fornecedores.length;
  }

  const getQuantLoja = () => {
    return lojas.length;
  }

  return (
    <ComponentMenu>
      <div className="menu-produtos">
        <div className="boxDashboard">
          <button className="dashboard-button" onClick={() => navegacao('../produtos/' + param.id)}>
            <h5 className="tituloDoMenu">PRODUTOS</h5>
            <FaBox size={40}/>
            <span>{getQuantProd()}</span>
          </button>
          <button className="dashboard-button" onClick={() => navegacao('../fornecedores/' + param.id)}>
            <h5 className="tituloDoMenu">FORNECEDORES</h5>
            <FaTruck size={40}/>
            <span>{getQuantForn()}</span>
          </button>
          <button className="dashboard-button" onClick={() => navegacao('../loja/' + param.id)}>
            <h5 className="tituloDoMenu">LOJAS</h5>
            <FaWarehouse size={40}/>
            <span>{getQuantLoja()}</span>
          </button>
          <button className="dashboard-button">
            <h5 className="tituloDoMenu">EXTRATO</h5>
            <FaExchangeAlt size={40} style={{ marginRight: '10px' }} aria-hidden="true" />
          </button>
        </div>
      </div>
    </ComponentMenu>
  )
}

export default Menu;