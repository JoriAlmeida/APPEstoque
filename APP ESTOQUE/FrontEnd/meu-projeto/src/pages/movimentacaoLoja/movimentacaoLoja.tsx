import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { MovimentacaoLoja } from '../../Models/MovimentacaoLoja';
import { Lojas } from '../../Models/Lojas';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './movimentacaoLoja.css';


function MovimentoLoja() {
    const navegacao = useNavigate();

    const [searchTerm, setSearchTerm] = useState('');
    const [movLoja, setMovLoja] = useState<Array<MovimentacaoLoja>>([]);
    const [filteredMovLojas, setFilteredMovLojas] = useState<Array<MovimentacaoLoja>>([]);

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
                `Loja ${movLoja.id_mov_loja}`.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredMovLojas(results);
        }
    }, [searchTerm, movLoja]);

    useEffect(() => {
        carregarMovLojas();
    }, []);



    return (
        <ComponentMenu>
            <div className="containerMovimentacaoLoja">
                <h1 className="tituloMovimentacaoLoja">Gestão de Loja</h1>
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
                            <th>ID MOV</th>
                            <th>ID LOJA</th>
                            <th>ID PROD</th>
                            <th>MOV TIPO</th>
                            <th>MOV QUANT</th>
                            <th>VALOR</th>
                            <th>PONTO REP</th>
                            <th>VALOR MEDIO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMovLojas.map(movLoja => (
                            <tr key={movLoja.id_mov_loja}>
                                <td>{movLoja.id_mov_loja}</td>
                                <td>{movLoja.fk_id_loja}</td>
                                <td>{movLoja.fk_id_prod}</td>
                                <td>{movLoja.mov_tipo}</td>
                                <td>{movLoja.mov_qtde}</td>
                                <td>{movLoja.mov_valor}</td>
                                <td>{movLoja.mov_ponto_rep}</td>
                                <td>{movLoja.mov_valor_medio}</td>
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