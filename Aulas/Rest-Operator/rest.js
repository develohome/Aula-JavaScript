function minnhaLista(...nomes){
    console.log(nomes)
}
minnhaLista('Alex', 'Jorge', 'Gabi');

function numeros(...numeros){
    console.log(numeros)
}
numeros(3,4,2,5,7,4);

function cadastrar(usuarios, ...novosUsuarios){
    let totalUser = [
        ...usuarios,
        ...novosUsuarios
    ]
    console.log(totalUser)
}
let usuarios = ['José', 'João'];
let novosUsuarios = cadastrar(usuarios, 'Henrique', 'lucas')