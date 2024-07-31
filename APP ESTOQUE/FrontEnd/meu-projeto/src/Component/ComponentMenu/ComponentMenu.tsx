import React, { useState, ReactNode ,useEffect} from 'react';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink, useParams} from 'react-router-dom';
import './ComponentMenu.css';
import { IoExitOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Usuarios } from 'Models/Usuarios';



interface MenuProps {
  children: ReactNode;
}

const ComponentMenu: React.FC<MenuProps> = ({ children }) => {

  const [showSubmenus, setShowSubmenus] = useState(false);
  const param = useParams();
  const navegacao = useNavigate();
  const [usuario, setUsuario] = useState("");



  const toggleSubmenus = () => {
    setShowSubmenus(!showSubmenus);
  };


  async function carregarNome() {
    const resp = await axios.get('http://localhost:8081/usuario/encontrarUsuarioId/' + param.id);
    setUsuario(resp.data)
    const ajudante = resp.data.usu_nome;
    setUsuario(ajudante);
  }

  useEffect(() => {
    carregarNome();
  }, []);


return (
  <div className="menu-wrapper">
    <nav className="menu-sidebar" aria-label="Menu principal">
      <div className="profile-section">
        <div className="boxProfile">
          <div className="avatar-placeholder" aria-hidden="true" onClick={() => navegacao('../menu/'+param.id)}>
            <FaUser size={1} color="black" />
          </div>
          <h1 className="NomeUsuario">{usuario}</h1>
        </div>
        <div className="menu-buttons">
          <NavLink to={"/produtos/"+param.id} className="main-button" aria-label="Produtos">
            <FaBox size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
            PRODUTOS
          </NavLink>
          <button
            className="main-buttonDeposito"
            onClick={toggleSubmenus}
            aria-expanded={showSubmenus}
            aria-controls="submenu-depositos"
            aria-label="Depositos"
          >
            <FaWarehouse size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
            DEPOSITOS
          </button>
          {showSubmenus && (
            <div className={`submenu-container ${showSubmenus ? 'active' : ''}`} id="submenu-depositos">
              <NavLink to={"/loja/"+param.id} className="submenu-button" aria-label="Loja">
                <FaWarehouse size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
                LOJA
              </NavLink>
              <NavLink to={"/estoque/"+param.id} className="submenu-button" aria-label="Estoque">
                <FaWarehouse size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
                ESTOQUE
              </NavLink>
            </div>
          )}
          <NavLink to={"/fornecedores/"+param.id} className="main-button" aria-label="Fornecedores">
            <FaTruck size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
            FORNECEDORES
          </NavLink>
          <NavLink to={"/movimentacao"+param.id} className="main-button" aria-label="Movimentação">
            <FaExchangeAlt size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
            MOVIMENTAÇÃO
          </NavLink>
        </div>
        <div className="botaoSair">
          <NavLink to="/" className="logoSair" aria-label="Sair">
            <IoExitOutline size={30} style={{ marginRight: '10px' }} aria-hidden="true" />
          </NavLink>
        </div>
      </div>
    </nav>
    <main className="content-section" aria-live="polite">
      {children}
    </main>
  </div>
);
};

export default ComponentMenu;