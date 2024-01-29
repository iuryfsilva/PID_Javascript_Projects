// Definir um vetor de temperaturas para uma semana (em graus Celsius)
var temperaturas = [25, 28, 22, 30, 26, 29, 31];

// Calcular a média das temperaturas
var somaTemperaturas = 0;
for (var i = 0; i < temperaturas.length; i++) {
    somaTemperaturas += temperaturas[i];
}

var mediaTemperaturas = somaTemperaturas / temperaturas.length;

// Determinar em quantos dias a temperatura esteve acima da média
var diasAcimaMedia = 0;
for (var i = 0; i < temperaturas.length; i++) {
    if (temperaturas[i] > mediaTemperaturas) {
        diasAcimaMedia++;
    }
}

// Imprimir os resultados
console.log("Temperaturas registradas durante a semana: " + temperaturas);
console.log("Média das temperaturas: " + mediaTemperaturas.toFixed(2) + "°C");
console.log("Dias em que a temperatura esteve acima da média: " + diasAcimaMedia);
