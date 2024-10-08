import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { MovimentacaoLoja } from '../../Models/MovimentacaoLoja';
import { Produto } from '../../Models/Produto';
import { Lojas } from '../../Models/Lojas';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './movimentacaoLoja.css';
import { TbArrowsLeftRight } from "react-icons/tb";
import { FaCircle } from "react-icons/fa";


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
                `Loja ${movLoja.fkidprod}`.toLowerCase().includes(searchTerm.toLowerCase())
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
        setProdutos(respProd.data);

    }


    const getNomeProduto = (id: number) => {
        const produto = produtos.find(produto => produto.produto === id);
        return produto ? produto.prodnome : 'Desconhecido';
    };




    return (
        <ComponentMenu>
            <div className="containerMovimentacaoLoja">
                <h1 className="tituloMovimentacaoLoja">LOJA {param.loja}</h1>
                <div className="boxSuperiorMovimentacaoLoja">
                    <input
                        type="text"
                        placeholder="Informe o número da loja"
                        className="search-inputMovimentacaoLoja"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                    <div>

                    </div>
                </div>
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
                                <td>
                                    <FaCircle
                                        style={{
                                            color: movLoja.movqtde < movLoja.movpontorep ? 'red' : 'green',
                                            border: '1px solid black',
                                            borderRadius: '50%'
                                        }}
                                    />
                                </td>
                                <td>
                                    <button onClick={() => navegacao('../transferenciaLojas/' + param.id + '/'+ movLoja.fkidloja +'/'+ movLoja.fkidprod)} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer', fontSize: 15 }}>
                                        <TbArrowsLeftRight className='iconetransferencia' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ComponentMenu>
    )
}

export default MovimentoLoja;