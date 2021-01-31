var num = [1, 2, 3];
 for(var i in num){
     console.log(num[i]);
 }
 console.log(i);

 for(let x in num){
    console.log(num[x]);
}

console.log(x); // como a variavel x foi declarada como let, ela só pode ser acessada dentro do bloco. 
// Diferente da variavel i que foi declara como var e dessa forma é possivel fazer o acesso em qual quer luga (global)