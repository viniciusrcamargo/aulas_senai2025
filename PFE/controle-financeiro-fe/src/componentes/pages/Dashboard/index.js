import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Link} from 'react-router-dom'


export default function Dashboard(){
    const [dataInicio, setDataInicio] = useState(new Date());
    return(
        <div className="container">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                           <div className="dropdown" style={{marginRight: '10px'}}>
                                <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movimentações
                                </button>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/addmovimentacao">Adicionar</Link></li>
                                    <li><Link className="dropdown-item" to="/relatoriomovimentacao">Relatório</Link></li>
                                </ul>
                           </div>
                           <DatePicker 
                                selected={dataInicio}
                                onChange={(date) => setDataInicio(date)}
                                showWeekNumbers
                                calendar
                                dateFormat="dd/MM/yyyy"
                                locale={ptBR}
                                className="form-control"
                           />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total de Entradas</h5>
                                    <p className="card-text">R$ 1.500,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total de Saídas</h5>
                                    <p className="card-text">R$ 750,00</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">O que sobrou</h5>
                                    <p className="card-text">R$ 750,00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <h2>Relatório</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Movimentação</th>
                                    <th scope="col">Descrição</th>
                                    <th scope="col">Valor</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Entrada</td>
                                    <td>Mesada</td>
                                    <td>R$ 1.500,00</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Saída</td>
                                    <td>Camisa do Corinthians original</td>
                                    <td>R$ 750,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </main>
            </div>
        </div>
    )
}