import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Moldura = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
`;

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const executaSubmit = async (event) =>{
        event.preventDefault();//previne recarregamento padrão da página
        setLoading(true);
        setError('');

        try{
            const resposta = await fetch('http://localhost:3000/usuarios/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,senha}),//envia dados como json
            });
            const data = await resposta.json();//lê os dados como JSON

            if(resposta.ok){
                alert('Login bem-sucedido');
                console.log('Dados da API', data);
                navigate('/dashboard');
            }else{
                setError(data.message ||'Erro ao fazer Login. Tente novamente');
            }

        }catch(erro){
            console.log('Falha ao conectar a API', erro);
            setError('Não foi possível conectar ao servidor. Verifique sua conexão' + erro);
        }finally{
            setLoading(false);
        }
    }

    return(
        <div className="container-sm">
            <div className="row justify-content-center mt-5 text-center">
                <Moldura>
                    <h1>Login</h1>
                    <form onSubmit={executaSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Insira seu E-mail"value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha" name="senha" placeholder="Insira sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                        </div>

                        {error && <div className="alert alert-danger" role="alert">{error}</div>}

                        <button className="btn btn-primary" type="submit" disabled={loading}>{loading ? 'Entrando...': 'Login'}</button><br/>
                        <Link className="link-success link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/registrar">Cadastrar</Link>
                    </form>
                </Moldura>
            </div>
        </div>
    )
}