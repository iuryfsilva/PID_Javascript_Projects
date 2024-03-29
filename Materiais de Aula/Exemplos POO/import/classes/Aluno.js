
export default class Aluno {
    constructor(nome, matricula, curso){
        this.nome = nome
        this.matricula = matricula
        this.curso = curso
    }

    mostrarDadosAluno(){
        console.log(`Nome: ${this.nome} 
        Matricula : ${this.matricula}
        Curso: ${this.curso}` )
    }
}