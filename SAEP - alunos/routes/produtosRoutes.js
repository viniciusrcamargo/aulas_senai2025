import express from 'express';
import bd from '../db.js';

const router = express.Router();

router.get('/listar', async(req,res)=>{
    const {busca} = req.query;
    let sql = "SELECT * FROM produtos";
    let params = [];
    if(busca){
        sql += " WHERE nome_produto = ILIKE $1";
        params.push(`%${busca}%`)
    }
    sql += ' ORDER BY nome_produto ASC';
    const resultado = await bd.query(sql,params);
    res.render('produtos/lista', {usuario: req.session.user, produtos: resultado.rows, busca })
} )

router.get('/novo', async (req, res)=>{
    res.render('produtos/novo')
})

router.post('/novo', async(req, res) =>{
    const {nome, estoque_minimo, quantidade} = req.body;
    if(!nome || !estoque_minimo || !quantidade){
        return res.redirect('/produtos/listar')
    }
    await bd.query("INSERT INTO produtos (nome_produto, estoque_minimo, quantidade) VALUES ($1,$2,$3)",[nome, estoque_minimo || 0, quantidade || 0])
    res.redirect('/produtos/listar')
})

router.get('/editar/:id', async (req, res)=>{
    const {id} = req.params;
    const resultado = await bd.query("SELECT * FROM produtos WHERE id_produto = $1",[id])
    res.render('produtos/editar', {usuario: req.session.user, p: resultado.rows[0]} )
})

router.post('/editar/:id', async(req,res) =>{
    const {nome, estoque_minimo, quantidade} = req.body;
    const {id}  = req.params;
    await bd.query("UPDATE produtos SET nome_produto = $1, quantidade = $2,estoque_minimo = $3 WHERE id_produto = $4",[nome,quantidade,estoque_minimo, id])
    res.redirect('/produtos/listar')
})

router.post('/excluir/:id', async (req,res) =>{
    const {id} = req.params;
    await bd.query("DELETE FROM produtos WHERE id_produto=$1", [parseInt(id)]);
    res.redirect('/produtos/listar')
})
export default router;