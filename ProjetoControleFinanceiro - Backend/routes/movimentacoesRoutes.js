const express = require('express');
const router = express.Router();
const movimentacoesController = require('../controllers/movimentacoesController');
// const autenticar = require('../middlewares/autenticar');

// Rotas para movimentações financeiras
router.post('/adicionar', movimentacoesController.adicionarMovimentacao);
// router.post('/adicionar', autenticar, movimentacoesController.adicionarMovimentacao);
// router.get('/extrato/:id', movimentacoesController.getExtratoPorDia);
// router.get('/extrato-periodo/:id', movimentacoesController.getExtratoPorPeriodo);


// a) Seleção de todos os registros de movimentações
router.get('/getTodasMovimentacoes', movimentacoesController.getTodasMovimentacoes);

// b) Seleção de movimentações por ID de usuário
router.get('/getMovimentacoesPorUsuario/:id', movimentacoesController.getMovimentacoesPorUsuario);

// d) Alteração de movimentação
router.put('/atualizarMovimentacao/:id', movimentacoesController.atualizarMovimentacao);

// e) Exclusão de movimentação
router.delete('/excluirMovimentacao/:id', movimentacoesController.excluirMovimentacao);

//f) Seleção tipos de pagamento --Vinicius
router.get('/getTipoPagamento', movimentacoesController.getTipoPagamento);

//g) Seleção movimentação, usuário e tipos de pagamento --Vinicius
router.get('/getMovimentacaoUsuarioTipo', movimentacoesController.getMovimentacoesUsuarioTipPagto);


module.exports = router;
