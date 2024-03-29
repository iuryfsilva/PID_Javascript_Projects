
// Classes = são modelos de objetos 
// Objeto = e uma instancia da Classe // um tipo de dados
// Atributos  = variaveis
// Metodos = funções 


class Aluno  {

 constructor(nome, idade, curso, arrayDeNotas){
    this._nome = nome
    this._idade = idade
    this._curso = curso
    this._notas = arrayDeNotas
    this._media = 0
    this._status = ''
 }

   calcularMedia(){

    let soma = 0
    let media = 0

    for( let i in this._notas){
       soma += this._notas[i]
    }
    media = soma / this._notas.length
 
    this._media = media
 }

 verificarAprovacao(){
    if(this._media > 40){
        this._status = 'Aprovado'
    }else{
        this._status = 'Reprovado'
    }
 }

}

const aluno1 = new Aluno('Bruno', 25, 'Sistema de informação', [10,50,90,80])
const aluno2 = new Aluno('Pedro', 30, 'Engenharia eletrica', [10,30,20])
const aluno3 = new Aluno('Mariana', 23, 'Engenharia de produção', [60,70])
const aluno4 = new Aluno('Breno', 18, 'Engenharia de computação', [20,25,27])
const aluno5 = new Aluno('Rachel', 23, 'Serviço social', [34,35])

aluno1.calcularMedia()
aluno1.verificarAprovacao()

aluno2.calcularMedia()
aluno2.verificarAprovacao()

aluno3.calcularMedia()
aluno3.verificarAprovacao()

aluno4.calcularMedia()
aluno4.verificarAprovacao()

aluno5.calcularMedia()
aluno5.verificarAprovacao()

const arrayDeAlunos = []
arrayDeAlunos.push(aluno1, aluno2, aluno3, aluno4, aluno5)


/*
const arrayDeAlunosAprovados =  arrayDeAlunos.filter((objeto)=> objeto._status === 'Aprovado')
console.log('array filtrado')
console.log(arrayDeAlunosAprovados)
*/

/*
const arrayDeAlunosAprovados = []
for(let i in arrayDeAlunos){
    if(arrayDeAlunos[i]._status === 'Aprovado'){
        arrayDeAlunosAprovados.push(arrayDeAlunos[i])
    }
}
console.log(arrayDeAlunosAprovados)
*/

const arrayDeAlunosAprovados = []

for(const alunos of arrayDeAlunos){

    const { _status } = alunos

    if( _status === 'Aprovado'){
       arrayDeAlunosAprovados.push(alunos)
    }

}

//console.log(arrayDeAlunosAprovados)

arrayDeAlunos.map((objeto) => objeto._periodo = 0)

arrayDeAlunos.map((objeto) =>{
    if(objeto._nome === 'Pedro'){
        objeto._periodo = 5
    }
})

console.log(arrayDeAlunos)


let alunosReprovados = quantidadeDeAlunosReprovados(arrayDeAlunos)

console.log(`A quantidade de alunos reprovados: ${alunosReprovados}`)
console.log(`A quantidade de alunos aprovados: ${arrayDeAlunosAprovados.length}`)

function quantidadeDeAlunosReprovados(array){

    let alunosReprovados = 0
    for(let i in array){
        if(array[i]._status === 'Reprovado'){
            alunosReprovados++

        }
    }

    return alunosReprovados

}

const totalDeAlunosReprovados =  arrayDeAlunos.reduce((total, objeto)=>{
    if(objeto._status === 'Reprovado'){
        total++
    }
    return total
},0)

console.log(`Alunos reprovados utilizando Reduce: ${totalDeAlunosReprovados}`)