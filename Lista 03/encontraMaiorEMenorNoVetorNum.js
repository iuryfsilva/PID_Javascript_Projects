// Definir um vetor de números
var numeros = [5, 8, 2, 14, 7, 1, 9, 3, 12, 6];

// Inicializar as variáveis de controle
var maiorNumero = numeros[0];
var menorNumero = numeros[0];

// Iterar sobre o vetor para encontrar o maior e o menor número
for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }

    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

// Imprimir os resultados
console.log("Vetor de números: " + numeros);
console.log("Maior número: " + maiorNumero);
console.log("Menor número: " + menorNumero);
