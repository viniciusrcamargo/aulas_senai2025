require('dotenv').config();
const express = require('express');
const cors = require('cors');
// const conexao = require('./conexao'); // Importa a conexão com o banco
const usuariosRoutes = require('./routes/usuariosRoutes'); // Rotas de usuários
const movimentacoesRoutes = require('./routes/movimentacoesRoutes'); // Rotas de movimentações

const app = express();

// Middlewares
app.use(cors()); // Habilita CORS
app.use(express.json()); // Permite receber JSON no body das requisições

// Rotas
app.use('/usuarios', usuariosRoutes);
app.use('/movimentacoes', movimentacoesRoutes);

// Rota principal (teste de conexão)
app.get('/', (req, res) => {
    res.send('API funcionando!');
});

// Inicia o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor executando em: http://localhost:${port}`);
});
