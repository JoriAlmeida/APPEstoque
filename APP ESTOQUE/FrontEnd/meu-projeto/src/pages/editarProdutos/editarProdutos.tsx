import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu';
import './editarProdutos.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';

function EditarProdutos() {
    const navegacao = useNavigate();
    const param = useParams();

    const [produto, setProduto] = useState<Produto | null>(null);

    useEffect(() => {
        axios.get(`http://localhost:8081/produtos/encontrarpeloid/${param.id}`)
            .then(response => setProduto(response.data))
            .catch(error => console.error('Erro ao buscar produto', error));
    }, [param.id]);

    const alterarProduto = async (event: React.FormEvent) => {
        event.preventDefault();
        if (produto) {
            await axios.put(`http://localhost:8081/produtos/alterarProduto/${produto.id_prod}`, produto)
                .then(() => {
                    alert('Produto alterado com sucesso');
                })
                .catch(error => console.error('Erro ao atualizar produto', error));
        }
    };



    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };

    const parseCurrency = (value: string) => {
        return Number(value.replace(/[^0-9,-]+/g, '').replace(',', '.'));
    };

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
                                        value={produto?.prod_nome || ''}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prod_nome: e.target.value } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                </div>
                                <div className="editarProduto-formGroup editarProduto-formGroup-status">
                                    <label className="editarProduto-label">Status</label>
                                    <input
                                        type="text"
                                        value={produto?.prod_status || ''}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prod_status: e.target.value } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="editarProduto-formRow">
                                <div className="editarProduto-formGroup editarProduto-formGroup-left">
                                    <label className="editarProduto-label">Ponto de Reposição</label>
                                    <input
                                        type="number"
                                        value={produto?.prod_ponto_rep || 0}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prod_ponto_rep: Number(e.target.value) } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                    <label className="editarProduto-label">Valor Unit</label>
                                    <input
                                        type="text"
                                        value={produto ? formatCurrency(produto.valor_quant) : '0'}
                                        onChange={e => setProduto(prev => prev ? { ...prev, valor_quant: parseCurrency(e.target.value) } : null)}
                                        className="editarProduto-input"
                                        required
                                    />
                                </div>
                                <div className="editarProduto-formGroup editarProduto-descriptionGroup">
                                    <label className="editarProduto-label">Descrição</label>
                                    <textarea
                                        value={produto?.prod_descricao || ''}
                                        onChange={e => setProduto(prev => prev ? { ...prev, prod_descricao: e.target.value } : null)}
                                        className="editarProduto-textarea"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="editarProduto-buttonContainer">
                                <button type="submit" className="editarProduto-actionButton">Confirmar</button>
                                <button type="button" className="editarProduto-actionButton editarProduto-cancelButton" onClick={() => navegacao('/produtos')}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    );
}

export default EditarProdutos;