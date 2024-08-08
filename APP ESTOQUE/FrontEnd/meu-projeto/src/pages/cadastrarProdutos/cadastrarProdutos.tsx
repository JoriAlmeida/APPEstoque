import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './cadastrarProdutos.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';

function CadastroProduto() {
    const navegacao = useNavigate();
    const [fkidforn, setFkidforn] = useState(0);
    const [prodnome, setProdnome] = useState("");
    const [proddescricao, setProdutodescricao] = useState("");
    const [prodpontorep, setProdpontorep] = useState(0);
    const [prodvalor, setProdvalor] = useState(0);
    const [prodstatus, setProdstatus] = useState("");
    const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);
    const navegate = useNavigate();
    const param = useParams();

    useEffect(() => {
        async function carregarFornecedores() {
            try {
                const resp = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
                setFornecedores(resp.data);
            } catch (error) {
                console.error("Erro ao carregar fornecedores:", error);
            }
        }
        carregarFornecedores();
    }, []);

    async function acrescentarProduto(e) {
        e.preventDefault();
        const bodyRequest = {
            fkidforn: fkidforn,
            prodnome: prodnome,
            proddescricao: proddescricao,
            prodpontorep: prodpontorep,
            prodvalor: prodvalor,
            prodstatus: prodstatus,
        };

        var validarProduto = /[a-z]/g;
        validarProduto.test(prodnome);

        if (!validarProduto.test(prodnome) || prodnome === null) {
            alert('Preencha corretamente o campo produto');
        } else if (prodnome === "") {
            alert('Preencha corretamente o campo nome do produto');
        } else if (fkidforn === 0) {
            alert('Selecione uma das opções')
        }
        else if (proddescricao === "") {
            alert('Preencha corretamente o campo descrição');
        } else if (prodpontorep === 0) {
            alert('Preencha corretamente o campo ponto de reposição');
        }else if(prodvalor === 0){
            alert('Preencha corretamente o campo valor')
        } 
        else if (prodstatus === "") {
            alert('Selecine uma das opções')
        }
        else {
            try {
                await axios.post('http://localhost:8081/produtos/cadastrarProdutos', bodyRequest);
                alert("Produto novo inserido");
                navegate('/produtos/' + param.id);
            } catch (error) {
                console.error("Erro ao cadastrar produto, revise os campos:", error);
                alert("Já existe um produto cadastrado com esse nome");
            }
        }
    }

    return (
        <ComponentMenu>
            <div className="cadastroProduto-wrapper">
                <div className="cadastroProduto-container">
                    <h2 className="cadastroProduto-titulo">Cadastro de Produtos</h2>
                    <form onSubmit={acrescentarProduto}>
                        <div className="cadastroProduto-formGroup">
                            <label className="cadastroProduto-label">Nome do Produto</label>
                            <input
                                type="text"
                                name="nome"
                                value={prodnome}
                                placeholder='Digite o nome do Produto:'
                                onChange={e => setProdnome(e.target.value)}
                                className={`cadastroProduto-input ${prodnome ? 'filled' : 'empty'}`}
                            />
                        </div>
                        <div className="cadastroProduto-formGroup">
                            <label className="cadastroProduto-label">Fornecedor</label>
                            <select
                                name="fornecedor"
                                value={fkidforn}
                                onChange={e => setFkidforn(Number(e.target.value))}
                                className={`cadastroProduto-input ${fkidforn ? 'filled' : 'empty'}`}
                            >
                                <option value="">Selecione um fornecedor</option>
                                {fornecedores.map(forn => (
                                    <option key={forn.id_forn} value={forn.id_forn}>
                                        {forn.forn_nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="cadastroProduto-formGroup">
                            <label className="cadastroProduto-label">Descrição do Produto</label>
                            <textarea
                                name="descricao"
                                value={proddescricao}
                                placeholder='Digite a descrição do Produto:'
                                onChange={e => setProdutodescricao(e.target.value)}
                                className={`cadastroProduto-input ${proddescricao ? 'filled' : 'empty'}`}
                            />
                        </div>
                        <div className="cadastroProduto-formGroup">
                            <label className="cadastroProduto-label">Ponto de Reposição</label>
                            <input
                                type="number"
                                name="pontoReposicao"
                                value={prodpontorep === 0 ? "" : prodpontorep}
                                placeholder='Digite a quantidade:'
                                onChange={e => setProdpontorep(Number(e.target.value))}
                                className={`cadastroProduto-input ${prodpontorep ? 'filled' : 'empty'}`}
                            />
                        </div>
                        <div className="cadastroProduto-formGroup">
                            <label className="cadastroProduto-label">Valor Unitário</label>
                            <input
                                type="number"
                                step="0.01"
                                name="valorUnitario"
                                value={prodvalor === 0 ? "" : prodvalor}
                                placeholder='Digite o valor:'
                                onChange={e => setProdvalor(Number(e.target.value))}
                                className={`cadastroProduto-input ${prodvalor ? 'filled' : 'empty'}`}
                            />
                        </div>
                        <div className="cadastroProduto-formGroup">
                            <label className="cadastroProduto-label">Status</label>
                            <select
                                name="produto_status"
                                value={prodstatus}
                                onChange={e => setProdstatus(e.target.value)}
                                className={`cadastroProduto-input ${prodstatus ? 'filled' : 'empty'}`}
                            >
                                <option value="" disabled>Selecione um status</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Desativado">Desativado</option>
                            </select>
                        </div>
                        <div className="cadastroProduto-buttonContainer">
                            <button type="submit" className="cadastroProduto-actionButton">Confirmar Cadastro</button>
                            <button type="button" className="cadastroProduto-actionButton cadastroProduto-cancelButton" onClick={() => navegacao('../produtos/' + param.id)}>Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default CadastroProduto;