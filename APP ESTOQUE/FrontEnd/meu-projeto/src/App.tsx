import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Produtos from './pages/produtos/produtos';
import Fornecedores from './pages/fornecedores/fornecedores';
import Menu from './pages/menu/menu';
import CadastroProduto from './pages/cadastrarProdutos/cadastrarProdutos';
import CadastroFornecedor from './pages/cadastrarFornecedores/cadastrarFornecedores';
import EditarFornecedor from './pages/editarFornecedor/editarFornecedor';
import Fornecedorxproduto from './pages/fornecedorxproduto/fornecedorxproduto';
import Lojas from './pages/lojas/lojas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/cadastroprodutos" element={<CadastroProduto/>} />
      <Route path="/fornecedores" element={<Fornecedores/>} />
      <Route path="/editarFornecedor/:id" element={<EditarFornecedor/>} />
      <Route path="/fornecedorxproduto" element={<Fornecedorxproduto/>} />
      <Route path="/cadastrarFornecedores" element={<CadastroFornecedor/>} />
      <Route path="/loja" element={<Lojas/>} />

    </Routes>
  );
}

export default App;