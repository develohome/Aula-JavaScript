// Criando um Array com nomes
var idade = [
    18,
    32,
    37,
    47,
    11,
    7
];
// Modelo 1

var idadeFilter = idade.filter(function(idades){
    if(idades >18){
        return true
    }else{
        return false
    }
});
console.log(idadeFilter);