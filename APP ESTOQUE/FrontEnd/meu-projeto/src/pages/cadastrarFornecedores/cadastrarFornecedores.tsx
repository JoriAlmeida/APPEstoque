import React, { useState } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './cadastrarFornecedores.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function CadastroFornecedor() {

    const navegacao = useNavigate();
    const param = useParams();
    const [id_forn, setId_forn] = useState(0);
    const [forn_nome, setForn_nome] = useState("");
    const [forn_telefone, setForn_telefone] = useState("");
    const [forn_email, setForn_email] = useState("");
    const [forn_cnpj, setForn_cnpj] = useState("");
    const [forn_endereco, setForn_endereco] = useState("");
    const [forn_status, setForn_status] = useState("");
    const navegate = useNavigate();

    async function acrescentarFornecedor(e) {

        const bodyRequest = {
            id_forn: id_forn,
            forn_nome: forn_nome,
            forn_telefone: forn_telefone,
            forn_email: forn_email,
            forn_cnpj: forn_cnpj,
            forn_endereco: forn_endereco,
            forn_status: forn_status,
        }

        var validarFornecedor = /[a-z]/g;
        validarFornecedor.test(forn_nome);

        if ((validarFornecedor.test(forn_nome) == false) || (forn_nome == null)) {
            alert('Preencha corretamento o campo fornecedor');

        } else {
            if (forn_nome == "") {
                alert('Preencha corretamento o campo nome do produto')

            } else if (forn_telefone == "") {
                alert('Preencha corretamento o campo forn_telefone')

            } else if (forn_email == null) {
                alert('Preencha corretamento o campo email')

            } else if (forn_cnpj == null) {
                alert('Preencha corretamento o campo cnpj')

            }
            else if (forn_endereco == null) {
                alert('Preencha corretamento o campo endereco')

            }
            else {
                try {
                    e.preventDefault();
                    await axios.post('http://localhost:8081/fornecedor/cadastrarFornecedor', bodyRequest).then(response =>
                        alert("Fornecedor novo inserido")

                    );
                    navegate('/fornecedores/' + param.id)
                } catch (error) {
                    console.error("Erro ao cadastrar fornecedor:", error);
                    alert("Erro ao cadastrar fornecedor");
                }
            }
        }
    }

    return (
        <ComponentMenu>
            <div className="cadastroFornecedor-wrapper">
                <div className="cadastroFornecedor-container">
                    <h2 className="cadastroFornecedor-titulo">Cadastro de Fornecedores</h2>
                    <div className="cadastroFornecedor-formGroup">
                        <label className="cadastroFornecedor-label">Nome do Fornecedor</label>
                        <input
                            type="text"
                            name="fornecedor_nome"
                            value={forn_nome}
                            onChange={e => setForn_nome(e.target.value)}
                            placeholder='Digite o nome do Fornecedor:'
                            className="cadastroFornecedor-input"
                        />
                    </div>
                    <div className="cadastroFornecedor-formGroup">
                        <label className="cadastroFornecedor-label">Telefone do Fornecedor</label>
                        <input
                            name="fornecedor_telefone"
                            value={forn_telefone}
                            onChange={e => setForn_telefone(e.target.value)}
                            placeholder='Digite o telefone:'
                            className="cadastroFornecedor-input"
                        />
                    </div>
                    <div className="cadastroFornecedor-formGroup">
                        <label className="cadastroFornecedor-label">Email do Fornecedore</label>
                        <input
                            type="email"
                            name="fornecedor_email"
                            value={forn_email}
                            onChange={e => setForn_email(e.target.value)}
                            placeholder='Digite o email:'
                            className="cadastroFornecedor-input"
                        />
                    </div>
                    <div className="cadastroFornecedor-formGroup">
                        <label className="cadastroFornecedor-label">CNPJ do Fornecedor</label>
                        <input
                            type="number"
                            name="fornecedor_cnpj"
                            value={forn_cnpj}
                            onChange={e => setForn_cnpj(e.target.value)}
                            placeholder='Digite o CNPJ:'
                            className="cadastroFornecedor-input"
                        />
                    </div>
                    <div className="cadastroFornecedor-formGroup">
                        <label className="cadastroFornecedor-label">Endereco do Fornecedor</label>
                        <input
                            type="text"
                            name="fornecedor_endereco"
                            value={forn_endereco}
                            onChange={e => setForn_endereco(e.target.value)}
                            placeholder='Digite o endereço:'
                            className="cadastroFornecedor-input"
                        />
                    </div>
                    <div className="cadastroFornecedor-formGroup">
                        <label className="cadastroFornecedor-label">Status</label>
                        <select
                            name="fornecedor_status"
                            value={forn_status}
                            onChange={e => setForn_status(e.target.value)}
                            className={`cadastroFornecedor-input ${forn_status ? 'filled' : 'empty'}`}
                        >
                            <option value="" disabled>Selecione um status</option>
                            <option value="Ativo">Ativo</option>
                            <option value="Desativado">Desativado</option>
                        </select>
                    </div>
                    <div className="cadastroFornecedor-buttonContainer">
                        <button className="cadastroFornecedor-actionButton" onClick={acrescentarFornecedor}>Confirmar Cadastro</button>
                        <button className="cadastroFornecedor-actionButton cadastroProduto-cancelButton" onClick={() => navegacao('../fornecedores/' + param.id)}>Cancelar</button>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default CadastroFornecedor;