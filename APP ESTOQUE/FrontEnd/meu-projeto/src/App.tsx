import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Produtos from './pages/produtos/produtos';
import Fornecedores from './pages/fornecedores/fornecedores';
import Menu from './pages/menu/menu';
import CadastroProduto from './pages/cadastrarProdutos/cadastrarProdutos';
import CadastroFornecedor from './pages/cadastrarFornecedores/cadastrarFornecedores';
import CadastroLoja from './pages/cadastrarLoja/cadastrarLoja';
import EditarFornecedor from './pages/editarFornecedor/editarFornecedor';
import EditarProdutos from './pages/editarProdutos/editarProdutos';
import Fornecedorxproduto from './pages/fornecedorxproduto/fornecedorxproduto';
import MovimentoLoja from './pages/movimentacaoLoja/movimentacaoLoja';
import MovimentoEstoque from './pages/movimentacaoEstoque/movimentacaoEstoque';
import TransferenciaEstoque from './pages/transferenciaEstoque/transferenciaEstoque';
import TransferenciaLojas from './pages/transferenciaLojas/transferenciaLojas';
import Estoque from './pages/estoque/estoque';
import Lojas from './pages/lojas/lojas'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="//menu/:id" element={<Menu />} />
      <Route path="/produtos/:id" element={<Produtos />} />
      <Route path="/cadastroprodutos/:id" element={<CadastroProduto/>} />
      <Route path="/cadastrarLoja/:id" element={<CadastroLoja/>} />
      <Route path="/fornecedores/:id" element={<Fornecedores/>} />
      <Route path="/editarFornecedor/:id/:forn" element={<EditarFornecedor/>} />
      <Route path="/editarProdutos/:id/:prod" element={<EditarProdutos/>} />
      <Route path="/fornecedorxproduto/:id" element={<Fornecedorxproduto/>} />
      <Route path="/cadastrarFornecedores/:id" element={<CadastroFornecedor/>} />
      <Route path="/movimentacaoLoja/:id/:loja" element={<MovimentoLoja/>} />
      <Route path="/movimentacaoEstoque/:id" element={<MovimentoEstoque/>} />
      <Route path="/transferenciaEstoque/:id/:produto" element={<TransferenciaEstoque/>} />
      <Route path="/transferenciaLojas/:id/:loja/:produto" element={<TransferenciaLojas/>} />
      <Route path="/estoque/:id" element={<Estoque/>} />
      <Route path="/loja/:id" element={<Lojas/>} />

    </Routes>
  );
}

export default App;