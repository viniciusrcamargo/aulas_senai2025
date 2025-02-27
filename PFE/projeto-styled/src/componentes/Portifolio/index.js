import styled from "styled-components";
import projeto1 from './imagens/livro2.png'

const Container = styled.section`
    background-color:rgb(193, 183, 183);
    display: flex;
`;

const Projeto = styled.div`
    diplay: flex;
    flex-direction: column;
`

const Imagem = styled.img`
    width: 40px;
    height:40px;
    border-radius: 10px;
`;

const Titulo = styled.h3`
    color: red;
`;

const Descricao = styled.p`
    font-size: 16px;
`;

function Portifolio(){
    return(
        <Container>
            <Projeto>
                <Imagem src={projeto1}></Imagem>
                <Titulo>Projeto Crud LocalStorage</Titulo>
                <Descricao>Projeto que salva informações no LocalStorage</Descricao>
            </Projeto>
            <Projeto>
                <Imagem src={projeto1}></Imagem>
                <Titulo>Projeto Crud LocalStorage</Titulo>
                <Descricao>Projeto que salva informações no LocalStorage</Descricao>
            </Projeto>
            <Projeto>
                <Imagem src={projeto1}></Imagem>
                <Titulo>Projeto Crud LocalStorage</Titulo>
                <Descricao>Projeto que salva informações no LocalStorage</Descricao>
            </Projeto>
        </Container>
    )
}

export default Portifolio;