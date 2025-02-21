import React from "react";
import "./estilo.css";

function Produto(props) {
  return (
    <div>
      <h2>{props.nome}</h2>
     <p>Preço R$ {props.preco}</p>
   </div>
 );
}

export default Produto;