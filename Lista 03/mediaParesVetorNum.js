// Definir um vetor de números
var numeros = [5, 8, 2, 14, 7, 1, 9, 3, 12, 6];

// Inicializar variáveis para a soma e a contagem dos números pares
var somaPares = 0;
var countPares = 0;

// Iterar sobre o vetor para encontrar os números pares e calcular a soma
for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // Verificar se é par
        somaPares += numeros[i];
        countPares++;
    }
}

// Calcular a média dos números pares
var mediaPares = countPares > 0 ? somaPares / countPares : 0;

// Imprimir os resultados
console.log("Vetor de números: " + numeros);
console.log("Média dos números pares: " + mediaPares.toFixed(2));
