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

export default function Login(){
    return(
        <div className="container-sm">
            <div className="row justify-content-center mt-5 text-center">
                <Moldura>
                    <h1>Login</h1>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="text" className="form-control" id="email" name="email" placeholder="Insira seu E-mail"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha" name="senha" placeholder="Insira sua Senha"/>
                        </div>
                        <Link className="btn btn-primary" to="/dashboard">Login</Link><br/>
                        <Link className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/registrar">Cadastrar</Link>
                    </form>
                </Moldura>
            </div>
        </div>
    )
}