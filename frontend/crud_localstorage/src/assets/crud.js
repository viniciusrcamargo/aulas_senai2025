//Recuperando elementos do DOM
const formContribuinte = document.getElementById('form-contribuinte');
const nomeInput = document.getElementById('nome');
const enderecoInput = document.getElementById('endereco');
const cpfInput = document.getElementById('cpf');
const telefoneInput = document.getElementById('telefone');
const listContribuinte = document.getElementById('lista-contribuinte');

function saveContribuinte(contribuinte){
    const contribuintes = JSON.parse(localStorage.getItem('contribuintes')) || [];
    contribuintes.push(contribuinte);
    localStorage.setItem('contribuintes', JSON.stringify(contribuintes));
    loadContribuintes();
}







