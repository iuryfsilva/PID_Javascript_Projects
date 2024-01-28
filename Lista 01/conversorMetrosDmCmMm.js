function converterMedidas(metros) {
    let decimetros = metros * 10,
        centimetros = metros * 100,
        milimetros = metros * 1000;

    console.log(metros + " metros é igual a:");
    console.log(decimetros + " decímetros");
    console.log(centimetros + " centímetros");
    console.log(milimetros + " milímetros");
}

var metros = parseFloat(prompt("Informe a quantidade de metros:"));

// Verificar se a entrada é válida
if (isNaN(metros)) {
    console.log("Por favor, insira um valor numérico válido.");
} else {
    converterMedidas(metros);
}
