var num = [40, 1, 76, 44, 37, 47, 11, 7];
var aux;

console.log(`Valor original do Array ${num}`);
aux = num[0];

// o comando shift exclui o valor da posição 0
num.shift();
console.log(`O valor da posição 0 que é igual a 40 foi excluido ${num}`)

// o comando pop exclui o valor da última posição
num.pop();
console.log(`O valor da última posição que é igual a 7 foi excluido ${num}`)

num.push(aux)
console.log(`O valor da posição 0 que inicialmente era igual a 40 foi adicionado na última posição ${num}`)