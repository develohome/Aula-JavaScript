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