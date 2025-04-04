import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ApiGato() {
    const [dados, setDados] = useState([]);

    useEffect(() => {
        const fetchDados = async () => {
            try {
                const resposta = await axios.get('https://api.thecatapi.com/v1/images/search?limit=10');
                setDados(resposta.data);
                // console.log(resposta);
            } catch (erro) {
                console.log('Erro ao buscar os dados', erro);
            }
        }

        fetchDados();
    }, []);

    return (
        <div className="container">
            <h1>Gatinhos</h1>
            <ol className="list-group list-group-numbered">
                {dados.map((dado, index) => (
                    <li key={index} className="list-group-item">
                        <div className="fw-bold">
                            <img src={dado.url} alt="Gatinho" className="img-fluid" />
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}
