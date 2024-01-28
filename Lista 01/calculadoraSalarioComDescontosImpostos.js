var salarioPorHora = parseFloat(prompt("Informe o salário por hora:"));
var horasTrabalhadas = parseFloat(prompt("Informe o número de horas trabalhadas no mês:"));

var salarioBruto = salarioPorHora * horasTrabalhadas;

var descontoINSS = salarioBruto * 0.1; // 10% para o INSS
var descontoSindicato = salarioBruto * 0.02; // 2% para o sindicato
var descontoIR = salarioBruto * 0.15; // 15% para o Imposto de Renda

var salarioLiquido = salarioBruto - descontoINSS - descontoSindicato - descontoIR;

console.log("Salário Bruto: R$ " + salarioBruto.toFixed(2));
console.log("Desconto INSS: R$ " + descontoINSS.toFixed(2));
console.log("Desconto Sindicato: R$ " + descontoSindicato.toFixed(2));
console.log("Desconto Imposto de Renda: R$ " + descontoIR.toFixed(2));
console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2));