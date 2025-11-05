const container = document.querySelector('.container')
container.style.backgroundColor = '#f99632ff';

const titulo = document.getElementById('titulo');
titulo.style.fontSize = '28px';
titulo.style.color = '#fff';
titulo.textContent = 'Manipulando o HTML via Javascript';

const paragrafo = '<p>Eu sei acrescentar elementos via javascript, isso me torna super poderoso!</p>';
container.innerHTML += paragrafo;


