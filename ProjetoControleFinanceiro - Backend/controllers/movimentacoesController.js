// controllers/movimentacaoController.js
const movimentacaoModel = require('../models/movimentacoesModel');

const adicionarMovimentacao = async (req, res) => {
    const { id_usuario, tipo, valor, descricao, data_movimentacao, id_tipo_pagamento }
        = req.body;

    try {
        const movimentacao = await
            movimentacaoModel.criarMovimentacao(id_usuario, tipo,
                valor, descricao, data_movimentacao, id_tipo_pagamento);
        res.status(201).json(movimentacao);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao adicionar movimentação', detalhe: error.message });
    }
};

// const getExtratoPorDia = async (req, res) => {
//     const { id } = req.params;
//     const { data } = req.query;

//     try {
//         const extrato = await movimentacaoModel.buscarExtratoPorDia(id, data);
//         res.json(extrato);
//     } catch (error) {
//         res.status(500).json({ erro: 'Erro ao buscar extrato do dia', detalhe: error.message });
//     }
// };

// const getExtratoPorPeriodo = async (req, res) => {
//     const { id } = req.params;
//     const { data_inicial, data_final } = req.query;

//     try {
//         const extrato = await movimentacaoModel.buscarExtratoPorPeriodo(id, data_inicial, data_final);
//         res.json(extrato);
//     } catch (error) {
//         res.status(500).json({ erro: 'Erro ao buscar extrato do período', detalhe: error.message });
//     }
// };


// a) Seleciona todas as movimentações
const getTodasMovimentacoes = async (req, res) => {
    try {
        const movimentacoes = await movimentacaoModel.getTodasMovimentacoes();
        res.json(movimentacoes);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar movimentações', detalhe: error.message });
    }
};

// b) Seleciona movimentações de um usuário pelo ID
const getMovimentacoesPorUsuario = async (req, res) => {
    const { id } = req.params;
    try {
        const movimentacoes = await movimentacaoModel.getMovimentacoesPorUsuario(id);
        res.json(movimentacoes);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar movimentações do usuário', detalhe: error.message });
    }
};

// d) Atualiza uma movimentação
const atualizarMovimentacao = async (req, res) => {
    const { id } = req.params;
    const { descricao, valor, tipo, id_tipo_pagamento } = req.body;
    try {
        const movimentacaoAtualizada = await movimentacaoModel.atualizarMovimentacao(id, { descricao, valor, tipo, id_tipo_pagamento });
        res.json(movimentacaoAtualizada);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar movimentação', detalhe: error.message });
    }
};

// e) Exclui uma movimentação
const excluirMovimentacao = async (req, res) => {
    const { id } = req.params;
    try {
        await movimentacaoModel.excluirMovimentacao(id);
        res.json({ mensagem: 'Movimentação excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao excluir movimentação', detalhe: error.message });
    }
};

//f) selecionar tipos de pagamento --Vinicius
const getTipoPagamento = async (req, res) => {
    try {
        const tiposPagamento = await movimentacaoModel.getTipoPagamento();
        res.json(tiposPagamento);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar tipo pagamentos', detalhe: error.message });
    }
};

//g) selecionar tipos de pagamento --Vinicius
const getMovimentacoesUsuarioTipPagto = async (req, res) => {
    try {
        const movimentacao = await movimentacaoModel.getMovimentacoesUsuarioTipPagto();
        res.json(movimentacao);
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar movimentação', detalhe: error.message });
    }
};


module.exports = {
    adicionarMovimentacao,
    // getExtratoPorDia,
    // getExtratoPorPeriodo
    getMovimentacoesUsuarioTipPagto,
    getTodasMovimentacoes,
    getTipoPagamento,
    getMovimentacoesPorUsuario,
    atualizarMovimentacao,
    excluirMovimentacao
};