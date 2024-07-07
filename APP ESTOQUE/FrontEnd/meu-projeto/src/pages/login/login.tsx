import React, { useState } from 'react';
import './login.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import logo from '../../Imagens/login.png';

function Login() {

  const navegate = useNavigate();
  const [USU_EMAIL, loginVerifica] = useState("");
  const [USU_SENHA, senhaVerifica] = useState("");
  let { userId } = useParams();


  function strCompare(str1, str2) {
    return str1 === str2;
  }


  async function verificarLogin(event: { preventDefault: () => void }) {
    event.preventDefault();

    const bodyRequest = {
      USU_EMAIL: USU_EMAIL,
      USU_SENHA: USU_SENHA,
    };

    const resultado = await axios
      .get(
        "http://localhost:8081/usuario/encontrarUsuarios/" + bodyRequest.USU_EMAIL + "/" + bodyRequest.USU_SENHA
      )
      .then((response) => {
        if (response.data === "Administrador") {
          alert("Abrir tela administrador");
          navegate("../menu");
        } else {

          userId = response.data;
          alert("Logado com Sucesso");
          return navegate('/homeCliente/' + userId);
        }
      })
      .catch((error) => {
        if (error.response.status == 404) {
          alert("E-mail ou Senha invalida");
        } else if ((error.response.status = 401)) {
          alert("E-mail ou Senha invalida");
        }
      });


  }
  return (
    <article className="containerLogin">
      <div>
        <div className="boxLogin">
          <div className="logoLogin">
            <img className="imagemLogin" src={logo} alt="Logo do login" />
          </div>
          <div className="emailLogin">
            <input className="inputEmail" type="email" placeholder='Email ID' value={USU_EMAIL} onChange={(e) => loginVerifica(e.target.value)} />
          </div>
          <div className="senhaLogin">
            <input type="password" className="inputSenha" placeholder='Password' value={USU_SENHA} onChange={(e) => senhaVerifica(e.target.value)} />
          </div>

          <div className="botaoLogin" onClick={verificarLogin}>
            <button className="buttonLogin" >LOGIN</button>
          </div>

        </div>
      </div>
    </article>
  );
}

export default Login;