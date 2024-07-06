import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../Imagens/login.png';
import { MdOutlineMail } from "react-icons/md";

function Login() {


  return (
    <article className="containerLogin">
      <div>
        <div className="boxLogin">
          <div className="logoLogin">
            <img className="imagemLogin" src={logo} alt="Logo do login" />
          </div>
          <div className="emailLogin">
            <input className="inputEmail" placeholder='Email ID'/> 
          </div>
          <div className="senhaLogin">
            <input type ="password" className="inputSenha" placeholder='Password'/>
          </div>

          <div className="botaoLogin">
            <button className="buttonLogin">LOGIN</button>
          </div>

        </div>
      </div>
    </article>
  );
}

export default Login;