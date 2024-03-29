// o que e Promises ?
// R: E uma promessa que pode ser aceita ou rejeitada


// 1. vamos fazer uma simulação
// 1.1 Criar uma função que retorna um objeto cliente
// 1.2 Armazenar no nosso "banco de dados externo"
// 1.3 Realizar uma busca no nosso bando de dados externo e retornar um cliente
// 1.4 verificar se o pagamento do cliente foi aprovado 


function retornaObjetoCliente(nome, idade, cpf , nomeProduto, valorProduto, statusDoPagamento){
    return {
        nome: nome,
        idade: idade,
        cpf: cpf,
        compra: {
            nome: nomeProduto,
            valor: valorProduto,
            status: "Em analise",
            pagamento: {
                status: statusDoPagamento
            }

        }
    }
}


const primeiroCliente = retornaObjetoCliente("Bruno", 24, "0000", "xbox", 2000, "Aprovado")

const segundoCliente = retornaObjetoCliente("Pedro", 20, "1111", "carro", 5000, "Aprovado")

const bancoDeDadosExterno = []

bancoDeDadosExterno.push(primeiroCliente, segundoCliente)


function buscaCliente( nome, bancoDeDados) {
    return new Promise((aceita, rejeitada)=>{

       const cliente = bancoDeDados.find((obj) => obj.nome === nome)

       if(cliente){
        return aceita(cliente)
       }else{
        rejeitada(`Cliente ${nome} não foi encontrado`)
       }

    })
}


 async function verificarPagamento(nome, bancoDeDados){

  const cliente = await buscaCliente(nome, bancoDeDados)

  if(cliente.compra.pagamento.status === "Aprovado"){
    cliente.compra.status = "Estamos enviando a sua encomenda"
  }

  
  return cliente


}

async function imprimirCliente(){
  const cliente = await verificarPagamento("Bruno", bancoDeDadosExterno)
  console.log(cliente)
}


imprimirCliente()

