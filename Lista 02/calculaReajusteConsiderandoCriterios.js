var salarioAtual = parseFloat(prompt("Informe o salário atual do colaborador:")),
    faixa1 = 280.00,
    faixa2 = 700.00,
    faixa3 = 1500.00,
    aumento;

if (salarioAtual <= faixa1) {
    aumento = salarioAtual * 0.2;
} else if (salarioAtual > faixa1 && salarioAtual <= faixa2) {
    aumento = salarioAtual * 0.15;
} else if (salarioAtual > faixa2 && salarioAtual <= faixa3) {
    aumento = salarioAtual * 0.1;
} else {
    aumento = salarioAtual * 0.05;
}

var novoSalario = salarioAtual + aumento;

console.log("Salário antes do reajuste: R$ " + salarioAtual.toFixed(2));//Exibe somente duas casa decimais
console.log("Valor do aumento: R$ " + aumento.toFixed(2));//Exibe somente duas casa decimais
console.log("Novo salário após o reajuste: R$ " + novoSalario.toFixed(2));//Exibe somente duas casa decimais