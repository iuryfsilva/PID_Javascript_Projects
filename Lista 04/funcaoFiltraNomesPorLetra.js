function filtrarNomesPorLetra(vetorNomes, letra) {
    // Filtra apenas os nomes que contêm a letra
    var nomesFiltrados = vetorNomes.filter(
        function(nome) {
            return nome.toLowerCase().includes(letra.toLowerCase());
        }
    );

    return nomesFiltrados;
}

var nomes = ["Alice", "Bob", "Charlie", "David", "Eva"];
var letraProcurada = "a";
var nomesFiltrados = filtrarNomesPorLetra(nomes, letraProcurada);

console.log("Vetor Original de Nomes: " + nomes);
console.log("Nomes que Contêm a Letra '" + letraProcurada + "': " + nomesFiltrados);
