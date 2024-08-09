import React, { useState } from 'react';
import ComponentMenu from '../../Component/ComponentMenu/ComponentMenu';
import './cadastrarLoja.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function CadastrarLoja() {

    const navegacao = useNavigate();
    const param = useParams();
    const [loja, setId_forn] = useState(0);
    const [loja_nome, setLoja_nome] = useState("");
    const [loja_endereco, setLoja_endereco] = useState("");
    const [loja_contato, setLoja_contato] = useState("");
    const navegate = useNavigate();

    async function acrescentarFornecedor(e) {

        const bodyRequest = {
            loja_nome: loja_nome,
            loja_endereco: loja_endereco,
            loja_contato: loja_contato,

        }

        var validarFornecedor = /[a-z]/g;
        validarFornecedor.test(loja_nome);

        if ((validarFornecedor.test(loja_nome) == false) || (loja_nome == null)) {
            alert('Preencha corretamento o nome da loja');

        } else {
            if (loja_nome == "") {
                alert('Preencha corretamento o nome da loja')

            } else if (loja_endereco == "") {
                alert('Preencha corretamento o campo endereço')

            } else if (loja_contato == "") {
                alert('Preencha corretamento o campo contato')

            } else {
                try {
                    e.preventDefault();
                    await axios.post('http://localhost:8081/loja/cadastrarLoja', bodyRequest).then(response =>
                        alert("Nova Loja inserida!")

                    );
                    navegate('/loja/' + param.id)
                } catch (error) {
                    console.error("Erro ao cadastrar loja:", error);
                    alert("Erro ao cadastrar loja");
                }
            }
        }
    }

    return (
        <ComponentMenu>
            <div className="cadastroLoja-wrapper">
                <div className="cadastroLoja-container">
                    <h2 className="cadastroLoja-titulo">Cadastro Loja</h2>
                    <div className="cadastroLoja-formGroup">
                        <label className="cadastroLoja-label">Nome do Proprietário</label>
                        <input
                            type="text"
                            name="lojanome"
                            value={loja_nome}
                            onChange={e => setLoja_nome(e.target.value)}
                            placeholder='Digite o nome da Loja:'
                            className="cadastroLoja-input"
                        />
                    </div>
                    <div className="cadastroLoja-formGroup">
                        <label className="cadastroLoja-label">Telefone</label>
                        <input
                            name="lojatelefone"
                            value={loja_contato}
                            onChange={e => setLoja_contato(e.target.value)}
                            placeholder='Digite o telefone:'
                            className="cadastroLoja-input"
                        />
                    </div>
                    <div className="cadastroLoja-formGroup">
                        <label className="cadastroLoja-label">Email</label>
                        <input
                            type="text"
                            name="lojaendereco"
                            value={loja_endereco}
                            onChange={e => setLoja_endereco(e.target.value)}
                            placeholder='Digite o endereço:'
                            className="cadastroLoja-input"
                        />
                    </div>

                    <div className="cadastroLoja-buttonContainer">
                        <button className="cadastroLoja-actionButton" onClick={acrescentarFornecedor}>Confirmar Cadastro</button>
                        <button className="cadastroLoja-actionButton cadastroLoja-cancelButton" onClick={() => navegacao('../fornecedores/' + param.id)}>Cancelar</button>
                    </div>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default CadastrarLoja;