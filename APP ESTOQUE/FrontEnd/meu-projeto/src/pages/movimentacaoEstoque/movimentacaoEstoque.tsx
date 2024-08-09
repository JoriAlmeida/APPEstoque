import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './movimentacaoEstoque.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { IoRadioButtonOn } from "react-icons/io5";
import { Fornecedor } from '../../Models/Fornecedor';

function MovimentacaoEstoque() {
    const navegacao = useNavigate();
    const param = useParams();
    const [produtos, setProdutos] = useState<Array<Produto>>([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [estoqueidprod, setEstoqueidprod] = useState(0);
    const [estoquetipo, setEstoquetipo] = useState(0);
    const [estoqueqtd, setEstoqueqtd] = useState(0);
    const [estoquevalor, setEstoquevalor] = useState(0);
    const [estoquetransferencia, setEstoquetransferencia] = useState(0);
    const [estoquepontorep, setEstoquepontorep] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    async function acrescentarEstoque(e) {
        e.preventDefault();
        const bodyRequest = {
            estoqueidprod: estoqueidprod,
            estoquetransferencia: 0,
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


    async function carregarProdutos() {
        const respProd = await axios.get('http://localhost:8081/produtos/encontrarProdutos');
        setProdutos(respProd.data);

    }

    useEffect(() => {
        carregarProdutos();
    }, []);


    const getBuscarValor = (id: number) => {
        const produto = produtos.find(produto => produto.produto === id);
        return produto ? produto.prodvalor : '';
    };


    useEffect(() => {
        const produto = produtos.find(produto => produto.produto === estoqueidprod);
        const valorProduto = produto ? produto.prodvalor : 0;
        setEstoquevalor(valorProduto);
        setValorTotal(valorProduto * estoqueqtd);
    }, [estoqueidprod, estoqueqtd, produtos]);

    return (
        <ComponentMenu>

            <div className="cadastrarEstoque-container">
                <div className="cadastrarEstoque-header">
                    <h2 className="cadastrarEstoque-titulo">TRANSFERÊNCIA PARA ESTOQUE</h2>
                </div>
                <div className="cadastrarEstoque-content">
                    <div className="cadastrarEstoque-form">
                        <form onSubmit={acrescentarEstoque}>
                            <div className="cadastrarEstoque-formRow">
                                <div className="cadastrarEstoque-formGroup cadastrarEstoque-formGroup-name">
                                    <label className="cadastrarEstoque-label">Nome do Produto</label>
                                    <select
                                        name="nomeproduto"
                                        value={estoqueidprod}
                                        onChange={e => setEstoqueidprod(Number(e.target.value))}
                                        className={`editarProduto-input ${estoqueidprod ? 'filled' : 'empty'}`}
                                    >
                                        <option value=""></option>
                                        {produtos.map(prod => (
                                            <option key={prod.produto} value={prod.produto}>
                                                {prod.prodnome}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="cadastrarEstoque-formGroup cadastrarEstoque-formGroup-status">
                                    <label className="cadastrarEstoque-label">TIPO</label>
                                    <select
                                        name="tipoMovimentacao"
                                        value={estoquetipo}
                                        onChange={e => setEstoquetipo(Number(e.target.value))}
                                        className={`cadastroProduto-input ${estoquetipo ? 'filled' : 'empty'}`}
                                    >
                                        <option value="" disabled>Selecione o Tipo</option>
                                        <option value={1}>Entrada por nota fiscal</option>
                                        <option value={2}>Entrada por doação</option>
                                        <option value={3}>Entrada por transferência</option>
                                    </select>

                                </div>
                            </div>
                            <div className="cadastrarEstoque-formRow">
                                <div className="cadastrarEstoque-inlineGroup">
                                    <div className="cadastrarEstoque-formGroup">
                                        <label className="cadastrarEstoque-label">QUANTIDADE</label>
                                        <input
                                            type="number"
                                            onChange={e => setEstoqueqtd(Number(e.target.value))}
                                            className={`cadastroProduto-input ${estoqueqtd ? 'filled' : 'empty'}`}
                                            required
                                        />
                                    </div>
                                    <div className="cadastrarEstoque-formGroup">
                                        <label className="cadastrarEstoque-label">VALOR</label>
                                        <input
                                            type="text"
                                            value={getBuscarValor(estoqueidprod)}
                                            className={`cadastroProduto-input ${estoquevalor ? 'filled' : 'empty'}`}
                                            disabled  // Campo desabilitado para exibir o valor automaticamente
                                                                                    />
                                    </div>

                                    <div className="cadastrarEstoque-formGroup">
                                        <label className="cadastrarEstoque-label">VALOR TOTAL</label>
                                        <input
                                            type="text"
                                            value={valorTotal}
                                            className="cadastrarEstoque-input"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="cadastrarEstoque-buttonContainer">
                                <button type="submit" className="cadastrarEstoque-actionButton">Confirmar</button>
                                <button type="button" className="cadastrarEstoque-actionButton cadastrarEstoque-cancelButton" onClick={() => navegacao('/estoque/' + param.id)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    );
}

export default MovimentacaoEstoque;