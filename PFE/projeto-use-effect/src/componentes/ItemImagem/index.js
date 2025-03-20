import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Imagem = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 8px;
`;

const Descricao = styled.p`
    font-size: 24px;
`;

const ItemImagem = ({imagem}) => {
    return(
        <Container>
            <Imagem src={imagem.url} alt={imagem.descricao}/>
            <Descricao>{imagem.descricao}</Descricao>
        </Container>
    );
}
export default ItemImagem;