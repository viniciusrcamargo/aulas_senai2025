import React from "react";
import styled from "styled-components";
import { ProvedorImagem } from './contexto/ContextoImagem'
import ListaImagem from './componentes/ListaImagem';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;  
`;

function App() {
  return (
    <ProvedorImagem>
      <Container>
        <h1>Galeria de Imagens</h1>
        <ListaImagem />
      </Container>
    </ProvedorImagem>
  );
}

export default App;
