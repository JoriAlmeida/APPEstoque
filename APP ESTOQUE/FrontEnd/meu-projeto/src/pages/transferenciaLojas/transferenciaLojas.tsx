import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './transferenciaLojas.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { MovimentacaoLoja } from '../../Models/MovimentacaoLoja';

function TransferenciaLojas() {
    const navegacao = useNavigate();
    const param = useParams();
    const [produtos, setProdutos] = useState<Array<Produto>>([]);
    const [movimentacaoLoja, setMovimentacaoLoja] = useState<Array<MovimentacaoLoja>>([]);

    const [idmovimentacao, setIdmovimentacao] = useState(0);
    const [fkidloja, setFkidloja] = useState(0);
    const [origem, setOrigem] = useState(param.loja);
    const [fkidprod, setFkidprod] = useState(0);
    const [movqtde, setMovqtde] = useState(0);
    const [movvalor, setMovvalor] = useState(0);
    const [movpontorep, setMovpontorep] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    async function transferenciaEntreLojas(e) {
        e.preventDefault();
        const bodyRequest = {
            fkidprod: fkidprod,
            origem: origem,
            fkidloja: fkidloja,
            movqtde: movqtde,
        };


        if (!fkidprod || fkidprod === 0) {
            alert('Preencha corretamente o campo produto.');
        } else if (!fkidloja || fkidloja === 0) {
            alert('Preencha corretamente o campo quantidade.');
        }
        else if (!movqtde || movqtde === 0) {
            alert('Preencha corretamente o campo quantidade.');
        } else {
            try {
                await axios.post('http://localhost:8081/movimentacaoLoja/transferir', bodyRequest);
                alert("Compra realizada");
                navegacao('/estoque/' + param.id);
            } catch (error) {
                console.error("Erro ao cadastrar produto, revise os campos:", error);
                alert("Erro ao cadastrar produto, revise os campos:");
            }
        }
    }


    async function carregarProdutosLojas() {
        const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
        const respLoja = await axios.get('http://localhost:8081/movimentacaoLoja/encontrarMovimentacaoLoja');
        setProdutos(respProd.data);
        setMovimentacaoLoja(respLoja.data);

    }

    useEffect(() => {
        carregarProdutosLojas();
    }, []);


    const getBuscarValor = (id: number) => {
        const produto = produtos.find(produto => produto.produto === id);
        return produto ? produto.prodvalor : '';
    };


    const lojasUnicas = Array.from(new Map(
        movimentacaoLoja.map(loja => [loja.fkidloja, loja])
    ).values());

    useEffect(() => {
        const produto = produtos.find(produto => produto.produto === fkidprod);
        const valorProduto = produto ? produto.prodvalor : 0;
        setMovvalor(valorProduto);
        setValorTotal(valorProduto * movvalor);
    }, [fkidprod, produtos]);


    const getNomeProduto = (id: number) => {
        const produto = produtos.find(produto => produto.produto === id);
        return produto ? produto.prodnome : 'Desconhecido';
    };

    return (
        <ComponentMenu>

            <div className="TransferenciaLojas-container">
                <div className="TransferenciaLojas-header">
                    <h2 className="TransferenciaLojas-titulo">TRANSFERÊNCIA ENTRE LOJAS</h2>
                </div>
                <div className="TransferenciaLojas-content">
                    <div className="TransferenciaLojas-form">
                        <form onSubmit={transferenciaEntreLojas}>
                            <div className="TransferenciaLojas-formRow">
                                <div className="TransferenciaLojas-inlineGroup">
                                    <div className="TransferenciaLojas-formGroup">
                                        <label className="TransferenciaLojas-label">DE</label>
                                        <input
                                            type="text"
                                            value={origem}
                                            onChange={e => setOrigem((e.target.value))}
                                            className={`TransferenciaLojas-input ${origem ? 'filled' : 'empty'}`}
                                            disabled
                                        />
                                    </div>
                                    <div className="TransferenciaLojas-formGroup TransferenciaLojas-formGroup-name">
                                        <label className="TransferenciaLojas-label">PARA</label>
                                        <select
                                            name="nomeloja"
                                            value={fkidloja}
                                            onChange={e => setFkidloja(Number(e.target.value))}
                                            className={`TransferenciaLojas-input ${fkidloja ? 'filled' : 'empty'}`}
                                        >
                                            <option value="">Selecione a Loja</option>
                                            {lojasUnicas.map(loja => (
                                                <option key={loja.fkidloja} value={loja.fkidloja}>
                                                    LOJA {loja.fkidloja}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                </div>
                            </div>


                            <div className="TransferenciaLojas-formRow">

                                <div className="TransferenciaLojas-formGroup TransferenciaLojas-formGroup-name">
                                    <label className="TransferenciaLojas-label">Nome do Produto</label>
                                    <select
                                        name="nomeproduto"
                                        value={fkidprod}
                                        onChange={e => setFkidprod(Number(e.target.value))}
                                        className={`TransferenciaLojas-input ${fkidprod ? 'filled' : 'empty'}`}
                                    >
                                        <option value=""></option>
                                        {produtos.map(prod => (
                                            <option key={prod.produto} value={prod.produto}>
                                                {prod.prodnome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="TransferenciaLojas-formGroup TransferenciaLojas-formGroup-status">


                                </div>
                            </div>
                            <div className="TransferenciaLojas-formRow">
                                <div className="TransferenciaLojas-inlineGroup">
                                    <div className="TransferenciaLojas-formGroup">
                                        <label className="TransTransferenciaLojasferenciaEstoque-label">QUANTIDADE</label>
                                        <input
                                            type="number"
                                            onChange={e => setMovqtde(Number(e.target.value))}
                                            className={`TransferenciaLojas-input ${movqtde ? 'filled' : 'empty'}`}
                                            required
                                        />
                                    </div>
                                    <div className="TransferenciaLojas-formGroup">
                                        <label className="TransferenciaLojas-label">VALOR</label>
                                        <input
                                            type="text"
                                            value={getBuscarValor(movvalor)}
                                            className={`TransferenciaLojas-input ${movvalor ? 'filled' : 'empty'}`}
                                            disabled  // Campo desabilitado para exibir o valor automaticamente
                                        />
                                    </div>

                                    <div className="TransferenciaLojas-formGroup">
                                        <label className="TransferenciaLojas-label">VALOR TOTAL</label>
                                        <input
                                            type="text"
                                            value={valorTotal}
                                            className="TransferenciaLojas-input"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="TransferenciaLojas-buttonContainer">
                                <button type="submit" className="TransferenciaLojas-actionButton">Confirmar</button>
                                <button type="button" className="TransferenciaLojas-actionButton TransferenciaLojas-cancelButton" onClick={() => navegacao('/estoque/' + param.id)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    );
}

export default TransferenciaLojas;