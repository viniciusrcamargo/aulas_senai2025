const express = require('express');
const path = require('path');

const app =  express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')));

const dadosExemplo = {
    line: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul'],
        values: [12,19,3,5,2,3,15]
    },
    bar: {
        labels: ['Bicicleta', 'Patins', 'Iphone', 'Ipad'],
        values: [35,19,22,29]
    },
    pie: {
        labels: ['Mobile', 'Desktop', 'Tablet'],
        values: [55,19,10]
    }
}

app.get('/', (req, res) =>{
    res.render('index', {
        titulo: 'Aprendendo Gráficos com o Senai',
        data: dadosExemplo
    })
})

const porta = 3000;
app.listen(porta, ()=> console.log(`🚀 Servidor rodando em http://localhost:${porta}`));