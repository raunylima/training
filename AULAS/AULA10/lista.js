// // declaração de uma lista com elementos do tipo number.
// let listaNumero = [3,7,2.9,6,23,678,0];

// // declaração de uma lista com elementos do tipo string.
// let listaPalavras = ["gato","elefante","casa","São Paulo"];

// // declaração de uma lista com elementos do tipo string e number (diversos).
// let listaMista = [23, "casebre", true, 1200, "dado"];

// let alunos = []

// // relaciona todos os itens da lista.
// console.log (listaNumero);

// console.log (listaPalavras);

// // "[1]" retorna o valor na posição 1
// console.log (listaPalavras[1]);

// // ".legth" conta o número de elementos
// console.log (listaPalavras.length);

// // gato = 0 , elefante = 1, casa = 2, São Paulo = 3
// // i=0 > imprime gato na tela > i++ incrementa > i=1 > imprime elefante na tela > ... e segue
// // em lista 0 não é nulo é valor também
// // i<listaPalavras = i<4 - a lista tem 4 elementos que vão de 0 a 3
// for(i=0; i<listaPalavras.length; i++){
//     console.log (listaPalavras[i]);
// }

// // mesmo jeito igual o de cima, mas de forma mais simples/resumida
// for (let i in listaPalavras){
//     console.log(listaPalavras[i]);
// }

// // aqui fazemos a lista ao contrário. chamando o elemento 4 primeiro que está na posição 3. poderiamos pular e começar de outra posição, no caso de "i=listaPalavras.length-2" começamos com o elemento 2 que está na posição 1
// for(i=listaPalavras.length-1; i>=0; i--){
//     console.log (listaPalavras[i]);
// }

// // ".push" insere um novo elemento na última posição da lista.  
// listaPalavras.push("banana");

// // "unshift" insere um novo elemento na primeira posição da lista.
// listaPalavras.unshift("abobora");

// // modificando um elemento da lista
// // listaPalavras[3] = "cidade";

// // esse comando gera o último elemento da lista
// console.log (listaPalavras[listaPalavras.length-1]);

// // removendo o último elemento da lista
// listaPalavras.pop();

// // removendo o primeiro elemento da lista
// listaPalavras.shift();

// //procurar um determinado elemento da lista
// console.log(listaPalavras.indexOf("casa"))

// console.log(listaPalavras);

// // o comando "splice" remover elemento em determinada posição. primeiro campo com número é a posição de onde você quer remover e o segundo campo com número é a quantidade que se quer remover.
// listaPalavras.splice(2,1);

// // podemos também usar o mesmo comando para incluir um elemento em uma determinada posição. novamente o primeiro campo com número é a posição que a apartir de onde você quer incluir, o segundo campo com número é a quantidade que se quer remover (neste caso colocamos 0 para não remover nada) e o terceiro campo como nome ou número é o que se quer incluir.
// listaPalavras.splice(2,0,"tartaruga");

//
// let copia = listaPalavras.slice()
// console.log(copia)

// console.log(listaPalavras);

// // ATIVIDADE

// let alunos = ["Caio", "Rodolpho", "Mateus", "Fabio", "Pedro"];

// let alunosInvertidos = []

// console.log(alunos);

// for(i=(alunos.length-1); i>=0; i--){
//     alunosInvertidos.push(alunos[i]);
// }
// console.log(alunosInvertidos);

// for(pos = alunos.lenght-1; pos>=0; pos--){
//     alunosInvertidos.push(alunos[pos]);
// }

// console.log(alunosInvertidos);

let numeros = []

let numeroP = []

let numeroI = []

for(n=1; n<=6; n++){
    let cadaN = Number(prompt("Digite um número: "));
    numeros.push(cadaN);
}
for (h=0; h < numeros.length; h++) {
        if (numeros[h]%2==0){
            numeroP.push(numeros[h]);
        }
        else{
            numeroI.push(numeros[h]);
        }
    }
console.log(numeros);
console.log(numeroP);
console.log(numeroI);