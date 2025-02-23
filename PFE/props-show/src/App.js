import React from "react";
import Produto from "./componentes/Produto";

function App() {
  // Lista de produtos
  const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Smartphone", preco: 2000 },
    { id: 3, nome: "Fone de Ouvido", preco: 150 },
  ];

  return (
    <section>
     <h1>Lista Produtos</h1>
     {produtos.map((produto) => (
        <Produto nome={produto.nome} preco={produto.preco} />
      ))}
    </section>
 );
}

export default App;
