import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './transferenciaEstoque.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { MovimentacaoLoja } from '../../Models/MovimentacaoLoja';

function TransferenciaEstoque() {
    const navegacao = useNavigate();
    const param = useParams();
    const [produtos, setProdutos] = useState<Array<Produto>>([]);
    const [movimentacaoLoja, setMovimentacaoLoja] = useState<Array<MovimentacaoLoja>>([]);
    const [estoqueidprod, setEstoqueidprod] = useState(0);
    const [estoquetipo, setEstoquetipo] = useState(0);
    const [estoqueqtd, setEstoqueqtd] = useState(0);
    const [estoquevalor, setEstoquevalor] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);
    const [estoquetransferencia, setEstoquetransferencia] = useState(0);

    async function acrescentarEstoque(e) {
        e.preventDefault();
        const bodyRequest = {
            estoqueidprod: estoqueidprod,
            estoquetransferencia: estoquetransferencia,
            estoquetipo: estoquetipo,
            estoqueqtd: estoqueqtd,
            estoquevalor: 0,
            estoquepontorep: 0,
        };


        if (!estoqueidprod || estoqueidprod === 0) {
            alert('Preencha corretamente o campo produto.');
        } else if (!estoquetipo || estoquetipo === 0) {
            alert('Selecione uma das opções.');
        } else if (!estoqueqtd || estoqueqtd === 0) {
            alert('Preencha corretamente o campo quantidade.');
        } else {
            try {
                await axios.post('http://localhost:8081/estoque/cadastrarEstoque', bodyRequest);
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
        const produto = produtos.find(produto => produto.produto === estoqueidprod);
        const valorProduto = produto ? produto.prodvalor : 0;
        setEstoquevalor(valorProduto);
        setValorTotal(valorProduto * estoqueqtd);
    }, [estoqueidprod, estoqueqtd, produtos]);
    

    const getNomeProduto = (id: number) => {
        const produto = produtos.find(produto => produto.produto === id);
        return produto ? produto.prodnome : 'Desconhecido';
      };

    return (
        <ComponentMenu>

            <div className="TransferenciaEstoque-container">
                <div className="TransferenciaEstoque-header">
                    <h2 className="TransferenciaEstoque-titulo">TRANSFERÊNCIA PARA LOJA</h2>
                </div>
                <div className="TransferenciaEstoque-content">
                    <div className="TransferenciaEstoque-form">
                        <form onSubmit={acrescentarEstoque}>
                            <div className="TransferenciaEstoque-formRow">
                                <div className="TransferenciaEstoque-inlineGroup">
                                    <div className="TransferenciaEstoque-formGroup">
                                        <label className="TransferenciaEstoque-label">DE</label>
                                        <input
                                            type="text"
                                            placeholder='ESTOQUE'
                                            className={`TransferenciaEstoque-input ${estoqueqtd ? 'filled' : 'empty'}`}
                                            disabled
                                        />
                                    </div>
                                    <div className="TransferenciaEstoque-formGroup TransferenciaEstoque-formGroup-name">
                                        <label className="TransferenciaEstoque-label">PARA</label>
                                        <select
                                            name="nomeloja"
                                            value={estoquetransferencia}
                                            onChange={e => setEstoquetransferencia(Number(e.target.value))}
                                            className={`TransferenciaEstoque-input ${estoquetransferencia ? 'filled' : 'empty'}`}
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


                            <div className="TransferenciaEstoque-formRow">

                                <div className="TransferenciaEstoque-formGroup TransferenciaEstoque-formGroup-name">
                                    <label className="TransferenciaEstoque-label">Nome do Produto</label>
                                    <select
                                        name="nomeproduto"
                                        value={estoqueidprod}
                                        onChange={e => setEstoqueidprod(Number(e.target.value))}
                                        className={`TransferenciaEstoque-input ${estoqueidprod ? 'filled' : 'empty'}`}
                                    >
                                        <option value=""></option>
                                        {produtos.map(prod => (
                                            <option key={prod.produto} value={prod.produto}>
                                                {prod.prodnome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="TransferenciaEstoque-formGroup TransferenciaEstoque-formGroup-status">
                                    <label className="TransferenciaEstoque-label">TIPO</label>
                                    <select
                                        name="tipoMovimentacao"
                                        value={estoquetipo}
                                        onChange={e => setEstoquetipo(Number(e.target.value))}
                                        className={`TransferenciaEstoque-input ${estoquetipo ? 'filled' : 'empty'}`}
                                    >
                                        <option value="" ></option>
                                        <option value={4}>Saída por nota fiscal</option>
                                        <option value={5}>Saída por doação</option>
                                        <option value={6}>Saída por transferência</option>
                                    </select>

                                </div>
                            </div>
                            <div className="TransferenciaEstoque-formRow">
                                <div className="TransferenciaEstoque-inlineGroup">
                                    <div className="TransferenciaEstoque-formGroup">
                                        <label className="TransferenciaEstoque-label">QUANTIDADE</label>
                                        <input
                                            type="number"
                                            onChange={e => setEstoqueqtd(Number(e.target.value))}
                                            className={`TransferenciaEstoque-input ${estoqueqtd ? 'filled' : 'empty'}`}
                                            required
                                        />
                                    </div>
                                    <div className="cadastrarEstoque-formGroup">
                                        <label className="cadastrarEstoque-label">VALOR</label>
                                        <input
                                            type="text"
                                            value={getBuscarValor(estoqueidprod)}
                                            className={`TransferenciaEstoque-input ${estoquevalor ? 'filled' : 'empty'}`}
                                            disabled  // Campo desabilitado para exibir o valor automaticamente
                                        />
                                    </div>

                                    <div className="TransferenciaEstoque-formGroup">
                                        <label className="TransferenciaEstoque-label">VALOR TOTAL</label>
                                        <input
                                            type="text"
                                            value={valorTotal}
                                            className="TransferenciaEstoque-input"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="TransferenciaEstoque-buttonContainer">
                                <button type="submit" className="TransferenciaEstoque-actionButton">Confirmar</button>
                                <button type="button" className="TransferenciaEstoque-actionButton TransferenciaEstoque-cancelButton" onClick={() => navegacao('/estoque/' + param.id)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    );
}

export default TransferenciaEstoque;