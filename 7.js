const prompt = require('prompt-sync')();

function calcularMediaAluno() {
  const nota1 = parseFloat(prompt('Insira a nota da primeira prova: '));
  const nota2 = parseFloat(prompt('Insira a nota da segunda prova: '));

  const media = ((nota1 * 4) + (nota2 * 6)) / 10;

  console.log(`Média Final: ${media.toFixed(2)}`);
}

calcularMediaAluno();
