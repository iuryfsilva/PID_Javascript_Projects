
export default class Pessoa {

    constructor(nome, idade, sexo){
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }

    mostrarDados(){
        console.log(`Nome: ${this.nome} 
        Idade: ${this.idade} 
        Sexo: ${this.sexo}`)
    }
}

