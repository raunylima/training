// // sintese do while
// // declaração da variável
// let a;
// //uso do "do" é o comando faça
// do {
//     // insiro os comandos
//     comando;
//     comando;
// // agora verifica o tamnaho do loop
// } while (expressao);

// // declaração de variável local
// let a=0;
// // chamando o comando "do" para que ele faça algo
// do {
//     // solicitação de impressão na tela
//     console.log(a);
//     // a++ é o contador do "do" e fica dentro "do". como visto antes no while o contator precisa estar fora das {} 
//     a++;
// // tamnho do loop, menor e igual a 10 e maior e igual a 0
// } while (a<=10);

// // variável local iniciando no 1.
// let n=1
// // chamando o comando "do" para que ele faça algo.
// do {
//     // "if" primeira condição usando a condicional.
//     if (n%2==0) {
//     // imprimindo valores pares na tela.
//     console.log ("o número " + n + " é par.");
//     // nesta verificação "else" não precisamos de condição, pois neste caso temos somente 2 verificacões, se não é par logo é ímpar.
//     } else {
//     // imprimindo valores ímpares na tela.
//     console.log ("o número " + n + " é ímpar.ß");
//     // contator, que guarda os números que irão ser mostrados na tela ou conta.
//     } n++;
// // tamanho do loop, menor e igual a 50 e maior e igual a 1.
// } while(n<=50);

// ATIVIDADE 4

// elabore seu código utilizando "do" e "while" para verificar números múltiplos de 2, 4 e 8. O tamanho do laço será de 20.

// // variável local iniciando no 0.
// let m=0
// // comando "do" para executar.
// do {
//     // única condição que iremos usar, pois todo múltiplo de 8 é de 2 e 4 também.
//     if (m%8==0) {
//     // imprimindo resultados na tela. usamos o \n para quebra de linha.
//     console.log(m + " é múltiplo de 2, 4 e 8." + "\n");
//     // contator
//     } m++;
// // tamanho do loop, menor e igual a 20 e maior e igual a 0.
// } while (m<=20);

// // foreach laço de repetição para interação em vetores e matrizes
// // declaração de array
// var array
// // array.foreach para laço de repetição
// array.forEach (element => {
//     // dentro o comando para verificar o array
//     comando
// });

// // estou criando um vetor ou lista de números, em fucão do arrayNumeros.
// // crio o arrayNumeros para criar a lista de números
// var arrayNumeros = [1,2,3,4,5,6,46,74673854,78545,934588473,5438980345];
// // lista pronta, com o nome arrayNumeros, uso o comando "forEach" para verificar informações dentro da lista 
// arrayNumeros.forEach (numero => {
//     // condição usando número para verificação de número par.
//     if (numero%2==0)
//     // imprimindo resultados na tela com apenas os números pares
//     console.log(numero);
// });

// ATIVIDADE

// Crie uma lista de números. Esta lista deverá conter 20 elementos. Verifique se os elementos dentro da lista são múltiplos ora de 2, ora de 3. 

// // estou criando um vetor de números, em fucão do arrayNumeros.
// var arrayNumeros = [2, 4, 6, 20, 21, 24, 27, 30, 33, 41, 44, 66, 67, 78, 94, 102, 321, 999]
// // usando o comando "forEach" para verifisar as infos da lista.
// arrayNumeros.forEach(multiplosH => {
//     if (multiplosH % 2 == 0 && multiplosH % 3 == 0) {
//         // imprimindo resultados na tela com apenas múltiplos de 2 e 3.
//         console.log(multiplosH + " essse multiplo de 2 e 3.");
//     }   
//     else if (multiplosH % 2 == 0) {
//         // imprimindo resultados na tela com apenas múltiplos de 2.
//         console.log(multiplosH + " essse multiplo de 2.");
//     }   
//     else if (multiplosH % 3 == 0) {   
//         // imprimindo resultados na tela com apenas múltiplos de 3.
//         console.log(multiplosH + " essse múltiplos de 3.");
//     }
// });

// // estou criando um vetor de números, em fucão do arrayNumeros.
// var arrayNumeros = [2, 4, 6, 20, 21, 24, 27, 30, 33, 41, 44, 66, 67, 78, 94, 102, 321, 999]
// // usando o comando "forEach" para verifisar as infos da lista.
// arrayNumeros.forEach(multiplosH => {
//     if (multiplosH % 2 == 0) {
//         // imprimindo resultados na tela com apenas múltiplos de 2
//         console.log(multiplosH + " essse multiplo de 2."); }
// });

// arrayNumeros.forEach(multiplosH => {
//     if (multiplosH % 3 == 0) {
//         // imprimindo resultados na tela com apenas múltiplos de 3
//         console.log(multiplosH + " essse múltiplos de 3."); }
// });

// // Criando lista vazia armazenada na variável 'array'.
// array = []
// // Atribuindo números de 0 a 20 na lista vazia 'array'.
// for (i = 0; i <= 20; i++) {
//     array.push(i)
// }
// // Criando lista com números para avaliar se são múltiplos dos itens de 'array'.
// m = [2, 3]
// // Separando os números de 'array' em múltiplos da lista 'm' usando dois forEach.
// // Um número da lista array é selecionado em ordem de index
// array.forEach(numero => {
//     // e comparado com todos os itens da lista 'm'
//     m.forEach(m => {
//         // ao terminar a avaliação o próximo número da lista array é selecionado
//         if (numero % m == 0) {
//             // O resultado é impresso em uma combinação
//             console.log(numero, "é múltiplo de", m, "\n")
//         } // de strings e variáveis.                                               
//     })
// })

// matrizes são dois Arrays - também chamado de bidimensional porque utiliza dois arrays.
// primeiro Array de tamanho 10.
var x = new Array(10);
// criação de um novo Array de tamanho 3 com o comando "for".
// "i" será menor que o Array "x", de tamanho 10.
for (i = 0; i < x.length; i++) {
    // "x" é o primeiro array e "i" é o indice que se serve para criar o segundo Array de 3.
    x[i] = new Array(3);
}
// imprimi o primeiro Array de 10 posições e dentro deste Array, o segundo Array de 3.
console.log(x);

// ATIVIDADE
