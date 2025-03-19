import { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Titulo = styled.h1`
    font-size: 24px;
    color:#333;
    margin-bottom: 20px;
`;

const CampoTexto = styled.input`
    width: 15%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;


const Botao = styled.button`
    padding: 10px;
    width: 16%;
    margin-bottom: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    &:hover{
        background-color: #0056b3;
    }
`;

export default function Calculadora(){
    const [input, setInput] = useState('');
    const [input2, setInput2] = useState('');
    const [resultado, setResult] = useState(null);

    const atualizaInput = (e) => {
        setInput(e.target.value);
    }

    const atualizaInput2 = (e) => {
        setInput2(e.target.value);
    }

    const soma = () =>{//arrow function
        setResult(parseInt(input) + parseInt(input2));
    }

    const calculaResultado = () => {
        try{
            setResult(eval(input));
        }catch (erro){
            setResult('Erro ao realizar o calculo');
        }

    }

    const limpaInput = () =>{
        setInput('');
        setInput2('');
        setResult('');
    }

    return(

        <Container>
            <Titulo>Calculadora</Titulo>
            <CampoTexto type="text" value={input} onChange={atualizaInput}/>        
            <CampoTexto type="text" value={input2} onChange={atualizaInput2}/>
            <Botao onClick={soma}>Somar</Botao>
            <Botao onClick={limpaInput}>Limpar</Botao>
            <h2>Resultado: {resultado}</h2>        

        </Container>
    );
}

