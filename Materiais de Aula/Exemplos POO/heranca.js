
// Herança com Classes

// Classe Pai
class ContaBancaria {

    constructor( tipoConta, nome, numeroDaConta, saldo){
        this._tipoDaConta = tipoConta
        this._nomeDoBanco = nome
        this._numeroDaConta = numeroDaConta 
        this._saldoInicial = saldo
    }

    depositar(valor){

        console.log(`Valor depositado com sucesso: ${valor}`)
        this._saldoInicial += valor

    }

    retirar(valor){
        if( valor <= this._saldoInicial){
            console.log(`Saque do valor ${valor} realizado com sucesso`)
            this._saldoInicial -= valor
        }else{
            console.log(`Saque do valor de ${valor} nao foi possivel pois o seu saldo e ${this._saldoInicial}`)
        }
    }

    exibirInformacoesDaconta(){
        console.log(`
        Numero da conta: ${this._numeroDaConta}
        Nome do banco: ${this._nomeDoBanco}
        Tipo da conta: ${this._tipoDaConta}
        Saldo: ${this._saldoInicial}
        `)
    }
  

}


// Classe filha
class Pessoa  extends  ContaBancaria {

    constructor( nome, idade, cpf, tipoConta, nomeBanco, numeroDaConta, saldo){
        super(tipoConta,nomeBanco,numeroDaConta,saldo)
        this._nome = nome
        this._idade = idade
        this._cpf = cpf
    }

    exibirInformacoes(){
        console.log(`
        Nome: ${this._nome}
        Idade: ${this._idade}
        CPF: ${this._cpf}`)
    }
}

const pessoa1  = new Pessoa('Bruno', 24, '13453', 'Pessoa Fisica', 'Caixa', 12345, 20000)
pessoa1.exibirInformacoes()
pessoa1.depositar(1000)
pessoa1.retirar(22000)
pessoa1.exibirInformacoesDaconta()