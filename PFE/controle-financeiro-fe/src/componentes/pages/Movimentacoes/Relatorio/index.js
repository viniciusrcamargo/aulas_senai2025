import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import styled from 'styled-components';

const Corpo = styled.div`
    background-color: #2A83F0;
    padding: 10px;
    width: 100vw;
    min-height: 100vh;
    display: flex;
`;

const atualizarMovimentacaoApi = async (id, dadosMovimentacao) => {
    try {
        const carregar = {
            ...dadosMovimentacao,
            valor: parseFloat(dadosMovimentacao.valor),
        };

        const resposta = await fetch(`http://localhost:3000/movimentacoes/atualizarMovimentacao/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carregar),
        });
        if (!resposta.ok) {
            const errorData = await resposta.json().catch(() => ({ message: 'Erro ao atualizar movimentação. Verifique os dados e tente novamente.' }));
            throw new Error(errorData.message || 'Erro desconhecido ao atualizar movimentação.');
        }
        return await resposta.json();
    } catch (erro) {
        console.error('Erro na API ao atualizar movimentação:', erro);
        throw erro;
    }
};


const fetchMovimentacoes = async () => {
    try {
        const usuarioString = localStorage.getItem('usuario');
        if (!usuarioString) {
            console.log('Usuario não encontrado no localStorage');
            return [];
        }

        const usuario = JSON.parse(usuarioString);
        const usuarioId = usuario.id;

        const resposta = await fetch(`http://localhost:3000/movimentacoes/getMovimentacoesPorUsuario/${usuarioId}`);
        if (!resposta.ok) {
            throw new Error('Erro ao buscar movimentações');
        }
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error(erro);
        throw erro;
    }
};

export default function RelatorioMovimentacoes() {
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const [showEditModal, setShowEditModal] = useState(false);
    const [movimentacaoEmEdicao, setMovimentacaoEmEdicao] = useState(null);
    const [formDados, setFormDados] = useState({
        id: '',
        data_movimentacao: '',
        descricao: '',
        valor: '',
        tipo: 'entrada',
        id_usuario: '',
        id_tipo_pagamento: '',
    });
    const [isUpdating, setIsUpdating] = useState(false);
    const [editErro, setEditErro] = useState(null);


    useEffect(() => {
        const carregarMovimentacoes = async () => {
            try {
                setLoading(true);
                setErro(null);
                const dados = await fetchMovimentacoes();
                setMovimentacoes(dados);
            } catch (err) {
                console.error("Erro ao buscar movimentações:", err);
                setErro("Não foi possível carregar as movimentações.");
            } finally {
                setLoading(false);
            }
        };

        carregarMovimentacoes();
    }, []);

    const hadleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDados(prev => ({ ...prev, [name]: value }));
    };

    const executaEditar = (movimentacao) => {
        setMovimentacaoEmEdicao(movimentacao);
        const formatData = movimentacao.data_movimentacao
            ? new Date(movimentacao.data_movimentacao).toISOString().split('T')[0]
            : '';

        setFormDados({
            id: movimentacao.id,
            data_movimentacao: formatData,
            descricao: movimentacao.descricao,
            valor: movimentacao.valor.toString(),
            id_usuario: movimentacao.id_usuario,
            id_tipo_pagamento: movimentacao.id_tipo_pagamento,
            tipo: movimentacao.tipo
        });
        setEditErro(null);
        setShowEditModal(true);
    };

    const handleSalvarEdicao = async (e) => {
        e.preventDefault();
        if (!movimentacaoEmEdicao) return;

        setIsUpdating(true);
        setEditErro(null);

        try {
            const carregar = {
                descricao: formDados.descricao,
                valor: parseFloat(formDados.valor),
                tipo: formDados.tipo,
                data_movimentacao: formDados.data_movimentacao,
                id_usuario: formDados.id_usuario,
                id_tipo_pagamento: formDados.id_tipo_pagamento,
            };

            const movimentacaoAtualizada = await atualizarMovimentacaoApi(movimentacaoEmEdicao.id, carregar);

            setMovimentacoes(prevMovimentacoes =>
                prevMovimentacoes.map(mov =>
                    mov.id === movimentacaoAtualizada.id ? movimentacaoAtualizada : mov
                )
            );
            setShowEditModal(false);
            setMovimentacaoEmEdicao(null);
            window.location.reload();
        } catch (err) {
            console.error("Erro ao salvar edição:", err);
            setEditErro(err.message || "Falha ao atualizar. Tente novamente.");
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancelarEdicao = () => {
        setShowEditModal(false);
        setMovimentacaoEmEdicao(null);
        setEditErro(null);
    };

    const executaExcluir = async (idMovimentacao) => {
        if (window.confirm(`Tem certeza que deseja excluir a movimentação ID: ${idMovimentacao}?`)) {
            try {
                const resposta = await fetch(`http://localhost:3000/movimentacoes/excluirMovimentacao/${idMovimentacao}`, {
                    method: 'DELETE',
                });

                if (!resposta.ok) {
                    const errorData = await resposta.json().catch(() => ({}));
                    throw new Error(errorData.message || `Erro ao excluir movimentação ${idMovimentacao}`);
                }

                setMovimentacoes(movimentacoes.filter(mov => mov.id !== idMovimentacao));
                alert(`Movimentação ID: ${idMovimentacao} excluída com sucesso.`);

            } catch (erro) {
                console.error(`Erro ao excluir movimentação ID: ${idMovimentacao}`, erro);
                alert(`Falha ao excluir movimentação: ${erro.message}`);
            }
        }
    };


    if (loading) {
        return (
            <div className="container mt-4 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </div>
                <p>Carregando movimentações...</p>
            </div>
        );
    }

    if (erro) {
        return (
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    {erro}
                </div>
            </div>
        );
    }

    if (movimentacoes.length === 0 && !loading) {
        return (
            <div className="container mt-4">
                <div className="alert alert-info" role="alert">
                    Nenhuma movimentação encontrada.
                </div>
            </div>
        );
    }

    return (

        <div className="container mt-5">
            <h2 className="mb-4 text-center" style={{ color: 'white' }}>Relatório de Movimentações</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th className="text-end">Valor (R$)</th>
                            <th>Tipo</th>
                            <th>Usuário</th>
                            <th>Tipo Pagamento</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {movimentacoes.map((mov) => {
                            const dataFormatada = new Date(mov.data_movimentacao).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
                            return (
                                <tr key={mov.id} className={mov.tipo === 'saida' ? 'table-danger-subtle' : 'table-success-subtle'}>
                                    <td>{dataFormatada !== 'Invalid Date' ? dataFormatada : 'Data Inválida'}</td>
                                    <td>{mov.descricao}</td>
                                    <td className={`text-end fw-bold ${mov.tipo === 'saida' ? 'text-danger' : 'text-success'}`}>
                                        {mov.tipo === 'saida' ? '-' : '+'} {Number(mov.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                    </td>
                                    <td>
                                        <span className={`badge ${mov.tipo === 'saida' ? 'bg-warning text-dark' : 'bg-success'}`}>
                                            {mov.tipo.charAt(0).toUpperCase() + mov.tipo.slice(1)}
                                        </span>
                                    </td>
                                    <td>{mov.nome}</td>
                                    <td>{mov.nome_tipo_pagamento}</td>
                                    <td className="text-center">
                                        <button
                                            title="Editar"
                                            className="btn btn-sm btn-outline-primary me-2"
                                            onClick={() => executaEditar(mov)}
                                        >
                                            <i className="bi bi-pencil-square"></i>
                                        </button>
                                        <button
                                            title="Excluir"
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => executaExcluir(mov.id)}
                                        >
                                            <i className="bi bi-trash3-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {showEditModal && movimentacaoEmEdicao && (
                <div className="modal fade show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} role="dialog">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <form onSubmit={handleSalvarEdicao}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Editar Movimentação (ID: {movimentacaoEmEdicao.id})</h5>
                                    <button type="button" className="btn-close" onClick={handleCancelarEdicao} aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {editErro && <div className="alert alert-danger">{editErro}</div>}
                                    <div className="mb-3">
                                        <label htmlFor="descricao" className="form-label">Descrição</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="descricao"
                                            name="descricao"
                                            value={formDados.descricao}
                                            onChange={hadleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="valor" className="form-label">Valor (R$)</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            className="form-control"
                                            id="valor"
                                            name="valor"
                                            value={formDados.valor}
                                            onChange={hadleInputChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="tipo" className="form-label">Tipo</label>
                                        <select
                                            className="form-select"
                                            id="tipo"
                                            name="tipo"
                                            value={formDados.tipo}
                                            onChange={hadleInputChange}
                                            required
                                        >
                                            <option value="entrada">Entrada</option>
                                            <option value="saida">Saída</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleCancelarEdicao} disabled={isUpdating}>
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn btn-primary" disabled={isUpdating}>
                                        {isUpdating ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                Salvando...
                                            </>
                                        ) : (
                                            'Salvar Alterações'
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>

    );
}