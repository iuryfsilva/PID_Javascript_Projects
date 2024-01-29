function filtrarNumerosPositivos(vetor) {
    var numerosPositivos = vetor.filter(
        function(numero) {
            return numero > 0;
        }
    );

    return numerosPositivos;
}

var vetorOriginal = [1, -2, 5, -7, 0, 10, -3, 8];
var vetorPositivo = filtrarNumerosPositivos(vetorOriginal);

console.log("Vetor Original: " + vetorOriginal);
console.log("Vetor Apenas com Números Positivos: " + vetorPositivo);
