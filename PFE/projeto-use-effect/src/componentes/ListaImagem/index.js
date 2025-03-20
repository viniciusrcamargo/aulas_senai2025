import React, { useContext } from "react";
import styled from "styled-components";
import { ContextoImagem } from '../../contexto/ContextoImagem';
import ItemImagem from "../ItemImagem";

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 20px;
`;

export default function ListaImagem(){
    const {imagens} = useContext(ContextoImagem);

    return(
        <Container>
            {imagens.map(imagem => (
                <ItemImagem key={imagem.id} imagem={imagem}/>
            ))}
        </Container>
    );
}