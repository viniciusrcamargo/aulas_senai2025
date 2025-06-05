// models/movimentacaoModel.js
const conexao = require('../conexao');

const criarMovimentacao = async (id_usuario, tipo, valor, descricao, data_movimentacao, id_tipo_pagamento) => {
    const query = 'INSERT INTO movimentacoes (id_usuario, tipo, valor, descricao, data_movimentacao, id_tipo_pagamento) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *';
    const valores = [id_usuario, tipo, valor, descricao, data_movimentacao, id_tipo_pagamento];

    // console.log(query);
    // console.log(valores);

    const { rows } = await conexao.query(query, valores);
    return rows[0];
};

// const buscarExtratoPorDia = async (id, data) => {
//     const query = 'CALL gerar_extrato_por_dia($1, $2)';
//     await conexao.query(query, [id, data]);
//     const extratoQuery = 'SELECT * FROM extratos WHERE usuario_id = $1 AND data = $2';
//     const { rows } = await conexao.query(extratouery, [id, data]);
//     return rows;
// };

// const buscarExtratoPorPeriodo = async (id, data_inicial, data_final) => {
//     const query = 'CALL gerar_extrato_por_periodo($1, $2, $3)';
//     await conexao.query(query, [id, data_inicial, data_final]);
//     const extratoQuery = 'SELECT * FROM extratos WHERE usuario_id = $1 AND data BETWEEN $2 AND $3';
//     const { rows } = await conexao.query(extratoQueQry, [id, data_inicial, data_final]);
//     return rows;
// };


// a) Busca todas as movimentações
const getTodasMovimentacoes = async () => {
    const query = 'SELECT * FROM movimentacoes';
    const { rows } = await conexao.query(query);
    return rows;
};

// b) Busca movimentações por ID de usuário
const getMovimentacoesPorUsuario = async (id_usuario) => {
    const query = 'SELECT * FROM movimentacoes WHERE id_usuario = $1';
    const { rows } = await conexao.query(query, [id_usuario]);
    return rows;
};

// d) Atualiza uma movimentação
const atualizarMovimentacao = async (id, dados) => {
    const { descricao, valor, tipo, id_tipo_pagamento } = dados;
    const query = `
        UPDATE movimentacoes 
        SET descricao = $1, valor = $2, tipo = $3, id_tipo_pagamento = $4
        WHERE id = $5 RETURNING *`;
    const { rows } = await conexao.query(query, [descricao, valor, tipo, id_tipo_pagamento, id]);
    return rows[0];
};

// e) Exclui uma movimentação
const excluirMovimentacao = async (id) => {
    const query = 'DELETE FROM movimentacoes WHERE id = $1';
    await conexao.query(query, [id]);
};

// f) Busca todas os pagamentos -- Vinicius
const getTipoPagamento = async () => {
    const query = 'SELECT * FROM tipo_pagamentos';
    const { rows } = await conexao.query(query);
    return rows;
};

//g) Busca movimentações com nomes de usuarios e tipos de pagamento
const getMovimentacoesUsuarioTipPagto = async () => {
    const query = 'SELECT m.id, m.descricao, m.valor, m.tipo, m.data_movimentacao, m.id_usuario, m.id_tipo_pagamento, u.nome, tp.nome_tipo_pagamento FROM movimentacoes m JOIN usuarios u ON m.id_usuario = u.id JOIN tipo_pagamentos tp ON m.id_tipo_pagamento = tp.id_tipo_pagamento';
    const { rows } = await conexao.query(query);
    return rows;
};


module.exports = {
    criarMovimentacao,
    // buscarExtratoPorDia,
    // buscarExtratoPorPeriodo
    getMovimentacoesUsuarioTipPagto,
    getTodasMovimentacoes,
    getTipoPagamento,
    getMovimentacoesPorUsuario,
    atualizarMovimentacao,
    excluirMovimentacao
};

