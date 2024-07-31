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
      <Route path="//menu/:id" element={<Menu />} />
      <Route path="/produtos/:id" element={<Produtos />} />
      <Route path="/cadastroprodutos/:id" element={<CadastroProduto/>} />
      <Route path="/fornecedores/:id" element={<Fornecedores/>} />
      <Route path="/editarFornecedor/:id/:forn" element={<EditarFornecedor/>} />
      <Route path="/editarProdutos/:id/:prod" element={<EditarProdutos/>} />
      <Route path="/fornecedorxproduto/:id" element={<Fornecedorxproduto/>} />
      <Route path="/cadastrarFornecedores/:id" element={<CadastroFornecedor/>} />
      <Route path="/movimentacaoLoja/:id/:loja" element={<MovimentoLoja/>} />
      <Route path="/estoque/:id" element={<Estoque/>} />
      <Route path="/loja/:id" element={<Lojas/>} />

    </Routes>
  );
}

export default App;