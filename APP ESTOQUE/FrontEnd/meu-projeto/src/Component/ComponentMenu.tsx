import React, { useState, ReactNode } from 'react';
import { FaBox, FaWarehouse, FaTruck, FaExchangeAlt, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import '../Component/ComponentMenu.css';
import { IoExitOutline } from "react-icons/io5";

interface MenuProps {
  children: ReactNode;
}

const ComponentMenu: React.FC<MenuProps> = ({ children }) => {
  const [showSubmenus, setShowSubmenus] = useState(false);

  const toggleSubmenus = () => {
    setShowSubmenus(!showSubmenus);
  };

  return (
    <div className="menu-wrapper">
      <nav className="menu-sidebar" aria-label="Menu principal">
        <div className="profile-section">
          <div className = "boxProfile">
          <div className="avatar-placeholder" aria-hidden="true">
            <FaUser size={1} color="black" />
          </div>
          <h1 className ="NomeUsuario">Administrador</h1>
        </div>
          <div className="menu-buttons">
            <NavLink to="/produtos" className="main-button" aria-label="Produtos">
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
                <NavLink to="/loja" className="submenu-button" aria-label="Loja">
                  <FaWarehouse size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
                  LOJA
                </NavLink>
                <NavLink to="/estoque" className="submenu-button" aria-label="Estoque">
                  <FaWarehouse size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
                  ESTOQUE
                </NavLink>
              </div>
            )}
            <NavLink to="/fornecedores" className="main-button" aria-label="Fornecedores">
              <FaTruck size={20} style={{ marginRight: '10px' }} aria-hidden="true" />
              FORNECEDORES
            </NavLink>
            <NavLink to="/movimentacao" className="main-button" aria-label="Movimentação">
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