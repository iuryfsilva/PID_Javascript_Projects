
const pessoa = {
    
    nome: 'Bruno',
    sobrenome: 'Dias',
    idade: 24,
    curso: 'Sistema de informação',
    notas: [],
    status: '',

   mostrarNomeCompleto(){
        console.log(`O nome completo e ${this.nome} ${this.sobrenome}`)
    },

    incrementaIdade(){
        this.idade++
    },

    adicionarNotasNoArray(){
        for(let i = 0 ; i < 10 ; i++){
            this.notas.push(i)
        }
    },

    calcularAMediaDasNotas(){
        let soma = 0
        let media = 0

        /*
        for(let i in this.notas){
            soma += this.notas[i]
        }
        */
       
        soma = this.notas.reduce((total, valor) => total += valor, 0)

        media = soma / this.notas.length
        console.log(`O valor da media ${media}`)
        if(media > 4){
            this.status = 'Aprovado'
        }else{
            this.status = 'Reprovado'
        }
    }

   
}

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.curso)
console.log(pessoa.notas)

pessoa.mostrarNomeCompleto()
pessoa.incrementaIdade()
pessoa.incrementaIdade()
pessoa.incrementaIdade()

pessoa.adicionarNotasNoArray()
pessoa.calcularAMediaDasNotas()
console.log(pessoa.status)

const novaPessoa = pessoa

console.log(novaPessoa)