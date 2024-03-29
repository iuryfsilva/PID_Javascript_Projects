class Produto {
    constructor(codigo, nome, preco, quantidadeEmEstoque) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEmEstoque = quantidadeEmEstoque;
    }

    exibirDadosProduto() {
        console.log("Código: " + this.codigo);
        console.log("Nome: " + this.nome);
        console.log("Preço: R$ " + this.preco.toFixed(2));
        console.log("Quantidade em Estoque: " + this.quantidadeEmEstoque);
    }
}

class CarrinhoDeCompras {
    constructor() {
        this.carrinhoDeCompras = [];
    }

    adicionarProdutoNoCarrinho(produto) {
        this.carrinhoDeCompras.push(produto);
        console.log(`O produto '${produto.nome}' foi adicionado ao carrinho.`);
    }

    comprarProduto(nome, quantidade) {
        const produto = this.carrinhoDeCompras.find(item => item.nome === nome);
        if (!produto) {
            console.log(`O produto '${nome}' não foi encontrado no carrinho.`);
            return 0;
        }

        if (quantidade > produto.quantidadeEmEstoque) {
            console.log(`Quantidade indisponível para o produto '${nome}'.`);
            return 0;
        }

        produto.quantidadeEmEstoque -= quantidade;
        const precoTotal = produto.preco * quantidade;
        console.log(`Compra do produto '${nome}' realizada com sucesso. Preço total: R$ ${precoTotal.toFixed(2)}`);
        return precoTotal;
    }

    pesquisarProdutoNoCarrinho(nome) {
        const produto = this.carrinhoDeCompras.find(item => item.nome === nome);
        if (produto) {
            console.log("Detalhes do produto:");
            produto.exibirDadosProduto();
        } else {
            console.log(`O produto '${nome}' não foi encontrado no carrinho.`);
        }
    }

    exibirProdutosNoCarrinhoDeCompras() {
        console.log("Produtos no carrinho:");
        this.carrinhoDeCompras.forEach(produto => {
            produto.exibirDadosProduto();
            console.log("----------------------");
        });
    }

    excluirProdutoDoCarrinhoDeCompras(nome) {
        const indice = this.carrinhoDeCompras.findIndex(item => item.nome === nome);
        if (indice !== -1) {
            this.carrinhoDeCompras.splice(indice, 1);
            console.log(`O produto '${nome}' foi removido do carrinho.`);
        } else {
            console.log(`O produto '${nome}' não foi encontrado no carrinho.`);
        }
    }

    exibirQuantidadeDeProdutosNoCarrinho() {
        const quantidade = this.carrinhoDeCompras.length;
        console.log(`Quantidade total de produtos no carrinho: ${quantidade}`);
    }

    calcularTotalDoCarrinho() {
        let total = 0;
        this.carrinhoDeCompras.forEach(produto => {
            total += produto.preco * produto.quantidadeEmEstoque;
        });
        console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
        return total;
    }
}

const carrinho = new CarrinhoDeCompras();
const produto1 = new Produto(1, "Camiseta", 29.99, 10);
const produto2 = new Produto(2, "Calça", 59.99, 5);

carrinho.adicionarProdutoNoCarrinho(produto1);
carrinho.adicionarProdutoNoCarrinho(produto2);

carrinho.exibirProdutosNoCarrinhoDeCompras();
carrinho.exibirQuantidadeDeProdutosNoCarrinho();

carrinho.comprarProduto("Camiseta", 3);
carrinho.exibirQuantidadeDeProdutosNoCarrinho();

carrinho.pesquisarProdutoNoCarrinho("Calça");

carrinho.excluirProdutoDoCarrinhoDeCompras("Camiseta");
carrinho.exibirProdutosNoCarrinhoDeCompras();

carrinho.calcularTotalDoCarrinho();
