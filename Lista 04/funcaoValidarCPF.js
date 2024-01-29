function validarCPF(cpf) {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    // Verifica o comprimento do CPF
    if (cpf.length !== 11) {
        return false;
    }

    // Verifica se o CPF é uma sequência de números iguais
    if (/^(\d)\1+$/.test(cpf)) {
        return false;
    }

    return true;
}

var cpfExemplo = '123.456.789-09';
console.log(validarCPF(cpfExemplo));