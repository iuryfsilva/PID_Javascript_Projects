// Funções são blocos de códigos reutilizáveis
// Objetivo ?
// Evitar repetição de codigo
// Melhorar a manutenção do codigo ( Menos linhas de codigos)

function somarDoisNumeros(numero1, numero2) {
  if (typeof numero1 === "number" && typeof numero2 === "number") {
    let soma = numero1 + numero2;
    return soma;
  } else {
    return "Dados invalidos encontrados";
  }
}

function imprimirResultado(resultado) {
  console.log(`O valor do resultado: ${resultado}`);
}

function numeroAletorio(valor) {
  return Math.floor(Math.random() * valor);
}

function statusAluno(nota1 = 0, nota2 = 0){
    const media = calcularMedia(nota1, nota2)
    if(media >= 60){
        return 'Aprovado'
    }else{
        return 'Reprovado'
    }
}

function calcularMedia( nota1, nota2){
    return (nota1 + nota2) / 2
}

const resultado = somarDoisNumeros(2, "bruno");
imprimirResultado(resultado);
const segundoResultado = somarDoisNumeros(3, true);
imprimirResultado(segundoResultado);

const numero = numeroAletorio(10);
console.log(`O numero aleatorio gerado foi: ${numero}`);

const situacao = statusAluno(60, 90)
console.log(situacao)
