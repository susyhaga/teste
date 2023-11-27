//produto feminino com 18 reais de desconto
function Produto_feminino(categoria, preco, tamanho){
    this. categoria = categoria;
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

const produto1 = new Produto_feminino('kimono', 180, ["pp", "p", "m", "g", "gg"]);


console.log(Object.keys(produto1));
console.log(Object.values(produto1));

console.log(`O ${produto1.categoria} feminino está com R$: ${produto1.calculaDesconto()} reais de desconto`); //15 reias de desconto

//produto masculino com 20 reais de desconto
function Produto_masculino(categoria, preco, tamanho){

    Produto_feminino.call(this, categoria, preco, tamanho);

    this.calculaDesconto = function(){

        const novoPreco = this.getPreco() * 0.2;

        _preco = novoPreco;
        return _preco;
    }
}

const produto2 = new Produto_masculino('camiseta',100,["pp", "p", "m", "g", "gg"]);

console.log(Object.keys(produto2));
console.log(Object.values(produto2));

console.log(`A ${produto2.categoria} masculina está com R$: ${produto2.calculaDesconto()} reais de desconto`); //15 reias de desconto

//produto infantil com 100 reais de desconto

function Produto_infantil(categoria, preco, tamanho){

    Produto_feminino.call(this, categoria, preco, tamanho);

    this.calculaDesconto = function(){

        const novoPreco = this.getPreco() * 0.5;

        _preco = novoPreco;
        return _preco;
    }
}

const produto3 = new Produto_infantil('Conjunto moleton',200,[4, 8, 12, 14, 16]);


console.log(Object.keys(produto3));
console.log(Object.values(produto3));

console.log(`A ${produto3.categoria} infantil está com R$: ${produto3.calculaDesconto()} reais de desconto`); //20 reias de desconto