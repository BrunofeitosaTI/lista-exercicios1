const prompt = require('prompt-sync')();

const numero1 = parseFloat(prompt('Insira o primeiro número: '));
const numero2 = parseFloat(prompt('Insira o segundo número: '));

const soma = numero1 + numero2;
const multiplicacao = soma * numero1;

console.log(`Soma dos Números: ${soma}`);
console.log(`Multiplicação pelo Primeiro Número: ${multiplicacao}`);
