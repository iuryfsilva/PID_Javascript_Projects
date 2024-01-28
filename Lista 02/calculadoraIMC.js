var peso = parseFloat(prompt("Informe o seu peso em quilogramas:")),
    altura = parseFloat(prompt("Informe a sua altura em metros:")),
    imc = peso / (altura * altura),
    faixaIMC;

if (imc < 18.5) {
    faixaIMC = "Abaixo do peso";
} else if (imc >= 18.5 && imc <= 24.9) {
    faixaIMC = "Peso normal";
} else if (imc >= 25 && imc <= 29.9) {
    faixaIMC = "Sobrepeso";
} else if (imc >= 30 && imc <= 34.9) {
    faixaIMC = "Obesidade grau 1";
} else if (imc >= 35 && imc <= 39.9) {
    faixaIMC = "Obesidade grau 2";
} else {
    faixaIMC = "Obesidade grau 3";
}

console.log("Seu IMC é: " + imc.toFixed(2));//Exibe somente duas casa decimais
console.log("Você está na faixa: " + faixaIMC);