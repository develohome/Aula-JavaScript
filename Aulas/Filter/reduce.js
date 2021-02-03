const lista = [1,2,3,4,5,6];

const soma = lista.reduce((total, proximo) =>{
    return total + proximo;
})
console.log(soma)