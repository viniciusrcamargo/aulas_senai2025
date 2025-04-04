import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function AcessoApi(){
    const [dados, setDados] = useState({});

    useEffect(() =>{
        const fetchDados = async () =>{
            try{
                const resposta = await axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL');
                setDados(resposta.data);
            }catch(erro){
                console.log('Erro ao buscar os dados', erro);
                
            }
        }

        fetchDados();
        const intervalo = setInterval(fetchDados, 6000);//atualiza a cada 6 segundos

        return () => clearInterval(intervalo);//limpa o intervalo quando o componente é desmontado

       
    },[]);

    return(
        <div className="container">
            <h1>Cotações</h1>
            <ol className="list-group list-group-numbered">
                <div className="fw-bold">
                    <li>Dólar: R${dados.USDBRL?.bid}</li>
                </div>
                
                <div className="fw-bold">
                    <li>Euro: R${dados.EURBRL?.bid}</li>
                </div>
                
                <div className="fw-bold">
                    <li>Bitcoin: R${dados.BTCBRL?.bid}</li>
                </div>
            </ol>
        </div>
    );
}