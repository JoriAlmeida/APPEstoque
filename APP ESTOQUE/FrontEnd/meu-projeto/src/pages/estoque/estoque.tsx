import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';
import { Estoque } from '../../Models/Estoque';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './estoque.css';
import { Produto } from '../../Models/Produto';
import { FaRegEdit, FaPlusCircle } from "react-icons/fa";
import { TbArrowsLeftRight } from "react-icons/tb";

function Estoques() {

  const navegacao = useNavigate();
  const param = useParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [estoque, setEstoque] = useState<Array<Estoque>>([]);
  const [filteredEstoque, setFilteredEstoque] = useState<Array<Estoque>>([]);
  const [produto, setProduto] = useState<Array<Produto>>([]);
  const [pontoRep, setPontoRep] = useState(0);
  const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);


  async function carregarEstoque() {
    const resp = await axios.get('http://localhost:8081/estoque/encontrarEstoque');
    const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
    const respForn = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
    setFornecedores(respForn.data.slice(0, 10));
    setEstoque(resp.data.slice(0, 10));
    setFilteredEstoque(resp.data.slice(0, 10)); // Inicializa a lista filtrada
    setProduto(respProd.data);
  }


  useEffect(() => {
    carregarEstoque();
    console.log(produto)
  }, []);


  const getPontoRep = (estoqueIdProd) => {
    const prod = produto.find(p => p.produto === estoqueIdProd);
    return prod ? prod.prodpontorep : 'N/A';
  };


  const getNomeProduto = (id: number) => {
    const produtos = produto.find(produtos => produtos.produto === id);
    return produtos ? produtos.prodnome : 'Desconhecido';
  };

  const getIdFornecedor = (id: number) => {
    const produtos = produto.find(produtos => produtos.produto === id);
    return produtos ? getNomeFornecedor(produtos.fkidforn) : 'Desconhecido';
  };

  const getNomeFornecedor = (id: number) => {
    const fornecedor = fornecedores.find(fornecedores => fornecedores.id_forn === id);
    return fornecedores ? fornecedor?.forn_nome : 'Desconhecido';
  };

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredEstoque(estoque);
    } else {
      const results = estoque.filter(estoque =>
        `Estoque ${estoque.estoqueidprod}`.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredEstoque(results);
    }
  }, [searchTerm, estoque]);

  return (
    <ComponentMenu>
      <div className="containerEstoque">
        <h1 className="tituloEstoque">ESTOQUE</h1>
        <div className="boxSuperiorEstoque">
          <input
            type="text"
            placeholder="Buscar produto por nome"
            className="search-inputEstoque"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <div className="botaoCadastroEstoque">
            <FaPlusCircle className="action-button" onClick={() => navegacao('../movimentacaoEstoque/' + param.id)} />
          </div>
        </div>
        <table className="estoque-table">
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th>FORNECEDOR</th>
              <th>QUANTIDADE</th>
              <th>VALOR</th>
              <th>PONTO REP</th>
              <th>VALOR MEDIO</th>
              <th>TRANSFERIR</th>
            </tr>
          </thead>
          <tbody>
            {filteredEstoque.map(estoque => (
              <tr key={estoque.estoque}>
                <td>{getNomeProduto(estoque.estoqueidprod)}</td>
                <td>{getIdFornecedor(estoque.estoqueidprod)}</td>
                <td>{estoque.estoqueqtd}</td>
                <td>{estoque.estoquevalor}</td>
                <td>{getPontoRep(estoque.estoqueidprod)}</td>
                <td>{estoque.estoquevalor / estoque.estoqueqtd}</td>
                <td>
                  <button onClick={() => navegacao('../transferenciaEstoque/' + param.id)} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontSize: 15 }}>
                    <TbArrowsLeftRight className='iconetransferencia' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="button-containerEstoque">
        </div>
      </div>
    </ComponentMenu>
  );
}

export default Estoques;