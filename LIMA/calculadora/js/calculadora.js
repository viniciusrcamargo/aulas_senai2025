const numero1 = document.getElementById('num1');
const numero2 = document.getElementById('num2');
const resultado = document.getElementById('result');

function Somar(){
    resultado.textContent = Number(numero1.value) + Number(numero2.value);
}
function Subtrair(){
    resultado.textContent = Number(numero1.value) - Number(numero2.value);
}
function Mult(){
    resultado.textContent = Number(numero1.value) * Number(numero2.value);
}
function Dividir(){
    resultado.textContent = Number(numero1.value) / Number(numero2.value);
}

function Limpar(){
    numero1.value = "";
    numero2.value = "";
    resultado.innerHTML = "";
}
