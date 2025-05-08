import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function AdicionarMovimentacao(){
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [idUsuario, setIdUsuario] = useState('');
    const [idTipoPagamento, setIdTipoPagamento] = useState('');

    return(
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-6'>
                    <div className='car shadow-sm'>
                        <div className='card-body p-4'>
                            <h2 className='card-title text-center mb-4'>Adicionar Nova Movimentação</h2>
                            <form>
                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='descricao'>Descrição</label>
                                    <input type='text' className='form-control' id='descricao' onChange={(e) => setDescricao(e.target.value)}
                                    required/>
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='valor'>Valor</label>
                                    <input type='number' step='0.01'
                                    className='form-control' id='valor' onChange={(e) => setValor(e.target.value)} placeholder='Ex.: 150,00'
                                    required/>
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='tipo'>Tipo Movimentação</label>
                                    <select className='form-select' id='tipo' onChange={(e) => setTipo(e.target.value)} required>
                                        <option value='selecione'>Selecione o Tipo</option>
                                       <option value='Entrada'>Entrada</option>                         <option value='Saida'>Saída</option>
                                    </select>
                                </div>

                                 <div className='mb-3'>
                                    <label className='form-label' htmlFor='idUsuario'>Usuário</label>
                                    <select className='form-select' id='idUsuario' onChange={(e) => setIdUsuario(e.target.value)} required>
                                        <option value='selecione'>Selecione o Usuário</option>
                                       <option value='usuario'>Erik</option>                         
                                    </select>
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='idTipoPagto'>Tipo de Pagamento</label>
                                    <select className='form-select' id='idTipoPgto' onChange={(e) => setIdTipoPagamento(e.target.value)} required>
                                        <option value='selecione'>Selecione o Tipo de Pagamento</option>
                                       <option value='pix'>Pix</option>                         
                                    </select>
                                </div>

                                <div className='d-grid'>
                                    <button type='button' className='btn btn-primary btn-lg'>Add Movimentação</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}