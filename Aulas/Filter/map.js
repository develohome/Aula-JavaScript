const lista = [1,2,3,4,5,6];

const novaLista = lista.map((item, index) => {
    return item + index;
});
console.log(novaLista);