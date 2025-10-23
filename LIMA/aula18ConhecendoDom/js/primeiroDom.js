const corpo = document.body;
// const corpo = querySelector('.corpo');
const container = document.querySelector('.container');
const titulo  = document.getElementById('titulo');
const paragrafo = document.querySelector('[data-info="intro"]');

corpo.style.backgroundColor = "#d79595ff";
container.style.border = '2px solid black';
titulo.style.fontFamily = 'Arial';
titulo.style.fontSize = '48px';
titulo.style.color = 'white';
titulo.textContent += 'Dom';//adicionando conteúdo de texto
paragrafo.textContent += ' DOM';
paragrafo.style.color = '#9ab7deff';

