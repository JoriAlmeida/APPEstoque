import React, { useState, useEffect } from 'react';
import './login.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import logo from '../../Imagens/login.png';
import { Usuarios } from '../../Models/Usuarios';

function Login() {

  const navegate = useNavigate();
  const [USU_EMAIL, loginVerifica] = useState("");
  const [USU_SENHA, senhaVerifica] = useState("");
  let { userId } = useParams();
  const [usuario, setUsuario] = useState<Array<Usuarios>>([]);

  function strCompare(str1, str2) {
    return str1 === str2;
  }


  async function verificarLogin(event: { preventDefault: () => void }) {
    event.preventDefault();

    const bodyRequest = {
      USU_EMAIL: USU_EMAIL,
      USU_SENHA: USU_SENHA,
    };

    const resp = await axios.get('http://localhost:8081/usuario/encontrarEmail/' + USU_EMAIL);
    setUsuario(resp.data);
    const auxiliar = resp.data.id_usuario;
    console.log(auxiliar)



    const resultado = await axios
      .get(
        "http://localhost:8081/usuario/verificarlogin/" + bodyRequest.USU_EMAIL + "/" + bodyRequest.USU_SENHA
      )

      .then((response) => {

        navegate('../menu/'+auxiliar);


      })
      .catch((error) => {
        if (error.response.status == 404) {
          alert("Email ou senha invalido.");
        } else if ((error.response.status = 401)) {
          alert("Email ou senha invalido.");
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
            <input className="inputEmail" type="email" placeholder='Email ID' value={USU_EMAIL} onChange={(e) => loginVerifica(e.target.value)} required autoComplete="off" />
          </div>
          <div className="senhaLogin">
            <input type="password" className="inputSenha" placeholder='Password' value={USU_SENHA} onChange={(e) => senhaVerifica(e.target.value)} required autoComplete="new-password" />
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