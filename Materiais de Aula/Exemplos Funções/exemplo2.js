/*
Crie um array chamado numeros contendo 100 números inteiros gerados aleatoriamente entre 0 e 200.
Utilize o método filter para filtrar apenas os números pares do array numeros.
Utilize o método map para mapear cada número do array filtrado, elevando-o ao quadrado.
Utilize o método reduce para somar todos os elementos do array mapeado, resultando em um único valor.
Imprima o array original, o array filtrado, o array mapeado e o resultado da redução.
*/

function retornaNumerosAleatorios(){
    return parseInt( Math.random() * 200 )
}

function addElementosNoArray(array,max){
    for(let i = 0; i < max; i++){
        array.push( retornaNumerosAleatorios())
    }
}

function retornaArrayDeNumerosPares(array){
    const arrayDeNumerosPares = []
    for( let i in array){
        if(array[i] % 2 == 0){
         arrayDeNumerosPares.push(array[i])
        }
    }

    return arrayDeNumerosPares
}

function retornaArrayElevadoAoQuadrado(array){

    const arrayElevadoAoQuadrado = []

    for(let i in array){

        arrayElevadoAoQuadrado.push( Math.pow(array[i], 2))

    }
    return arrayElevadoAoQuadrado
}

function somatorio(array){
    let total = 0
    for(let i in array){
       total += array[i]
    }
    return total
}


const numeros = []
let arrayDeNumerosPares = []
let arrayElevadoAoQuadrado = []
let valorTotal = 0

addElementosNoArray(numeros,200)

arrayDeNumerosPares = retornaArrayDeNumerosPares(numeros)
arrayElevadoAoQuadrado = retornaArrayElevadoAoQuadrado(arrayDeNumerosPares)
valorTotal = somatorio(arrayElevadoAoQuadrado)

console.log("Array original")
console.log(numeros)

console.log("Array filtrado")
console.log(arrayDeNumerosPares)

console.log("Array mapeado")
console.log(arrayElevadoAoQuadrado)

console.log(`O somatorio do array elevado ao quadrado: ${valorTotal}`)


