function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 101);
}

function imprimirSucessorAntecessor(numero) {
    var antecessor = numero - 1;
    var sucessor = numero + 1;

    console.log("Número aleatório: " + numero);
    console.log("Antecessor: " + antecessor);
    console.log("Sucessor: " + sucessor);
}

var numeroAleatorio = gerarNumeroAleatorio();

imprimirSucessorAntecessor(numeroAleatorio);
