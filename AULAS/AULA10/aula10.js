// TABELA VERDADE - Verdadeiro e Falso

// AND -- &&
//  as 2 condições precisam ser V para dar V
// V -- V = V
// V -- F = F
// F -- V = F
// F -- F = F

// OR -- ||
// as 2 condições precisam F para dar F
// V -- V = V
// V -- F = V
// F -- V = V
// F -- F = F

// NOT -- !
// o que era V se torna F
// V --> F
// F --> V

// uso do for
// i se incia em 0 e em movimento em espiral chega a 3
// i<= a condição de loop até 3 / i< a condição de loop até 2
// i> a condição de loop até 4
// A condição para quando se torna verdadeira
// i++ é o incremento/contador para que se mantenha em loop

// for(i=0; i<=3; i++){
//     console.log(i);
// }

// for(i=0; i<=10; i++){
//     console.log(i);
// }

// === é para comparar número e número
// == é para comparar número
// = é para comparar atributo

// este for abaixo faz o loop infinito, devido ao i+1
// NÃO USAR NUNCA
// for(i=0; i= i+1; i++){
//     console.log(i);
// }

// for entra em loop até 99
// for(i=0; i= i<100; i++){
//     console.log(i);
// }

// for decrementável. ele agora o "i" será "--"
// for (i=25; i>=0; i--){
//     console.log(i);
// }

// inserindo "if" dentro do for
// "var" declaração de variável global
// var n=0;
// estou verificando no if o "n", logo o for terá que conter a variável "n"
// n++ ou n-- são os contadores e importantes para determinar as condições.
// for (n=-10; n<=30; n++){
//     if(n>0){
//         console.log("O número é positivo: " + n);
//         // "else if" é um "if" condicional, neste caso usamos 3 condições, somente a última é "else" e a primeira é "if"
//     } else if (n<0){
//         console.log("O número é positivo: " + n);
//     } else {
//         console.log("O número é nulo: " + n);
//     }

// for de laço de repeticação de tamnho 50, autoincrementável, que verifica se o "i" é par ou ímpar
// for (i=0; i<=50; i++) {
//     if (i%2==0){
//         console.log("O número é par: " + i);
//     }
//     else{
//         console.log("O número é ímpar: " + i);
//     }
// }

// verificar em laço de repetição de tamnho 20, autoincrementável, verificando apenas números pares
// for (i=0; i<=20; i++){
//     if (i%2==0){
//         console.log(i + " este número é par.");
//     }
// }

// verificar em laço de repetição de tamnho 20, autoincrementável, verificando apenas números ímpar
// for (i=0; i<=20; i++){
//     if (i%2==1){
//         console.log(i + " este número é ímpar.");
//     }
// }

// ATIVIDADE //

// Exercício 1 - Em um loop de -10 até 50, verifique números ímpares.
// Exercício 2 - Em um loop de 50 até 0, verifique números pares.

// for (r=-10; r<=50; r++){
//     if (r%2!=0){
//         console.log("ímpar " + r);
//     }
// }

// for (z=50; z>=0; z--){
//     if (z%2==0){
//         console.log("pares " + z);
//     }
// }


// tipo de laço de repetição, com uso do esquanto --> faço
// while (expressão){
//     comando;
// }

// "let" declaração de variável global
// usando alert, caixa popup com texto personalizado
// let n = 0;
// while (n < 10) {
//     alert("os números são " + n);
//     n++;
// }

// declaração de variável local, com incremento e usando document.write
// let n = 0;
// while (n < 10) {
//     document.writeln("os números são " + n);
//     n++;
// }

// declaração de variável local, com decremento e com console.log
// let n=20
// while (n>=0){
//     console.log("os número são: " + n);
//     n--;
// }

// declaração de variável local, com incremento e com console.log
// let n=0
// while (n<=20){
//     if (n%2==0){
//     console.log("os número pares são: " + n);
//     }
//     n++;
// }

// let n=-30
// while (n<=30){
//     if (n>0){
//     console.log("o número é " + n + " positivo.");
//     }
//     else if (n<0){
//         console.log("o número é " + n + " negativo.")
//     }
//     else{
//         console.log("o número é " + n + " nulo.")
//     }
//     n++;
// }


// ATIVIDADE
// traga múltiplos de 2, 3, 6 até o número 60 usando condicional

// fiz meio certo o ideal é trabalhar com menos linhas/código resumido. trouxe a interpretação detalhada do que se pediu

// // se inicia em 0 
// let s=0
// // imprimir números igual e menor a 60
// while (s<=60){
//     // primeiro múltiplos de 6, pensando que estes também são são múltiplos de 2 e 3
//     if (s%6==0){
//         console.log(s + " é múltiplo de 6");
//     }
//     // mútiplos de 2
//     else if (s%2==0){
//         console.log(s + " é múltiplo de 2");
//     }
//     // mútiplos de 3
//     else if (s%3==0){
//         console.log(s + " é múltiplo de 3");
//     }
//     // sem mútiplos
//     else {
//         console.log(s + " não é múltiplo de 2, 3 e 6");
//     }
//     s++;
// }

// exatamente como a professora pediu. apesar da solicitação ter "ficado em aberto" a interpretação pode trazer inúmeros resultados diferentes.

let s = 0
while (s <= 60) {
    if (s % 6 == 0 && s % 3 == 0 && s % 2 == 0) {
        console.log(s + " é múltiplo de 2, 3 e 6");
    }
    s++;
}
