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

const numeros = []

addElementosNoArray(numeros,200)

const arrayDeNumerosPares = numeros.filter( valor => valor % 2 == 0 )

const arrayElevadoAoQuadrado = arrayDeNumerosPares.map(valor =>Math.pow(valor,2))

const somatorio = arrayElevadoAoQuadrado.reduce((total,valor)=>total += valor ,0)

console.log("Array original")
console.log(numeros)

console.log("Array filtrado")
console.log(arrayDeNumerosPares)

console.log("Array de numeros mapeados")
console.log(arrayElevadoAoQuadrado)

console.log(`O valor do somatorio do array elevado ao quadrado ${somatorio}`)