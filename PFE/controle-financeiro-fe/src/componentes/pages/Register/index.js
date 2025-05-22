import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Moldura = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
`;

export default function Register(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const execSubmit = async (event) =>{
            if(senha === confSenha){
                event.preventDefault();
                setLoading(true);
                setErro('');

                try{
                    const resposta = await fetch('http://localhost:3000/usuarios/registrar',{
                        method: 'POST',
                        headers:{
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({nome, email, senha})
                    });
                    console.log(resposta.toString);
                    const dados = await resposta.json();
                    
                    if(resposta.ok){
                        alert('Cadastro realizado com sucesso');
                        navigate('/');
                    }else{
                        setErro(dados.message || 'Erro ao fazer o cadastro. Tente novamente');
                    }
                }catch(e){
                    console.log('Falha ao conectar a API', erro);
                    setErro('Não foi possível conectar ao servidor' + e);
                }finally{
                    setLoading(false);
                }
            }else{
                event.preventDefault();
                alert("As senhas não são iguais. Tente novamente!");
                setSenha('');
                setConfSenha('');
            }
    }

    return(
        <div className="container-sm">
            <div className="row justify-content-center mt-5 text-center">
                <Moldura>
                    <h1>Registrar</h1>
                    <form onSubmit={execSubmit}>
                        <div className="mb-3">
                            <label htmlFor="nome" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="nome" name="nome" placeholder="Insira seu Nome" value={nome} onChange={(e) => setNome(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="Insira seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">Senha</label>
                            <input type="password" className="form-control" id="senha" name="senha" placeholder="Insira sua Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmaSenha" className="form-label">Confirme a Senha</label>
                            <input type="password" className="form-control" id="confirmaSenha" name="confiirmaSenha" placeholder="Insira sua Senha" value={confSenha} onChange={(e) => setConfSenha(e.target.value)} required/>
                        </div>
                        {erro && <div className="alert alert-danger" role="alert">{erro}</div>}
                        <button className="btn btn-primary" type="submit">
                            {loading ? 'Cadastrando...' : 'Salvar'}
                        </button>
                    </form>
                </Moldura>
            </div>
        </div>
    )
}