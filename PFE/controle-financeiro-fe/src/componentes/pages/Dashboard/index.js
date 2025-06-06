import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Link } from 'react-router-dom'

const fetchMovimentacoes = async () => {
    try {
        const resposta = await fetch('http://localhost:3000/movimentacoes/getMovimentacaoUsuarioTipo');
        if (!resposta.ok) {
            throw new Error('Erro ao buscar movimentações');
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.log('Descrição do erro ', erro);
        throw erro;
    }
}


export default function Dashboard() {
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [totalEntradas, setTotalEntradas] = useState(0);
    const [totalSaida, setTotalSaidas] = useState(0);
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const carregarMovimentacoes = async () => {
            try {
                setLoading(true);
                setErro(null);
                const dados = await fetchMovimentacoes();
                setMovimentacoes(dados);
            } catch (erro) {
                console.log('Erro ao buscar movimentações', erro);
                setErro('Erro ao buscar movimentações');
            } finally {
                setLoading(false);
            }
        }
        carregarMovimentacoes();
    }, []);

    useEffect(() => {
        let entradas = 0;
        let saidas = 0;
        movimentacoes.forEach((mov) => {
            if (mov.tipo === 'entrada') {
                entradas += Number(mov.valor);
                setTotalEntradas(entradas);
            } else if (mov.tipo === 'saida') {
                saidas += Number(mov.valor);
                setTotalSaidas(saidas);
            }
        });
        setTotalEntradas(entradas);
        setTotalSaidas(saidas);
    }, [movimentacoes]);

    return (
        <div className="container">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="dropdown" style={{ marginRight: '10px' }}>
                                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movimentações
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/addmovimentacao">Adicionar</Link></li>
                                    <li><Link className="dropdown-item" to="/relatoriomovimentacao">Relatório</Link></li>
                                </ul>
                            </div>
                            <input
                                type="date"
                                id="dataMovimentacao"
                                onChange={(e) => setData(e.target.value)}
                                value={data}
                                className="form-control"
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total de Entradas</h5>
                                    <p className="card-text">R$ {totalEntradas},00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total de Saídas</h5>
                                    <p className="card-text">R$ {totalSaida},00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">O que sobrou</h5>
                                    <p className="card-text">R$ {totalEntradas - totalSaida},00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2>Relatório</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Data</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Valor</th>
                                    <th scope="col">Movimentação</th>
                                </tr>
                            </thead>

                            <tbody>
                                {movimentacoes.map((mov) => {
                                    const dataFormatada = new Date(mov.data_movimentacao).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                                    return (
                                        <tr key={mov.id} className={mov.tipo === 'saida' ? 'table-danger-subtle' : 'table-success-subtle'}>
                                            <td>{dataFormatada !== 'Invalid Date' ? dataFormatada : 'Data Inválida'}</td>
                                            <td>{mov.descricao}</td>
                                            <td className={`text-start fw-bold ${mov.tipo === 'saida' ? 'text-danger' : 'text-success'}`}>
                                                {mov.tipo === 'saida' ? '-' : '+'} {Number(mov.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </td>
                                            <td>
                                                <span className={`badge ${mov.tipo === 'saida' ? 'bg-warning text-dark' : 'bg-success'}`}>
                                                    {mov.tipo.charAt(0).toUpperCase() + mov.tipo.slice(1)}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                </main>
            </div>
        </div>
    )
}