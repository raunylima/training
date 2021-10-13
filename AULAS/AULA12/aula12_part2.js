// VETORES

// // vetores simples -- declaração -- Array de tamnho 5
// // vetoresNumeros é o nome do vetor... new Array vetor, estou criando o vetor. dentros dos parenteses determino o tamnho do vetor, lembrando que ele sempre ínicia pelo índice 0.
// var vetorNumeros = new Array(5)
// // Array com os 5 vloes -- vetorNumeros eu declaro os valores que eu quero que mostre.
// vetorNumeros = [1,5,2,6,8];
// // imprime Array na tela
// console.log(vetorNumeros);

// // ordenacão de vetores
// // vetor tamanho 20
// var vetorN = new Array(20);
// vetorN = [3,16,59538,8,742,856,1552,25,7560,30583,10043,24378,94,45,60539,125,89462,305,99999,67];

// // função anônima (function ssem a necessidade de nome) para ordenação usando "sort" de "a-b" em ordem numérica. Se quiser ao contrário temos que colocar de "b-a".
// vetorN.sort (function(a,b) {
//     return a - b;
// });
// console.log(vetorN);

// // ATIVIDADE

// // ordem alfabética, utilizando ".sort" direto no console.log e colocamos ainda ".reverse" para inverter a ordem.
// var vetorP = new Array (7);
// vetorP = ["Maria","João","José","Matilde","Olga","Adão","Clarissa"];
// console.log(vetorP.sort().reverse());

// matrizes
// matriz populada
// var items = [
//     [1,2],
//     [3,4],
//     [5,6]
// ];
// // impressão de matriz
// console.log(items[0][0]); // 1
// console.log(items[0][1]); // 2
// console.log(items[1][0]); // 3
// console.log(items[1][1]); // 4
// console.log(items);

// // construa uma matriz de 5 po 6

// var tab = [
//     [1,0,8,7,35,33],
//     [2,4,14,20,22,26],
//     [3,6,9,18,21,27],
//     [4,8,12,16,24,28],
//     [5,10,15,20,25,30]
// ];
// // impressão de matriz
// console.log(tab[0][0]); // resulta no numero  1
// console.log(tab[0][1]); // resulta no numero  0
// console.log(tab[0][2]); // resulta no numero  8
// console.log(tab[0][3]); // resulta no numero  7
// console.log(tab[0][4]); // resulta no numero  35
// console.log(tab[0][5]); // resulta no numero  33
// console.log(tab[1][0]); // resulta no numero  2
// console.log(tab[1][1]); // resulta no numero  4
// console.log(tab[1][2]); // resulta no numero  14
// console.log(tab[1][3]); // resulta no numero  20
// console.log(tab[1][4]); // resulta no numero  22
// console.log(tab[1][5]); // resulta no numero  26
// console.log(tab[2][0]); // resulta no numero  3
// console.log(tab[2][1]); // resulta no numero  6
// console.log(tab[2][2]); // resulta no numero  9
// console.log(tab[2][3]); // resulta no numero  18
// console.log(tab[2][4]); // resulta no numero  21
// console.log(tab[2][5]); // resulta no numero  27
// console.log(tab[3][0]); // resulta no numero  4
// console.log(tab[3][1]); // resulta no numero  8
// console.log(tab[3][2]); // resulta no numero  12
// console.log(tab[3][3]); // resulta no numero  16
// console.log(tab[3][4]); // resulta no numero  24
// console.log(tab[3][5]); // resulta no numero  28
// console.log(tab[4][0]); // resulta no numero  5
// console.log(tab[4][1]); // resulta no numero  10
// console.log(tab[4][2]); // resulta no numero  15
// console.log(tab[4][3]); // resulta no numero  20
// console.log(tab[4][4]); // resulta no numero  25
// console.log(tab[4][5]); // resulta no numero  30
// console.log(tab);

var nomes = [
    ["Beatriz", "Antonella", "Maria Júlia", "Emanuelly", "Isadora", "Ana Clara", "Melissa", "Ana Luiza", "Ana Júlia", "Esther"],
    ["Clara", "Isis", "Rebeca", "Rafaela", "Marina", "Ana Laura", "Maria Helena", "Agatha", "Gabriela", "Catarina"],
    ["Helena", "Alice", "Laura", "Manuela", "Valentina", "Sophia", "Isabella", "Heloísa", "Luiza", "Júlia"],
    ["Lavínia", "Maitê", "Maria Cecília", "Maria Alice", "Sarah", "Elisa", "Liz", "Yasmin", "Isabelly", "Alícia"],
    ["Lorena", "Lívia", "Maria Luiza", "Cecília", "Eloá", "Giovanna", "Maria Clara", "Maria Eduarda", "Mariana", "Lara"],
    ["Benício", "Gustavo", "Isaac", "João Miguel", "Lucca", "Enzo Gabriel", "Pedro Henrique", "Felipe", "João Pedro", "Pietro"],
    ["Noah", "Caio", "João", "Emanuel", "Cauã", "João Lucas", "Calebe", "Enrico", "Vinícius", "Bento"],
    ["Miguel", "Arthur", "Heitor", "Bernardo", "Davi", "Théo", "Lorenzo", "Gabriel", "Pedro", "Benjamin"],
    ["Anthony", "Daniel", "Bryan", "Davi Lucca", "Leonardo", "Vicente", "Eduardo", "Gael", "Antônio", "Vitor"],
    ["Matheus", "Lucas", "Nicolas", "Joaquim", "Samuel", "Henrique", "Rafael", "Guilherme", "Enzo", "Murilo"]
]
console.log(nomes);

var numT = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(numT);

numT.push([13, 14, 15, 16]);

console.log(numT);
