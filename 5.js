const prompt = require('prompt-sync')();

function calcularCustoCarro() {
  const custoFabrica = parseFloat(prompt('Insira o custo de fábrica do carro: '));
  const percentualDistribuidor = parseFloat(prompt('Insira a porcentagem do distribuidor (%): '));
  const percentualImpostos = parseFloat(prompt('Insira a porcentagem dos impostos (%): '));

  const custoDistribuidor = (percentualDistribuidor / 100) * custoFabrica;
  const custoImpostos = (percentualImpostos / 100) * custoFabrica;
  const custoFinal = custoFabrica + custoDistribuidor + custoImpostos;

  console.log(`Custo Final ao Consumidor: R$ ${custoFinal.toFixed(2)}`);
}

calcularCustoCarro();
