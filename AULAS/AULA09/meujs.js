// tag mais utilizada no javascript //
console.log("testando a escrita no console");
// tag var é para criar variaveis e criar um espaço de armazenamento. ela é uma variável global e pode usada para coisas fora de escopo. //
var banana = "texto";
// quando usamos resultados com aspas ele é variável do tipo string (texto) e se não coloca aspas ela é number //
var numero = 12;
var numero = "12";
// variável do tipo boolean, pode ser true ou false //
var estaAprobado = true;
var estaAprobado = false;
var nome = "Tatiana";
// quando não se põem um resultado/conteúdo ela se torna uma variável indefinida //
var sobrenome;
// podemos declarar uma vatiável com "let" ela é uma variável local sendo usada somente dentro de um escopo de estrutura. se for usada fora do escopo se usa var. A var é global. //
// o ideal é sempre usarmos a let local, porém haverá casos que ela precisará ser var global. //
let nome2 = "Carlos";

if (true) {
    var num = 3;
}
// imprime no console a info. //
console.log(num);

// a variável const ela pode ter valor único durante todo o programa. no exemplo abaixo foi colado 2 valores para "a" mas ela dará erro. //
const a = 1;
console.log(a);
// a = 2; //

let b = 5;
console.log(a);
b = 6;
console.log(b);

// é uma boa prática sempre chamarmos a variável comum (não constante), ele irá funcionar sem chamar, mas não é uma boa prática. //
c = 7;
console.log(c);

// cria uma mensagem no corpo do e-mail //
document.write("testanto a escrita no corpo do HTML");

// cria uma caixa pop-Up //
// alert("testanto"); //

// a linguagem javascript é case sensitive, ou seja, ser for b não pode usar B //
console.log("o conteúdo da variável b é: " + b);

// atribuicão de valores e operadores matemáticos //

let x = 5;
let y = 6;
let z = 0;

// é possivel somar, subtrair, multiplar, dividir, etc... as variáveis //
z = x + y;
// z = x - y; //
// z = x * y; //
// z = x / y; //
// z = x % y; //
// z = x + y * x // ele segue a ordem de calculo * e depois +
// z = (x + y) * x // primeiro segue () e depois *
// z = (x + y)**2 * x // primeiro (), depois ** [potência] e depois *

console.log(z);

// podemos usar texto para criar um resultado variável //
var x1 = "Rodolpho";
var x2 = "Rauny";
var x3 = x1 + x2;

console.log(x3);

x += 1; // x = x + 1 são o mesmo valor, mas é possivel resumir o código. se atentar devido ao uso em cascata, ele irá realizar a formula com o último valor dado // 
console.log(x);

// console.log(++x); // soma 1 ao x e depois mostra //
console.log(x++); // mostra valor de x e depois soma 1 //
console.log(x);

// console.log(--x); // subtrai 1 ao x e depois mostra //
console.log(x--); // mostra valor de x e depois subtrai 1 //
console.log(x);

// usado para variáveis númericas //

x == y; // == comparação de conteúdos - inclusive para tipo string e number com valores iguais //
x === y; // === comparando conteúdo e o tipo de variável // 
x != y; // != verificar se possuem conteúdos diferentes, sem levar em consideração o tipo //
x !== y; // != verificar se possuem conteúdos diferentes, levendo em consideração o tipo //
x > y; // verificar se é maior ao conteúdo //
x < y; // verificar se é menor ao conteúdo //
x >= y; // verificar se é maior ou igual ao conteúdo
x <= y; // verificar se é menor ou igual ao conteúdo //

let n1 = 15;
let n2 = "42";
let n3 = 42.0;

// função if ("se" em português)//
if (n1 == n2){
    console.log("verdadeiro");
} // função else ("se não" em português) 
else{
    console.log("falso");
}

if (n2 == n3){
    console.log("verdadeiro");
} // função else ("se não" em português) 
else{
    console.log("falso");
}

if (n2 === n3){
    console.log("verdadeiro");
} 
else{
    console.log("falso");
}

if (n1 > n3){
    console.log("verdadeiro");
} 
else{
    console.log("falso");
}

// let n4 = prompt("digite aqui um número: "); //
//console.log(n4); //

console.log(n1>=n3 ? "verdadeiro" : "falso");

// atividade //

console.log(n2==n1 ? "verdadeiro" : "falso");

console.log(n2===n1 ? "verdadeiro" : "falso");

console.log(n2!=n1 ? "verdadeiro" : "falso");

console.log(n2!==n1 ? "verdadeiro" : "falso");

console.log(n2>n1 ? "verdadeiro" : "falso");

console.log(n2<n1 ? "verdadeiro" : "falso");

console.log(n2>=n1 ? "verdadeiro" : "falso");

console.log(n2<=n1 ? "verdadeiro" : "falso");

// calculo de par ou impar //
let numero7 = prompt("digite aqui um número: ");

if ((numero7%"2") == 0){
    console.log("Número Par")
}
else{
    console.log("Número Ímpar")
}




// //

let numero5 = prompt("digite aqui um número: ");
console.log((numero5%2) ==0 ? "Par" : "Ímpar");