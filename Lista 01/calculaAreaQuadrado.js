var base = parseFloat(prompt("Informe a medida da base:"));
var altura = parseFloat(prompt("Informe a medida da altura:"));


// Verificar se a entrada é válida
if (isNaN(base) || isNaN(altura)) {
    console.log("Por favor, insira um valor numérico válido.");
} else {
    var areaQuadrado = base*altura;
    console.log("Área do quadrado informado: " + areaQuadrado);
}