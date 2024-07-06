import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Produtos from './pages/produtos/produtos';
import Fornecedores from './pages/fornecedores/fornecedores';
import Menu from './pages/menu/menu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/fornecedores" element={<Fornecedores />} />
    </Routes>
  );
}

export default App;