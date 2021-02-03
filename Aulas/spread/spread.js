// spred é utilizado para concatenar obj ou array a um outro, utilizando o ...
let primeiros = [1,2,3]

console.log(primeiros)

let numeros = [...primeiros,4,5,6]
console.log(numeros)

let pessoa = {
    nome: "Alex",
    idade: 37,
    cargo: "Programador"
}
console.log(pessoa);

let novaPessoa = {
    ...pessoa,
    anoAtual: 2021,
    cidade:"São Paulo"
}
console.log(novaPessoa);

function cadastroPessoa(info){
    let novosDados = {
        ...info,
        cargo: "Programador",
        status: 1,
        codigo: '654423'
    };
    return novosDados;
}
console.log(cadastroPessoa({nome: "jorge", sobrenome: "G", idade: 11}))