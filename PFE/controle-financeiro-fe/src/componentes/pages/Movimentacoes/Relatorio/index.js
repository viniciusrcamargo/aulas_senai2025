import react, {useState, useEffect} from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const atualizarMovimentacaoApi = async (id,dadosMovimentacao) =>{
    try {
        const carregar ={
            ...dadosMovimentacao,
            valor: parseFloat(dadosMovimentacao.valor)
        }
        const resposta = await fetch('http://localhost:3000/movimentacoes/atualizarMovimentacao/${id}',{
            method: 'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(carregar)
        })
        return await resposta.json();
    } catch (erro) {
        console.log('Erro ao atualizar dados na API ', erro);
        throw erro;
    }
}

const fetchMovimentacoes = async () =>{
    try {
        const resposta = await fetch('http://localhost:3000/movimentacoes/getMovimentacaoUsuarioTipo');
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.log('Erro ao buscar movimentações', erro);
        throw erro;
    }
}

export default function RelatorioMovimentacoes(){
    const [showEditModal, setShowEditModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [movimentacoes, setMovimentacoes] = useState([]);
    const [movimentacaoEmEdicao, setMovimentacaoEmEdicao] = useState(null);
    const [formDados, setFormDados] = useState({
        id: '',
        data_movimentacao: '',
        descricao: '',
        valor: '',
        tipo: 'entrada',
        id_usuario: '',
        id_tipo_pagamento: ''
    });
    const [isUpdating, setIsUpdating] = useState(false);
    const [editErro, setEditErro] = useState(null);

    useEffect(() =>{
        const carregarMovimentacoes = async() =>{
            try {
                setLoading(true);
                setErro(null);
                const dados = await fetchMovimentacoes();
                setMovimentacoes(dados);
            } catch (erro) {
                console.log('Não foi possível carregar as movimentações: ', erro);
                setErro('Não foi possível carregar as movimentações: ' + erro);
            }finally{
                setLoading(false);
            }
        }
        carregarMovimentacoes();
    },[]);

    const mudarInput = (e) =>{
        const {name, value} = e.target;
        setFormDados(prev => ({...prev, [name]: value}));
    }
    return(
        <div className="container mt-5">
            <h2 className="mb-4 text-center">Relatório de Movimentações
            </h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover table-bordered">
                    <thead className="table-dark">
                        <tr>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th className="text-end">Valor R$</th>
                            <th>Tipo</th>
                            <th>Usuário</th>
                            <th>Tipo Pagamento</th>
                            <th className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10/05/2025</td>
                            <td>Mesada</td>
                            <td>R$ 1500,00</td>
                            <td>Entrada</td>
                            <td>Erik</td>
                            <td>PIX</td>
                            <td>
                                <button title="Editar" className="btn btn-sm btn-outline-primary me-2">
                                    <i className="bi bi-pencil-square"></i>
                                </button>
                                <button title="Excluir" className="btn btn-sm btn-outline-danger me-2">
                                    <i className="bi bi-trash3-fill"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}