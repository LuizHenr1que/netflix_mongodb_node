import React, { useState, useEffect } from 'react';

import api from "../../services/api";

const Login = () => {

    const [credenciais, setCredenciais] = useState({ email: '', senha: '', });


    const login = async () => {
        try {
            const response = await api.post('/usuario/login', credenciais);
            const res = response.data;
      
            if (res.error) {
              alert(res.message);
              return false;
            }
      
            localStorage.setItem('@user', JSON.stringify(res.usuario));
            window.location.reload();

          } catch (err) {
            alert(err.message);
          }
    }
    
    return (
        <div 
        className="container-fluid bg_filmes center"
        style={{
            position: 'fixed',
            height: '100%',
        }}
        >
            
        <header className="row">
            <img src={require('../../assets/img/logo.png')} alt="Netflix" />
        </header>
        <div className="container-login">
            <div id="caixa_login" className="rounded">
                <h1 className="text-white">Entrar</h1>
                <br />
                < >
                    <div className="inputField">
                        <input type="email" className="form-control form-control-lg bg-dark text-white" id="candidateEmailTel" name="candidateEmailTel" placeholder="Email ou número de telefone"
                        onChange={(e) => {
                            setCredenciais({
                                ...credenciais,
                                email: e.target.value,
                        });
                        }}
                        />
                        
                    </div>

                    <br />

                    <div className="inputField">
                        <input type="password" className="form-control form-control-lg bg-dark text-white" id="candidateSenha" name="candidateSenha" placeholder="Senha " 
                        onChange={(e) => {
                            setCredenciais({
                                ...credenciais,
                                senha: e.target.value,
                        });
                        }}
                        />
                        
                    </div>

                    <br />
                    <button className="btn btn-lg btn-block btn-danger" onClick={login}>Entrar</button>

    
                    <div className="row mt-4 pl-3">
                        <div className="text-muted">
                            <input type="checkbox" /> Lembrar de mim.
                        </div>
                        <div className="col text-right">
                            <a href="#" className="text-muted">Precisa de ajuda?</a>
                        </div>
                    </div>
                    <div className="mt-3">
                        <div className="col p-0">
                            <a href="#" className="text-muted">
                                <i className="fa-brands fa-square-facebook"></i>&nbsp;Conectar com Facebook
                            </a>
                        </div>
                        <div className="col text-muted mt-3 p-0">
                            Novo por aqui? 
                            <a href="#" className="text-primary">Assine Agora</a>
                        </div>
                        <div className="col text-muted mt-3 p-0"><small>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô 
                            <a href="#" className="text-primary">Saiba mais</a></small>
                        </div>
                    </div>
                </>
            </div>
        </div>
        
    </div>
    );
};

export default Login;
