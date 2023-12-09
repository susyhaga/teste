// • Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

// • Crie uma branch exercicio_es6 no repositório do curso, armazene o código nesta branch e nos envie o link através da plataforma. 

class Alunos {
    constructor(nomeDoAluno, notaDoAluno){
        this.nome = nomeDoAluno;
        this.nota = notaDoAluno;
    }
}

const alunos = ['Susy Haga', 'Italo Unhaiser','Geleia Haga','Maria Francisca','George Haga'];
const notas = [ 2, 10, 8, 5, 3];

const nomesComNotas = alunos.map(function (nomeAtual) {
  //objeto literal
    return {
    nome: nomeAtual,
    nota: notas[
        alunos.findIndex(function (item) {
        //predicado
        return item == nomeAtual;
    })]

    }
});
console.log(nomesComNotas);

const apenasAlunosComNotaMaiorQue6 = nomesComNotas.filter(function (item) {
    return item.nota >= 6;
});

console.log(apenasAlunosComNotaMaiorQue6);