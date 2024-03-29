// Oque e uma API ?
// R: Interface de programação de aplicação
// Resumindo o seu objetivo e a troca de dados entre sistemas 

// Oque o Axios ?
// R: Biblioteca para envio e coleta dos dados atraves de solicitações HTTP

// Solicitações HTTP 
// GET = Solicitando um dado
// PUT = Editando um dado
// POST = Salvando um dado
// DELETE = Excluindo um dado


import axios from "axios"
import promptSync from "prompt-sync"

const input  = promptSync()


async function chamadaDaAPI(cep){

    if( cep.length != 9){
        console.log(`${cep} e invalido`)
    }else{
        try{

            const resposta = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`)
            console.log(resposta.data)
    
        }catch(erro){
            console.log(`Houve um erro ao relizar a requição do cep ${cep}`)
            console.log(`Cep: ${cep} não existe`)
            
        }

    }
   
}

console.log(`São 5 numeros a esquerda + - + 3 numeros a direita`)
const cep = input("Digite seu cep: ")

chamadaDaAPI(cep)


