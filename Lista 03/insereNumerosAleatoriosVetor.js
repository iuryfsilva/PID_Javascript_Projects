// Função para gerar números aleatórios inteiros entre min (inclusive) e max (exclusive)
function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Criação do vetor de 50 posições com números aleatórios
var vetorOriginal = [];
for (var i = 0; i < 50; i++) {
    var numeroAleatorio;
    do {
        numeroAleatorio = gerarNumeroAleatorio(1, 101); // Números entre 1 e 100
    } while (vetorOriginal.includes(numeroAleatorio)); // Verifica se o número já está presente

    vetorOriginal.push(numeroAleatorio);
}

// Imprimir o vetor original
console.log("Vetor Original: " + vetorOriginal);

// Contagem de tentativas falhas de inserção
var tentativasFalhas = 0;

// Criação do novo vetor contendo números ímpares
var vetorImpares = [];
var somatorioImpares = 0;

// Preenchimento do novo vetor e somatório dos números ímpares
for (var i = 0; i < vetorOriginal.length; i++) {
    if (vetorOriginal[i] % 2 !== 0) {
        vetorImpares.push(vetorOriginal[i]);
        somatorioImpares += vetorOriginal[i];
    }
}

// Imprimir o novo vetor e o somatório dos números ímpares
console.log("Vetor de Números Ímpares: " + vetorImpares);
console.log("Somatório dos Números Ímpares: " + somatorioImpares);

// Imprimir quantas vezes não foi possível inserir números no vetor
console.log("Tentativas falhas de inserção: " + tentativasFalhas);
