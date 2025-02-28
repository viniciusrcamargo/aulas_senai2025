import React from "react";
import styled from "styled-components";

const Nome = styled.h2`
color: red;
text-align: center;
`;

function Produto(props){
    return(
        <div>
            <Nome>{props.nome}</Nome>
            <p>Preço R$ {props.preco}</p>
        </div>
    )
}

export default Produto;