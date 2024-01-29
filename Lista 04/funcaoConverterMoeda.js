function converterMoeda(valor, moedaOrigem) {
    const taxas = {
        USD: 4.92, // 1 USD = 4.92 BRL
        EUR: 5.33, // 1 EUR = 5.33 BRL
        ARS: 0.060 // 1 ARS = 0.060 BRL
    };

    if (!taxas.hasOwnProperty(moedaOrigem)) {
        console.log("Moeda de origem inválida.");
        return null;
    }

    const valorConvertido = valor * taxas[moedaOrigem];
    return valorConvertido;
}

var valor = parseFloat(prompt("Informe o valor a ser convertido:"));
var moedaOrigem = prompt("Informe a moeda de origem (USD, EUR, ARS):").toUpperCase();

var valorConvertido = converterMoeda(valor, moedaOrigem);
if (valorConvertido !== null) {
    console.log(`O valor convertido para BRL é: ${valorConvertido.toFixed(2)} BRL`);
}