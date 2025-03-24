import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from  '../../imagens/big-neck (2).png'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

const BigNeck = styled.img`
    width: 200px;
    border-radius: 40%;
`;

const Mensagem = styled.p`
    font-size: 2rem;
    color: #333;
`;

export default function BoasVindas(){
    return(
        <Container>
            <BigNeck src={Logo} alt="Foto do Big" />
            <Mensagem>Seja bem-vindo ao Big Neck's World.</Mensagem>
            <Link to="/" className="botao">Voltar</Link>
        </Container>
    );
}