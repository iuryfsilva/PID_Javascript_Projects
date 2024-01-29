// arrow function  => Funções anonimas

/*
function multiplicaValor (numero){
    return numero * 2
}
*/

const multiplicaValor = (numero,valor) => {
    if(valor < 0){
        return 'Dados são invalidos'
    }else{
        return numero * valor
    }
}
const resultado = multiplicaValor( 10, -1)

console.log(resultado)