import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Moldura = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
`;

export default function Register(){
    return(
        <div className="container-sm">
            <div className="row justify-content-center mt-5 text-center">
                <Moldura>
                    <h1>Registrar</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Insira seu E-mail"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Insira seu E-mail"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha" name="senha" placeholder="Insira sua Senha"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmaSenha" className="form-label">Confirme a Senha</label>
                            <input type="password" className="form-control" id="confirmaSenha" name="confiirmaSenha" placeholder="Insira sua Senha"/>
                        </div>
                        <Link className="btn btn-primary" to="/">Cadastrar</Link>
                    </form>
                </Moldura>
            </div>
        </div>
    )
}