import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './editarProdutos.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';
import { IoRadioButtonOn  } from "react-icons/io5";
import { Fornecedor } from '../../Models/Fornecedor';

function EditarProdutos() {
    const navegacao = useNavigate();
    const param = useParams();
    const [status, setStatus] = useState('');
    const [produto, setProduto] = useState<Produto | null>(null);
    const [fornecedores, setFornecedores] = useState<Array<Fornecedor>>([]);


    const alterarProduto = async (event: React.FormEvent) => {
        event.preventDefault();
    
        if (produto) {
            await axios.put(`http://localhost:8081/produtos/alterarProduto/${produto.produto}`, produto)
                .then(() => {
                    alert('Produto alterado com sucesso');
                    navegacao('../produtos/' + param.id);
                })
                .catch(error => console.error('Erro ao atualizar produto', alert('Já existe um produto com esse nome')));
                
                
        }
    };

    
   

    async function carregarProdutos() {
        const resp = await axios.get('http://localhost:8081/fornecedor/encontrarFornecedores');
                setFornecedores(resp.data);
        axios.get(`http://localhost:8081/produtos/encontrarpeloid/${param.prod}`)
            .then(response => setProduto(response.data))
            .catch(error => console.error('Erro ao buscar produto', error));
    }

    useEffect(() => {
        carregarProdutos();
    }, []);

    const alterarStatus = async () => {
        const bodyRequest = {
            prod_status: status
        }
        const resultado = axios.put('http://localhost:8081/produtos/status/' + param.prod);
        setStatus((await resultado).data.prod_status);
        alert("Status alterado");
        carregarProdutos();

    };



    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    const parseCurrency = (value: string) => {
        return Number(value.replace(/[^0-9,-]+/g, '').replace(',', '.'));
    };

    const iconColor = produto?.prodstatus === 'Ativo' ? 'green' : 'red';


    return (
        <ComponentMenu>
            <div className="editarProduto-container">
                <div className="editarProduto-header">
                    <h2 className="editarProduto-titulo">Editar Produto</h2>
                </div>
                <div className="editarProduto-content">
                    <div className="editarProduto-form">
                        <form onSubmit={alterarProduto}>
                            <div className="editarProduto-formRow">
                                <div className="editarProduto-formGroup editarProduto-formGroup-name">
                                    <label className="editarProduto-label">Nome do Produto</label>
                                    <input
                                        type="text"
                                        value={produto?.prodnome || ''}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prodnome: e.target.value } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                </div>
                                <div className="editarProduto-formGroup editarProduto-formGroup-status">
                                    <label className="editarProduto-label">Status</label>

                                    <div className="alteracaoStatusProduto">
                                        <input
                                            type="text"
                                            value={produto?.prodstatus || ''}
                                            onChange={e => setProduto(prev => prev ? { ...prev, prodstatus: e.target.value } : null)}
                                            className="editarProduto-inputStatus"
                                            disabled
                                        />
                                        
                                        <IoRadioButtonOn 
                                            onClick={() => alterarStatus()}
                                            className="iconAlterarStatus"
                                            style={{ cursor: 'pointer', fontSize: '30px', color: iconColor }}
                                        />                                        
                                    </div>

                                </div>
                            </div>
                            <div className="editarProduto-formRow">
                                <div className="editarProduto-formGroup editarProduto-formGroup-left">
                            <label className="editarProduto-label">Fornecedor</label>
                            <select
                                name="fornecedor"
                                value={produto?.fkidforn || 0}
                                onChange={e => setProduto(prev => prev ? { ...prev, fkidforn: parseCurrency(e.target.value) } : null)}
                                className={`editarProduto-input ${produto?.fkidforn ? 'filled' : 'empty'}`}
                            >
                                <option value="" disabled>Selecione um fornecedor</option>
                                {fornecedores.map(forn => (
                                    <option key={forn.id_forn} value={forn.id_forn}>
                                        {forn.forn_nome}
                                    </option>
                                ))}
                            </select>
                                    <label className="editarProduto-label">Ponto de Reposição</label>
                                    <input
                                        type="number"
                                        value={produto?.prodpontorep || 0}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prodpontorep: Number(e.target.value) } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                    <label className="editarProduto-labelValorUnit">Valor Unit</label>
                                    <input
                                        type="text"
                                        value={produto ? formatCurrency(produto.prodvalor) : '0'}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prodvalor: parseCurrency(e.target.value) } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                </div>
                                <div className="editarProduto-formGroup editarProduto-descriptionGroup">
                                    <label className="editarProduto-label">Descrição</label>
                                    <textarea
                                        value={produto?.proddescricao || ''}
                                        onChange={e => setProduto(prev => prev ? { ...prev, proddescricao: e.target.value } : null)}
                                        className="editarProduto-textarea"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="editarProduto-buttonContainer">
                                <button type="submit" className="editarProduto-actionButton">Confirmar</button>
                                <button type="button" className="editarProduto-actionButton editarProduto-cancelButton" onClick={() => navegacao('/produtos/' + param.id)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    );
}

export default EditarProdutos;