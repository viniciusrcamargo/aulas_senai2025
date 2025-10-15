const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const heroes = [
  {
    nome: "Mulher Maravilha",
    habilidade: "Super força, agilidade, laço da verdade",
    sexo: "Feminino",
    forca: 95,
    foto: "https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2021/10/19174636/thumb_aniversario_mulher_maravilha.jpg"
  },
  {
    nome: "Homem de Ferro",
    habilidade: "Armadura tecnológica, inteligência",
    sexo: "Masculino",
    forca: 85,
    foto: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg"
  },
  {
    nome: "Superman",
    habilidade: "Voo, super força, visão de calor",
    sexo: "Masculino",
    forca: 100,
    foto: "https://cdn.pixabay.com/photo/2020/07/11/04/41/superman-5392758_1280.png"
  },
  {
    nome: "Hulk",
    habilidade: "Força, brutalidade",
    sexo: "Masculino",
    forca: 500,
    foto: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/04/26/18/Untitled-5.jpg"
  },
  {
    nome: "Batman",
    habilidade: "Voo, inteligência, dindin",
    sexo: "Masculino",
    forca: 80,
    foto: "https://cdn.pixabay.com/https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/quadrinho-de-batman.jpg"
  },
  {
    nome: "Viuva Negra",
    habilidade: "Beleza, artes marciais, esperteza",
    sexo: "Feminino",
    forca: 70,
    foto: "https://super.abril.com.br/wp-content/uploads/2021/07/Viuva-Negra.jpg"
  }
];

app.get('/api/herois', (req, res) => {
  res.json(heroes);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});