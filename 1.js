const prompt = require('prompt-sync')();

function calcularMedia() {
  const nota1 = parseFloat(prompt('Insira a nota da primeira prova: '));
  const nota2 = parseFloat(prompt('Insira a nota da segunda prova: '));
  const nota3 = parseFloat(prompt('Insira a nota do trabalho: '));
  const nota4 = parseFloat(prompt('Insira a nota do projeto final: '));

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  if (media >= 7.0) {
    console.log(`Média: ${media.toFixed(2)} - Aprovado!`);
  } else {
    console.log(`Média: ${media.toFixed(2)} - Reprovado!`);
  }
}
calcularMedia();
