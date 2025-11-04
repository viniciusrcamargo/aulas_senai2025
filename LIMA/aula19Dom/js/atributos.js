const imagem = document.getElementById('bolo');

const input = document.querySelector('.campoTexto')

imagem.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/11/22/18/52/cake-1850011_1280.jpg');
imagem.setAttribute('alt', 'imagem de bolo');

// alert(imagem.getAttribute('src'))

input.setAttribute('placeholder', 'Digite seu nome');
imagem.classList.add("esconder")