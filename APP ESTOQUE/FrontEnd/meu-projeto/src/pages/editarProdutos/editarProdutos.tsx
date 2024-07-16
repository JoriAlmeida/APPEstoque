import React, { useState, useEffect } from 'react';
import ComponentMenu from '../../Component/ComponentMenu';
import './editarProdutos.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Produto } from '../../Models/Produto';

function EditarProdutos() {

    const navegacao = useNavigate();
    const param = useParams();

    const [id_prod, setId_prod] = useState(0);
    const [fk_id_forn, setFk_id_forn] = useState(0);
    const [prod_nome, setProd_nome] = useState("");
    const [prod_descricao, setProd_descricao] = useState("");
    const [prod_ponto_rep, setProd_ponto_rep] = useState(0);
    const [valor_quant, setValor_quant] = useState(0);
    const [prod_status, setProd_status] = useState("");
    const navegate = useNavigate();


    const [produto, setProduto] = useState<Array<Produto>>([]);

    useEffect(() => {
        axios.get("http://localhost:8081/produtos/encontrarpeloid/" + param.id)
            .then(response => {
                setId_prod((response).data.id_prod);
                setFk_id_forn((response).data.fk_id_forn);
                setProd_nome((response).data.prod_nome);
                setProd_descricao((response).data.prod_descricao)
                setProd_ponto_rep((response).data.prod_ponto_rep);
                setValor_quant((response).data.valor_quant);
                setProd_status((response).data.prod_status);
            });
    }, []);


    async function alterarProduto(event: { preventDefault: () => void; }) {
        event.preventDefault()
        const bodyRequest = {
            id_prod: id_prod,
            fk_id_forn: fk_id_forn,
            prod_nome: prod_nome,
            prod_descricao: prod_descricao,
            prod_ponto_rep: prod_ponto_rep,
            valor_quant: valor_quant,
            prod_status:prod_status
        }

        await axios.put('http://localhost:8081/produtos/alterarProduto/'+ id_prod, bodyRequest).then((result) => {
            alert("Fornecedor alterado com sucesso")
            console.log(bodyRequest)
        })
    }


    return (
        <ComponentMenu>
            <div className="cadastroFornecedor-container">
                <h2 className="cadastroFornecedor-titulo">Editar Fornecedore</h2>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">ID do Fornecedo</label>
                    <input
                        type="text"
                        name="fornecedor_id"
                        value={id_prod}
                        onChange={e => setId_prod(Number(e.target.value))}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">Nome do Fornecedor</label>
                    <input
                        type="text"
                        name="fornecedor_nome"
                        value={fk_id_forn}
                        onChange={e => setFk_id_forn(Number(e.target.value))}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">Telefone do Fornecedor</label>
                    <input
                        name="fornecedor_telefone"
                        value={prod_nome}
                        onChange={e => setProd_nome(e.target.value)}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">Email do Fornecedore</label>
                    <input
                        type="email"
                        name="fornecedor_email"
                        value={prod_descricao}
                        onChange={e => setProd_descricao(e.target.value)}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">CNPJ do Fornecedor</label>
                    <input
                        type="number"
                        name="fornecedor_cnpj"
                        value={prod_ponto_rep}
                        onChange={e => setProd_ponto_rep(Number(e.target.value))}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">Endereco do Fornecedor</label>
                    <input
                        type="text"
                        name="fornecedor_endereco"
                        value={valor_quant}
                        onChange={e => setValor_quant(Number(e.target.value))}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-formGroup">
                    <label className="cadastroFornecedor-label">Status</label>
                    <input
                        type="text"
                        name="fornecedor_status"
                        value={prod_status}
                        onChange={e => setProd_status(e.target.value)}
                        className="cadastroFornecedor-input"
                    />
                </div>
                <div className="cadastroFornecedor-buttonContainer">
                    <button className="cadastroFornecedor-actionButton" onClick={alterarProduto}>Confirmar</button>
                    <button className="cadastroFornecedor-actionButton cadastroProduto-cancelButton" onClick={() => navegacao('../produtos')}>Cancelar</button>
                </div>
            </div>
        </ComponentMenu>
    )
}

export default EditarProdutos;