import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from "axios";
import logo from '../../Imagens/login.png';
import { Usuarios } from '../../Models/Usuarios';
import { TfiLock, TfiEmail } from "react-icons/tfi";

function Login() {
  const navigate = useNavigate();
  const [USU_EMAIL, setLoginVerifica] = useState("");
  const [USU_SENHA, setSenhaVerifica] = useState("");
  const [usuario, setUsuario] = useState<Array<Usuarios>>([]);

  async function verificarLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página

    const bodyRequest = {
      USU_EMAIL: USU_EMAIL,
      USU_SENHA: USU_SENHA,
    };

    try {
      const resp = await axios.get('http://localhost:8081/usuario/encontrarEmail/' + USU_EMAIL);
      setUsuario(resp.data);
      const auxiliar = resp.data.id_usuario;

      await axios.get(
        "http://localhost:8081/usuario/verificarlogin/" + bodyRequest.USU_EMAIL + "/" + bodyRequest.USU_SENHA
      );
      navigate('../menu/' + auxiliar);
    } catch (error) {
      // Verificação de tipo para AxiosError
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 404 || error.response?.status === 401) {
          alert("Email ou senha inválido.");
        } else {
          console.error("Erro ao verificar login:", error);
        }
      } else {
        // Para erros que não são do Axios
        console.error("Erro inesperado:", error);
      }
    }
  }

  return (
    <article className="containerLogin">
      <div>
        <div className="boxLogin">
          <div className="logoLogin">
            <img className="imagemLogin" src={logo} alt="Logo do login" />
          </div>
          <form onSubmit={verificarLogin} className="loginForm">
            <div className="emailLogin">
              <TfiEmail className="icon" />
              <input
                className="inputEmail"
                type="email"
                placeholder='Email ID'
                value={USU_EMAIL}
                onChange={(e) => setLoginVerifica(e.target.value)}
                required
                autoComplete="off"
              />
            </div>
            <div className="senhaLogin">
              <TfiLock className="icon" />
              <input
                type="password"
                className="inputSenha"
                placeholder='Password'
                value={USU_SENHA}
                onChange={(e) => setSenhaVerifica(e.target.value)}
                required
                autoComplete="new-password"
              />
            </div>
            <div className="botaoLogin">
              <button type="submit" className="buttonLogin">LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </article>
  );
}

export default Login;