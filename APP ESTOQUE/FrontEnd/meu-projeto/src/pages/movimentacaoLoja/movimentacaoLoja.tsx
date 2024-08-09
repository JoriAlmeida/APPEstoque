import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { MovimentacaoLoja } from '../../Models/MovimentacaoLoja';
import { Produto } from '../../Models/Produto';
import { Lojas } from '../../Models/Lojas';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './movimentacaoLoja.css';



function MovimentoLoja() {
    const navegacao = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [movLoja, setMovLoja] = useState<Array<MovimentacaoLoja>>([]);
    const [filteredMovLojas, setFilteredMovLojas] = useState<Array<MovimentacaoLoja>>([]);
    const [produtos, setProdutos] = useState<Array<Produto>>([]);

    const param = useParams();

    async function carregarMovLojas() {
        const resp = await axios.get(`http://localhost:8081/movimentacaoLoja/encontrarMovimentacaoLojaPorLoja/${param.loja}`);
        setMovLoja(resp.data.slice(0, 10));
        setFilteredMovLojas(resp.data.slice(0, 10));
    }

    useEffect(() => {
        if (searchTerm === '') {
            setFilteredMovLojas(movLoja);
        } else {
            const results = movLoja.filter(movLoja =>
                `Loja ${movLoja.idmovimentacao}`.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredMovLojas(results);
        }
    }, [searchTerm, movLoja]);

    useEffect(() => {
        carregarMovLojas();
        carregarProdutos();
    }, []);


    async function carregarProdutos() {
        const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
        setProdutos(respProd.data.slice(0, 10));
    
      }


    const getNomeProduto = (id: number) => {
        const produto = produtos.find(produto => produto.produto === id);
        return produto ? produto.prodnome : 'Desconhecido';
      };
    

    return (
        <ComponentMenu>
            <div className="containerMovimentacaoLoja">
                <h1 className="tituloMovimentacaoLoja">LOJA {param.loja}</h1>
                <input
                    type="text"
                    placeholder="Informe o número da loja"
                    className="search-inputMovimentacaoLoja"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <table className="movimentacaoLoja-table">
                    <thead>
                        <tr>
                            <th>PRODUTO</th>
                            <th>QUANTIDADE</th>
                            <th>VALOR</th>
                            <th>PONTO REPOSIÇÃO</th>
                            <th>REPOR PRODUTO</th>
                            <th>TRANSFERIR</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovLojas.map(movLoja => (
                            <tr key={movLoja.idmovimentacao}>
                                <td>{getNomeProduto(movLoja.fkidprod)}</td>
                                <td>{movLoja.movqtde}</td>
                                <td>{movLoja.movvalor}</td>
                                <td>{movLoja.movpontorep}</td>
                                <td>O</td>
                                <td><button>TRANSF</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="button-containerMovimentacaoLoja">
                    <button className="action-buttonMovimentacaoLoja" onClick={() => navegacao('../cadastroProdutos')}>Cadastrar Produto</button>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default MovimentoLoja;