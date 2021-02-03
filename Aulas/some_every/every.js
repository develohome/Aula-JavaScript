// o comando every verifica se todas as condições são satisfatória se for ele retorna um boolean true 

let nomes = [
    {nome: 'alex', idade: 37},
    {nome: 'jorge', idade: 11},
    {nome: 'gabi', idade: 7}
]
console.log(nomes.every(nome => nome.idade >= 10));