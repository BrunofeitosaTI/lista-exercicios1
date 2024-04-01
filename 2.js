const prompt = require('prompt-sync')();

function calcularPercentuais() {
  const totalEleitores = parseInt(prompt('Informe o total de eleitores: '));
  const votosBrancos = parseInt(prompt('Informe o número de votos brancos: '));
  const votosNulos = parseInt(prompt('Informe o número de votos nulos: '));
  const votosValidos = parseInt(prompt('Informe o número de votos válidos: '));

  const percentualBrancos = (votosBrancos / totalEleitores) * 100;
  const percentualNulos = (votosNulos / totalEleitores) * 100;
  const percentualValidos = (votosValidos / totalEleitores) * 100;

  console.log(`Percentual de votos brancos: ${percentualBrancos.toFixed(2)}%`);
  console.log(`Percentual de votos nulos: ${percentualNulos.toFixed(2)}%`);
  console.log(`Percentual de votos válidos: ${percentualValidos.toFixed(2)}%`);
}

calcularPercentuais();
