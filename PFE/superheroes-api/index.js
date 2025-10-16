const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const heroes = [
  {
    id: 1,
    nome: "Mulher Maravilha",
    habilidade: "Super força, agilidade, laço da verdade",
    sexo: "Feminino",
    forca: 95,
    foto: "https://s3.amazonaws.com/blog.dentrodahistoria.com.br/wp-content/uploads/2021/10/19174636/thumb_aniversario_mulher_maravilha.jpg"
  },
  {
    id: 2,
    nome: "Homem de Ferro",
    habilidade: "Armadura tecnológica, inteligência",
    sexo: "Masculino",
    forca: 85,
    foto: "https://lumiere-a.akamaihd.net/v1/images/iron_man_marvel_d9ce0209.jpeg"
  },
  {
    id: 3,
    nome: "Superman",
    habilidade: "Voo, super força, visão de calor",
    sexo: "Masculino",
    forca: 100,
    foto: "https://segredosdomundo.r7.com/wp-content/uploads/2020/07/superman-historia-poderes-fraquezas-e-curiosidades.jpg"
  },
  {
    id: 4,
    nome: "Hulk",
    habilidade: "Força, brutalidade",
    sexo: "Masculino",
    forca: 500,
    foto: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2012/04/26/18/Untitled-5.jpg"
  },
  {
    id: 5,
    nome: "Batman",
    habilidade: "Voo, inteligência, dindin",
    sexo: "Masculino",
    forca: 80,
    foto: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/09/quadrinho-de-batman.jpg"
  },
  {
    id: 6,
    nome: "Viuva Negra",
    habilidade: "Beleza, artes marciais, esperteza",
    sexo: "Feminino",
    forca: 70,
    foto: "https://super.abril.com.br/wp-content/uploads/2021/07/Viuva-Negra.jpg"
  },
  {
    id: 7,
    nome: "Doutor Estranho",
    habilidade: "Magia",
    sexo: "Masculino",
    forca: 150,
    foto: "https://s.aficionados.com.br/imagens/doutor-estranho-7.jpg"
  },
  {
    id: 8,
    nome: "Pantera negra",
    habilidade: "Força, trage blindado",
    sexo: "Masculino",
    forca: 170,
    foto: "https://s.aficionados.com.br/imagens/black-panther-first-0.jpg"
  },
  {
    id: 9,
    nome: "Feiticeira Escarlate",
    habilidade: "Magia",
    sexo: "Feminino",
    forca: 300,
    foto: "https://s.aficionados.com.br/imagens/scarletmagic-0.jpg"
  },
  {
    id: 10,
    nome: "Galactus",
    habilidade: "Poderosão",
    sexo: "Masculino",
    forca: "infinita",
    foto: "https://s.aficionados.com.br/imagens/laurence-fishburne-wants-to-play-galactus-in-a-fantastic-four-movie-social_cke.jpg"
  },
  {
    id: 11,
    nome: "Charles Xavies",
    habilidade: "Psiquico",
    sexo: "Masculino",
    forca: "600",
    foto: "https://s.aficionados.com.br/imagens/professor-xavier2-0.jpg"
  },
  {
    id: 12,
    nome: "Magneto",
    habilidade: "Manipula metais",
    sexo: "Masculino",
    forca: "700",
    foto: "https://s.aficionados.com.br/imagens/marvel-magneto-xmen_cke.jpg"
  }
];

app.use(cors()); // Permite todas as origens

app.get('/api/herois', (req, res) => {
  res.json(heroes);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

<div class="flex flex-row justify-between">
  <div>Item 1</div>
  <div>Item 2</div>
</div>