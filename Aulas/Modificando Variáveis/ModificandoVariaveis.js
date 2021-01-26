var a = 10;
var b = 20;
var c = null;


console.log(`o valor de A é = ${a}, o valor de B = ${b}`);

c = a;
a = b; 
b = c;

console.log(`Agora o valor de A é = ${a}, o valor de B = ${b}`)