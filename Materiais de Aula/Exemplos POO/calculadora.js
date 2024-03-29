
// Metodos estaticos 
// Metodos de instancia 

class Calculadora {

    soma(numero1, numero2){
        return numero1 + numero2
    }

   static divisao(numero1, numero2){
        return numero1 / numero2
    }
}

const c1 = new Calculadora()
const resultadoDaSoma = c1.soma(4,8)

const resultado = Calculadora.divisao(8, 3)

const numeroAleatorio = Math.random()

console.log(numeroAleatorio)