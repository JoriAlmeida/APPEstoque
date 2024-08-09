import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './editarFornecedor.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Fornecedor } from '../../Models/Fornecedor';

function EditarFornecedor() {

    const navegacao = useNavigate();
    const param = useParams();
    const { id, forn } = useParams();

    const [id_forn, setId_forn] = useState(0);
    const [forn_nome, setForn_nome] = useState("");
    const [forn_telefone, setForn_telefone] = useState("");
    const [forn_email, setForn_email] = useState("");
    const [forn_cnpj, setForn_cnpj] = useState("");
    const [forn_endereco, setForn_endereco] = useState("");
    const [forn_status, setForn_status] = useState("");
    const navegate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8081/fornecedor/encontrarFornecedorId/" + param.forn)
            .then(response => {
                setId_forn((response).data.id_forn);
                setForn_nome((response).data.forn_nome);
                setForn_telefone((response).data.forn_telefone);
                setForn_email((response).data.forn_email)
                setForn_cnpj((response).data.forn_cnpj);
                setForn_endereco((response).data.forn_endereco);
                setForn_status((response).data.forn_status);
            });
    }, []);


    async function alterarFornecedor(event: { preventDefault: () => void; }) {
        event.preventDefault()
        const bodyRequest = {
            id_forn: id_forn,
            forn_nome: forn_nome,
            forn_telefone: forn_telefone,
            forn_email: forn_email,
            forn_cnpj: forn_cnpj,
            forn_endereco: forn_endereco,
            forn_status: forn_status
        }

        await axios.put('http://localhost:8081/fornecedor/editarFornecedor/' + id_forn, bodyRequest).then((result) => {
            alert("Fornecedor alterado com sucesso")
            navegacao('../fornecedores/' + param.id);
            console.log(bodyRequest)
        })
    }


    return (
        <ComponentMenu>
            <div className="editarFornecedor-container">

                <div className="editarFornecedor-header">
                    <h2 className="editarFornecedor-titulo">Editar Fornecedore</h2>
                </div>
                <div className="editarFornecedor-content">
                    <div className="editarFornecedor-form">
                        <form>
                            <div className="editarFornecedor-formRow">
                                <div className="editarFornecedor-formGroup" editarFornecedor-formGroup-name>
                                    <label className="editarFornecedor-label">Nome do Fornecedor</label>
                                    <input
                                        type="text"
                                        name="fornecedor_nome"
                                        value={forn_nome}
                                        onChange={e => setForn_nome(e.target.value)}
                                        className="editarFornecedor-input"
                                    />
                                </div>
                                <div className="editarFornecedor-formGroup" editarFornecedor-formGroup-status>
                                    <label className="editarFornecedor-label">Status</label>
                                    <input
                                        type="text"
                                        name="fornecedor_status"
                                        value={forn_status}
                                        onChange={e => setForn_status(e.target.value)}
                                        className="editarFornecedor-input"
                                    />
                                </div>

                            </div>
                            <div className="editarFornecedor-formRow">
                                <div className="editarFornecedor-formGroup" editarFornecedor-formGroup-email>
                                    <label className="editarFornecedor-label">Email do Fornecedore</label>
                                    <input
                                        type="email"
                                        name="fornecedor_email"
                                        value={forn_email}
                                        onChange={e => setForn_email(e.target.value)}
                                        className="editarFornecedor-input"
                                    />
                                </div>
                                <div className="editarFornecedor-formGroup" editarFornecedor-formGroup-telefone>
                                    <label className="editarFornecedor-label">Telefone do Fornecedor</label>
                                    <input
                                        name="fornecedor_telefone"
                                        value={forn_telefone}
                                        onChange={e => setForn_telefone(e.target.value)}
                                        className="editarFornecedor-input"
                                    />
                                </div>
                            </div>
                            <div className="editarFornecedor-formRow">
                                <div className="editarFornecedor-formGroup" editarFornecedor-formGroup-endereco>
                                    <label className="editarFornecedor-label">Endereco do Fornecedor</label>
                                    <input
                                        type="text"
                                        name="fornecedor_endereco"
                                        value={forn_endereco}
                                        onChange={e => setForn_endereco(e.target.value)}
                                        className="editarFornecedor-input"
                                    />
                                </div>
                                <div className="editarFornecedor-formGroup" editarFornecedor-formGroup-cnpj>
                                    <label className="editarFornecedor-label">CNPJ do Fornecedor</label>
                                    <input
                                        type="number"
                                        name="fornecedor_cnpj"
                                        value={forn_cnpj}
                                        onChange={e => setForn_cnpj(e.target.value)}
                                        className="editarFornecedor-input"
                                    />
                                </div>

                            </div>

                            <div className="editarFornecedor-buttonContainer">
                                <button className="editarFornecedor-actionButton" onClick={alterarFornecedor}>Confirmar</button>
                                <button className="editarFornecedor-actionButton editarProduto-cancelButton" onClick={() => navegacao('../fornecedores/' + param.id)}>Cancelar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default EditarFornecedor;