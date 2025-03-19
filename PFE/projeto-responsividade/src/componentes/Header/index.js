import React from "react";
import styled from "styled-components";
import Sapo from './img/frog.jpg'

const Container = styled.div`
    background-color: #282c34;
    padding: 20px;
    color: white;
    text-align: center;
`;

const Titulo = styled.h1`
    font-family: Roboto, Arial;
    margin-bottom: 10px;

    @media(max-width: 768px){
        color: red;
    }
    
    @media(min-width: 1024px){
        color: blue
    }

`;

const Imagem = styled.img`
    width: 400px;
    height: 400px;

    @media(max-width: 768px){
        width: 200px;
        height: 200px;
    }

    @media(min-width: 1024px){
        width: 500px;
        height: 500px;
    }
`;

function Header(){
    return(
        <Container>
            <Titulo>Layout Responsivo</Titulo>
            <Imagem src={Sapo} />
        </Container>
    );
}

export default Header;