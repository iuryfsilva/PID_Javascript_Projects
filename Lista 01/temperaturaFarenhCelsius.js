var temperaturaFahrenheit = parseFloat(prompt("Informe a temperatura em Fahrenheit:"));

// Verificar se a entrada é válida
if (isNaN(temperaturaFahrenheit)) {
    console.log("Por favor, insira um valor numérico válido.");
} else {
    var  temperaturaCelsius = (temperaturaFahrenheit - 32) / 1.8;
    console.log("A temperatura em graus celcius eh: " + temperaturaCelsius);
}
