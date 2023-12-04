//produto feminino com 18 reais de desconto
function Produto(produto, preco, tamanho){
    this. produto = produto;
    let _preco = preco;
    this.tamanho = tamanho;

    this.getPreco= function(){
        return _preco;
    }

    this.calculaDesconto = function(){

        const novoPreco = this.getPreco() * 0.1;

_preco = novoPreco;
        return _preco;
    }
}

const produto_feminino = new Produto('kimono', 180, ["pp", "p", "m", "g", "gg"]);


console.log(Object.keys(produto_feminino));
console.log(Object.values(produto_feminino));

console.log(`O ${produto_feminino.produto} feminino está com R$: ${produto_feminino.calculaDesconto()} reais de desconto`); //15 reias de desconto

//produto masculino com 20 reais de desconto
function Produto_masculino(produto, preco, tamanho){

    Produto.call(this, produto, preco, tamanho);

    this.calculaDesconto = function(){

        const novoPreco = this.getPreco() * 0.2;

        _preco = novoPreco;
        return _preco;
    }
}

const produto2 = new Produto_masculino('camiseta',100,["pp", "p", "m", "g", "gg"]);

console.log(Object.keys(produto2));
console.log(Object.values(produto2));

console.log(`A ${produto2.produto} masculina está com R$: ${produto2.calculaDesconto()} reais de desconto`); //15 reias de desconto

//produto infantil com 100 reais de desconto

function Produto_infantil(produto, preco, tamanho){

    Produto.call(this, produto, preco, tamanho);

    this.calculaDesconto = function(){

        const novoPreco = this.getPreco() * 0.5;

        _preco = novoPreco;
        return _preco;
    }
}

const produto3 = new Produto_infantil('conjunto moleton',200,[4, 8, 12, 14, 16]);


console.log(Object.keys(produto3));
console.log(Object.values(produto3));

console.log(`A ${produto3.produto} infantil está com R$: ${produto3.calculaDesconto()} reais de desconto`); //20 reias de desconto