import React, { useState } from 'react';
import ComponentMenu from 'Component/ComponentMenu';
import './cadastrarProdutos.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CadastroProduto() {

    const [fk_id_forn, setFk_id_forn] = useState(0);
    const [prod_nome, setNome_produto] = useState("");
    const [prod_descricao, setProduto_descricao] = useState("");
    const [prod_ponto_rep, setProd_ponto_rep] = useState(0);
    const [valor_quant, setValor_quant] = useState(0);
    const navegate = useNavigate();

    async function acrescentarProduto(e) {

        const bodyRequest = {
            fk_id_forn: fk_id_forn,
            prod_nome: prod_nome,
            prod_descricao: prod_descricao,
            prod_ponto_rep: prod_ponto_rep,
            valor_quant: valor_quant,
        }

        var validarProduto = /[a-z]/g;
        validarProduto.test(prod_nome);

        if ((validarProduto.test(prod_nome) == false) || (prod_nome == null)) {
            alert('Preencha corretamento o campo produto');

        } else {
            if (prod_nome == "") {
                alert('Preencha corretamento o campo nome do produto')

            } else if (prod_descricao == "") {
                alert('Preencha corretamento o campo descricao')

            } else if (prod_ponto_rep == null) {
                alert('Preencha corretamento o campo descricao')

            }
            else {
                try {
                    e.preventDefault();
                    await axios.post('http://localhost:8080/produtos/cadastrarnovoproduto', bodyRequest).then(response =>
                        alert("Produto novo inserido")

                    );
                    navegate('/produtos')
                } catch (error) {
                    console.error("Erro ao cadastrar produto:", error);
                    alert("Erro ao cadastrar produto");
                }
            }
        }
    }

    return (
        <ComponentMenu>
            <div className="cadastroProduto-container">
                <h2 className="cadastroProduto-titulo">Cadastro de Produtos</h2>
                <div className="cadastroProduto-formGroup">
                    <label className="cadastroProduto-label">Fornecedor</label>
                    <input
                        type="number"
                        name="fornecedor"
                        value={fk_id_forn}
                        className="cadastroProduto-input"
                    />
                </div>
                <div className="cadastroProduto-formGroup">
                    <label className="cadastroProduto-label">Nome do Produto</label>
                    <input
                        type="text"
                        name="nome"
                        value={prod_nome}
                        className="cadastroProduto-input"
                    />
                </div>
                <div className="cadastroProduto-formGroup">
                    <label className="cadastroProduto-label">Descrição do Produto</label>
                    <textarea
                        name="descricao"
                        value={prod_descricao}
                        className="cadastroProduto-input"
                    />
                </div>
                <div className="cadastroProduto-formGroup">
                    <label className="cadastroProduto-label">Ponto de Reposição</label>
                    <input
                        type="number"
                        name="pontoReposicao"
                        value={prod_ponto_rep}
                        className="cadastroProduto-input"
                    />
                </div>
                <div className="cadastroProduto-formGroup">
                    <label className="cadastroProduto-label">Valor Unitário</label>
                    <input
                        type="number"
                        step="0.01"
                        name="valorUnitario"
                        value={valor_quant}
                        className="cadastroProduto-input"
                    />
                </div>
                <div className="cadastroProduto-buttonContainer">
                    <button className="cadastroProduto-actionButton" >Confirmar Cadastro</button>
                    <button className="cadastroProduto-actionButton cadastroProduto-cancelButton" >Cancelar</button>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default CadastroProduto;