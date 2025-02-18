import React from 'react';
import styled from 'styled-components';

// Definindo o componente estilizado para o cabeçalho
const Header = styled.header`
  background-color: #292929;
  padding: 20px;
  color: white;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
`;

const Nav = styled.nav`
  margin-top: 10px;
`;

const NavLink = styled.a`
  margin: 0 15px;
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderComponent = () => {
  return (
    <Header>
      <Title>Meu Site</Title>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </Nav>
    </Header>
  );
};

export default HeaderComponent;