// function gritar(expressao){
//     console.log(expressao.toUppercase());
// }

// gritar("bom dia");

// let verifica = prompt("digite um número:")

// function pOi (num) {
//     if (num%2==0){
//     console.log("número par")
//     } else { 
//         console.log("número ímpar")
//     }
// }

// // ATIVIDADE
// // digite um número e informe se ele é primo ou não.
// // não deu certo o meu ex :(

// let resultado = pOi(verifica);
// console.log(resultado);

// let verifica = prompt("digite um número:")

// function primO (num) {
//     if (num%2==1 && num%3==1 && num%5==1){
//     console.log("número é primo")
//     } else

// }

// let resultado = primO (verifica);
// console.log(resultado);

// resultado da atividade
// criamos a função vPrimo e o resultado seria num
// function vPrimo(num) {
//     // definimos o "n" igual a 2 como ponto de partida, depois o resultado "num" sendo menor que 2 ele puxa esse resultado da função "for" e o "n++" é o contator para loopings necessários
//     for (let n = 2; n < num; n++) {
//         // o resultado "num" dividido por "n=2" sendo igual a 0 ele gera o valor "false" // 
//         if (num % n == 0) {
//             return false;
//         }
//     } return num > 1;
// }
// let verifica = Number(prompt("digite um número:"));
// if (vPrimo(verifica)) {
//     console.log("é primo")
// } else {
//     console.log("não primo")
// }

// // criando a função "realizarOp", tendo como resultados um operador "oper" e dois números que irão fazer o calculo "num1" e "num2".
// function realizarOp(oper,num1,num2){
//     // partimos do principio que o resultado inicial sempre será 0.
//     let result = 0;
//     // permite executar um bloco de código diferente de acordo com cada opção (cada case) especificada.
//     switch(oper){
//         case "1":
//             // fizemos um operação de adição.
//             result = num1 + num2;
//             break;
//         case "2":
//             // fizemos um operação de subtração.
//             result = num1 - num2;
//             break;
//         case "3":
//             // fizemos um operação de multiplicação.
//             result = num1 * num2;
//             break;
//         case "4":
//             // fizemos um operação de divisãp. usamos também aqui o .toFixed para fixar o resultado com 2 casas decimais após a virgula/ponto 
//             result = (num1 / num2).toFixed(2);
//             break;
//         default:
//             // caso seja digitado um valor inválido temos o retorno da mensagem na impressão.
//             console.log("Opção Inválida");
//     } // retorno dos resultados dentro do switch
//     return result;
// } // criando a lista "operacao" tendo como resultado o valor digitado no "prompt". o "prompt" serve para que a pessoa escolha uma opção de 1 ao 4 
// let operacao = prompt ("Escolha: 1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão");
// // imprimimos o valor final da function "realizarOp" tendo a escolha do "prompt" (lista operacao) e outros 2 valores (5 e 6) que colocamos dentro do próprio código. 
// console.log(realizarOp(operacao, 5, 6));

// ATIVIDADE

// let escolhido = Number(prompt("digite um número:"))

// function fatorial() {
//     let numero=1;
//     for (x=escolhido; x<=1; x++){
//         numero=numero*x
//     }
// console.log(fatorial(escolhido));


// // resultado Rodolpho

// let numero = Number(prompt("digite um número:"));
// let n = 1;
// for (x = numero; x>= 1; x--){
//     n = x*n;
// }
// console.log(+n);

// // resultado Bi

// function fatorial(n) {
//     if (n>1) {
//         return n * fatorial(n-1);
//     }
//     return 1;
// }

// let operacao = Number(prompt("digite um número:"));
// console.log(fatorial(operacao));

// /// funções anônimas - function express
// // diminuimos o código já chamando a variável junto com a função
// const soma = function (a,b){
//     return a + b;
// }
// console.log(soma(3,4));


// const incremento = function (n) {
//     return n + 1;
// }
// console.log(incremento(5));

// // arrow function
// // diminuimos  ainda mais o código já chamando a variável junto com a função, usando "=>" ao invés de "function".
// const incremento2 = (n) => {
//     return n + 2;
// }
// console.log(incremento2(10));

// // diminuimos ainda mais, agora sem precisar de "()" para o "n". neste caso só pode ser possível realizar isso quando tiver somente um único valor.
// const incremento3 = n => {
//     return n + 3;
// }
// console.log(incremento2(20));

// // ainda menor, agora sem precisar chamar o return, mas também só funciona se for para um único comando, por exemplo, soma de um carrinho de compras.
// const incremento4 = n => n+1;
// console.log(incremento2(1));

// // forma tradicional de criar uma função.
// function soma2 (n1, n2) {
//     return n1 + n2;
// }
// console.log(soma2(11,12));

// // arrow function simplificada, trazendo a mesma informação da função anterior sem precisar chamar return e abrir chaves.
// const soma3 = (n1,n2) => n1 + n2;
// console.log(soma3(11,12));

// let quintoE = [7,14,21,28,35]

// let media = function(quintoE) {
//     let soma = 0;
//     for (let num of quintoE) {
//         soma +=num;
//     } return soma/quintoE.length
// }
// console.log(media(quintoE));