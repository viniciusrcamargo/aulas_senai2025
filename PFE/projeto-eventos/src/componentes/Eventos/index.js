import React from "react";
import styled from "styled-components";

const Corpo = styled.div`
    background-color: #f0f0f0;
    color: #333;
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
`;

const Titulo = styled.h1`
    font-size: 24px;
`;

const Paragrafo = styled.p`
  font-size: 16px;
`;

const Subtitulo = styled.h3`
    font-size: 20px;
`;

const Botao = styled.button`
    background-color: #008CBA;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 10px 20px;
`;

const CampoTexto = styled.input`
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

function Eventos(){
    return(
        <Corpo>
            <Titulo>Eventos com React</Titulo>
            <Paragrafo>São ações que ocorrem no navegador através de estímulos como o click do mouse ou pressionamento de teclas.</Paragrafo>

            <Subtitulo>onClick</Subtitulo>
            <Botao onClick={() => alert('Você clicou no botão')}>Clique 1x</Botao>

            <Subtitulo>onDoubleClick</Subtitulo>
            <Botao onDoubleClick={() => alert('Você clicou 2x no botão')}>Clique 2x</Botao>

            <Subtitulo>onChange</Subtitulo>
            <CampoTexto onChange={(e) => alert('Você digitou ' + e.target.value)}></CampoTexto>

            <Subtitulo>onMouseEnter</Subtitulo>
            <Paragrafo onMouseEnter={() => alert('Você passou com o mouse por cima do texto')}>Passe com o ponteiro mouse por cima do texto</Paragrafo>

            <Subtitulo>onKeyDown</Subtitulo>
            <CampoTexto onKeyDown={(e) => alert('Você pressionou a tecla: ' + e.key)}></CampoTexto>



        </Corpo>
    )
}


export default Eventos;