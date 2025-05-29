import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function AdicionarMovimentacao() {
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [tipo, setTipo] = useState('');
    const [id_usuario, setIdUsuario] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [id_tipo_pagamento, setIdTipoPagamento] = useState('');
    const [tipoPagamentos, setTipoPagamentos] = useState([]);
    const [erro, setErro] = useState('');
    const [loading, setLoading] = useState(false);
    const [data_movimentacao, setDataMovimentacao] = useState(new Date().toISOString().split('T')[0]);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const resposta = await fetch('http://localhost:3000/usuarios/getTodosUsuarios');
                if (!resposta.ok) {
                    throw new Error("Falha ao buscar usuários");
                }
                const dados = await resposta.json();
                setUsuarios(dados);
            } catch (erro) {
                console.log('Erro ao buscar usuários', erro);
                setErro('Erro ao buscar usuários' + erro);
            }
        }
        fetchUsuarios();
    }, []);

    useEffect(() => {
        const fetchPagamentos = async () => {
            try {
                const resposta = await fetch('http://localhost:3000/movimentacoes/getTipoPagamento');
                if (!resposta.ok) {
                    throw new Error("Falha ao buscar tipo de pagamentos");
                }
                const dados = await resposta.json();
                setTipoPagamentos(dados);
            } catch (erro) {
                console.log('Erro ao buscar tipo de pagamentos', erro);
                setErro('Erro ao buscar tipo de pagamentos' + erro);
            }
        }
        fetchPagamentos();
    }, []);

    const execSubmit = async (event) => {
         // alert(senha);
            event.preventDefault(); // Previne o recarregamento padrão da página
            setLoading(true); // Inicia o feedback de carregamento
            setErro(''); // Limpa erros anteriores
            console.log({descricao,valor,tipo,data_movimentacao,id_usuario,id_tipo_pagamento});
            try {
                const resposta = await fetch('http://localhost:3000/movimentacoes/adicionar', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ descricao, valor, tipo, data_movimentacao, id_usuario, id_tipo_pagamento }), // Envia os dados como JSON
                });
                console.log(resposta.toString);
    
                const data = await resposta.json(); // Lê a resposta como JSON
    
                if (resposta.ok) {
                    // Sucesso no cadastro
                    alert('Cadastro bem-sucedido!'); // Ou uma notificação melhor
                    console.log('Dados da API:', data);
                    // Aqui você pode, por exemplo, salvar um token de autenticação
                    // localStorage.setItem('authToken', data.token);
                    // E redirecionar o usuário para a página principal ou dashboard
                    navigate('/dashboard'); 
                } else {
                    // Erro no login (ex: credenciais inválidas, servidor fora)
                    setErro(data.message || 'Erro ao fazer o cadastro. Tente novamente.');
                }
            } catch (error) {
                // Erro na requisição (ex: problema de rede)
                console.error('Falha ao conectar com a API:', error);
                setErro('Não foi possível conectar ao servidor. Verifique sua conexão.');
            } finally {
                setLoading(false); // Finaliza o feedback de carregamento
            }
    }

    return (
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-8 col-lg-6'>
                    <div className='car shadow-sm'>
                        <div className='card-body p-4'>
                            <h2 className='card-title text-center mb-4'>Adicionar Nova Movimentação</h2>
                            <form onSubmit={execSubmit}>
                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='descricao'>Descrição</label>
                                    <input type='text' className='form-control' value={descricao} id='descricao' onChange={(e) => setDescricao(e.target.value)}
                                        required />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='valor'>Valor</label>
                                    <input type='number' step='0.01'
                                        className='form-control' id='valor' value={valor} onChange={(e) => setValor(e.target.value)} placeholder='Ex.: 150,00'
                                        required />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='tipo'>Tipo Movimentação</label>
                                    <select className='form-select' id='tipo' onChange={(e) => setTipo(e.target.value)} required>
                                        <option value='selecione'>Selecione o Tipo</option>
                                         <option value='entrada'>Entrada</option>                 
                                          <option value='saida'>Saída</option> 
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="dataMovimentacao" className="form-label">Data da Movimentação</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataMovimentacao"
                                        value={data_movimentacao}
                                        onChange={(e) => setDataMovimentacao(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label' htmlFor='id_usuario'>Usuário</label>
                                    <select className='form-select' id='id_usuario' onChange={(e) => setIdUsuario(e.target.value)} value={id_usuario} required>
                                        <option value='selecione'>Selecione o Usuário</option>
                                        {usuarios.map(usuario => (
                                            <option value={usuario.id} key={usuario.id}>{usuario.nome}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="id_tipo_pagamento" className="form-label">Tipo de Pagamento</label> {/* Corrigido */}
                                    <select
                                        className="form-select"
                                        id="id_tipo_pagamento" // Corrigido
                                        value={id_tipo_pagamento}
                                        onChange={(e) => setIdTipoPagamento(e.target.value)}
                                        required
                                    >
                                        <option value="">
                                            Selecione o tipo de Pagamento
                                        </option>
                                        {/* Verifica se tipoPagamentos é um array antes de mapear */}
                                        {Array.isArray(tipoPagamentos) && tipoPagamentos.map(tipo => (
                                            <option key={tipo.id_tipo_pagamento} value={tipo.id_tipo_pagamento}>
                                                {tipo.nome_tipo_pagamento}
                                            </option>))}
                                    </select>
                                </div>

                                {erro && <div className='alert alert-danger' role='alert'>{erro}</div>}

                                <div className='d-grid'>
                                    <button type='submit' className='btn btn-primary btn-lg'>{loading ? "Cadastrando..." : "Salvar"}</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}