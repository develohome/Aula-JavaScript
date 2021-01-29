var nome = "Alex";
var aux;
console.log(nome);
console.log(nome.length); // números de caracteres
console.log(nome[0]); // retorna o valor na posição 0 que é a letra A
console.log(nome.indexOf("l")) // procura a letra indicada e retorna sua posição
console.log(nome.charAt(2)) // retorna o valor na posição 2 que é a letra e
console.log(nome.charCodeAt(0)) // retorna o valor A na tabela ascii
console.log(nome.slice(1,3))
console.log(nome.slice(1,(parseInt(nome.length) - 1)))
console.log(nome.substr(1, 4));