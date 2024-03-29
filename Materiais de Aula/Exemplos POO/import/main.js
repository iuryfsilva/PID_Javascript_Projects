import {nome as nome2, sobrenome as sobrenome2} from './modulo1.js'
import * as calculadora from './funcoes.js'
import Pessoa from './classes/Pessoa.js'
import Aluno from './classes/Aluno.js'

console.log(nome2)
console.log(sobrenome2)

console.log( calculadora.soma(4,9) )

console.log( calculadora.divisao( 10, 2))

console.log( calculadora.multiplicacao(4,3))

console.log( calculadora.subtracao(10,5)) 

const p1 = new Pessoa('Bruno', 24, 'M')
p1.mostrarDados()

const p2 = new Pessoa('Pedro', 20, 'M')
p2.mostrarDados()

const aluno1 = new Aluno('Jose', '20-2-2222', 'Sistemas de informação')
aluno1.mostrarDadosAluno()