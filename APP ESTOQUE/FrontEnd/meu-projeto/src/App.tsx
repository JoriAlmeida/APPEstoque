import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Produtos from './pages/produtos/produtos';
import Fornecedores from './pages/fornecedores/fornecedores';
import Menu from './pages/menu/menu';
import CadastroProduto from './pages/cadastrarProdutos/cadastrarProdutos';
import CadastroFornecedor from './pages/cadastrarFornecedores/cadastrarFornecedores';
import EditarFornecedor from './pages/editarFornecedor/editarFornecedor';
import EditarProdutos from './pages/editarProdutos/editarProdutos';
import Fornecedorxproduto from './pages/fornecedorxproduto/fornecedorxproduto';
import MovimentoLoja from './pages/movimentacaoLoja/movimentacaoLoja';
import Estoque from './pages/estoque/estoque';
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
      <Route path="/editarProdutos/:id" element={<EditarProdutos/>} />
      <Route path="/fornecedorxproduto" element={<Fornecedorxproduto/>} />
      <Route path="/cadastrarFornecedores" element={<CadastroFornecedor/>} />
      <Route path="/movimentacaoLoja/:id" element={<MovimentoLoja/>} />
      <Route path="/estoque" element={<Estoque/>} />
      <Route path="/loja" element={<Lojas/>} />

    </Routes>
  );
}

export default App;