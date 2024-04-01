const prompt = require('prompt-sync')();

function calcularSalarioVendedor() {
  const carrosVendidos = parseInt(prompt('Informe o número de carros vendidos: '));
  const valorVendas = parseFloat(prompt('Informe o valor total das vendas: '));
  const salarioFixo = parseFloat(prompt('Informe o salário fixo do vendedor: '));
  const comissaoPorCarro = parseFloat(prompt('Informe o valor da comissão por carro vendido: '));

  const comissaoVendas = 0.05 * valorVendas;
  const salarioFinal = salarioFixo + (carrosVendidos * comissaoPorCarro) + comissaoVendas;

  console.log(`Salário Final do Vendedor: R$ ${salarioFinal.toFixed(2)}`);
}

calcularSalarioVendedor();
