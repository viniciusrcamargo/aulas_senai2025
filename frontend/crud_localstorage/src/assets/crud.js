//Recuperando elementos do DOM
const formContribuinte = document.getElementById('form-contribuinte');
const nomeInput = document.getElementById('nome');
const enderecoInput = document.getElementById('endereco');
const cpfInput = document.getElementById('cpf');
const telefoneInput = document.getElementById('telefone');
const listaContribuinte = document.getElementById('lista-contribuinte');

//salvando no localstorage
function saveContribuinte(contribuinte){
    const contribuintes = JSON.parse(localStorage.getItem('contribuintes')) || [];
    contribuintes.push(contribuinte);
    localStorage.setItem('contribuintes', JSON.stringify(contribuintes));
    loadContribuintes();
}

function loadContribuintes() {
    const contribuintes = JSON.parse(localStorage.getItem('contribuintes')) || [];
    listaContribuinte.innerHTML = '';
    contribuintes.forEach((contribuinte, index) => {
      addContribuinteToDOM(contribuinte, index);
    });
}

// Função para adicionar contribuinte ao DOM
function addContribuinteToDOM(contribuinte, index) {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>Nome:</strong> ${contribuinte.nome} <br>
      <strong>Endereço:</strong> ${contribuinte.endereco} <br>
      <strong>CPF:</strong> ${contribuinte.cpf} <br>
      <strong>Telefone:</strong> ${contribuinte.telefone} <br>
      <div>
        <button onclick="editContribuinte(${index})">Editar</button>
        <button onclick="deleteContribuinte(${index})">Excluir</button>
      </div>
    ;
    listaContribuinte.appendChild(li);
  }
  









