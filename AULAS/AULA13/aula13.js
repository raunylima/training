

// // Math.sqrt() - raíz quadrada.
// var raiz = Math.sqrt (81);
//     console.log(raiz);

// // Math.pow - potência
// var potencia = Math.pow (2,4) // 2 na potência de 4 / primeiro número é a base e o segundo a potência (quantas vezes será multiplicado).
//     console.log(potencia);

// // Math.round - arredondamento
// var arredondamento = Math.round (4.5); // arredonda para 5, acima e igual a 0.5 arredonda pra baixo.
//     console.log(arredondamento);
// var arredondamento2 = Math.round (4.3); // arredonda para 4, abaixo de .49 arredonda pra baixo.
//     console.log(arredondamento2);

// // Math.floor - arredonda um número para o inteiro mais baixo / antes do ponto.
// var arredondamento3 = Math.floor (9.9); // arredonda para 9
//     console.log(arredondamento3);

// // Math.ceil - arredonda um número para o inteiro mais alto / depois do ponto.
// var arredondamento4 = Math.ceil (9.1); // arredonda para 10
//     console.log(arredondamento4);

// // Math.trunc - remove a parte fracionada e retorna o número inteiro.
// var arredondamento5 = Math.trunc (0.9999); // arredonda para 1
//     console.log(arredondamento5);

// // Math.abs - retorna o valor absoluto
// var valor = Math.abs(-4.7); // número absoluto
//     console.log(valor);

// // ATIVIDADE
// // utilizando todos os metódos do Math. crie uma variável que demonstre os metódos vistos.

// // Math.sqrt() - raíz quadrada.
// var raiz = Math.sqrt (49);
//     console.log(raiz);

// // Math.sqrt() - raíz quadrada.
// var raiz = Math.cbrt (343);
//     console.log(raiz);

// // Math.pow - potência
// var potencia = Math.pow (7,7) // 2 na potência de 4 / primeiro número é a base e o segundo a potência (quantas vezes será multiplicado).
//     console.log(potencia);

// // Math.round - arredondamento
// var arredondamento = Math.round (6.5); // arredonda para 5, acima e igual a 0.5 arredonda pra baixo.
//     console.log(arredondamento);
// var arredondamento2 = Math.round (7.49); // arredonda para 4, abaixo de .49 arredonda pra baixo.
//     console.log(arredondamento2);

// // Math.floor - arredonda um número para o inteiro mais baixo / antes do ponto.
// var arredondamento3 = Math.floor (7.9); // arredonda para 9
//     console.log(arredondamento3);

// // Math.ceil - arredonda um número para o inteiro mais alto / depois do ponto.
// var arredondamento4 = Math.ceil (6.1); // arredonda para 10
//     console.log(arredondamento4);

// // Math.trunc - remove a parte fracionada e retorna o número inteiro.
// var arredondamento5 = Math.trunc (7.7777); // arredonda para 1
//     console.log(arredondamento5);

// // Math.abs - retorna o valor absoluto
// var valor = Math.abs(-7.77); // número absoluto
//     console.log(valor);


// // TRIGONOMETRIA
// // Math.sin - retorna o valor do seno
// var seno = Math.sin (90);
//     console.log(seno);

// // Math.sin - retorna o valor do cosseno
// var cosseno = Math.cos (90);
//     console.log(cosseno);

// // Math.tan - retorna o valor da tangente
// var tangente = Math.tan (90);
//     console.log(tangente);

// // Math.asin - retorna o valor do arco seno
// var arcoS = Math.asin (-1);
//     console.log(arcoS);

// // Math.acos - retorna o valor do arco cosseno
// var arcoC = Math.acos (1);
//     console.log(arcoC);

// // Math.atan - retorna o valor do arco tangente
// var arcoT = Math.atan (10);
//     console.log(arcoT)


// // ATIVIDADE
// // calcule através dos Math para Trigonometria, todos os visto em aula.

// // Math.sin - retorna o valor do seno
// var sN = Math.sin (15);
//     console.log(sN);

// // Math.sin - retorna o valor do cosseno
// var cS = Math.cos (30);
//     console.log(cS);

// // Math.tan - retorna o valor da tangente
// var tG = Math.tan (45);
//     console.log(tG);

// // Math.asin - retorna o valor do arco seno
// var arcoS = Math.asin (0.35);
//     console.log(arcoS);

// // Math.acos - retorna o valor do arco cosseno
// var arcoC = Math.acos (-0.7);
//     console.log(arcoC);

// // Math.atan - retorna o valor do arco tangente
// var arcoT = Math.atan (7);
//     console.log(arcoT)


// // Math.min - retorna o menor valor entre parâmetros passados.
// var miN = Math.min (57,56,58);
//     console.log(miN);

// // Math.max - retorna o maior valor entre parâmetros passados.
// var maX = Math.max (57,56,58);
// console.log(maX);

// // número randômico - gera números randômicos.
// function getRandomArbitrary (min, max) {
//     return Math.floor(Math.random() * (max - min)); // método de arredondamento.
// }
// console.log(getRandomArbitrary(1,100));

// ATIVIDADE
// Utilizando os métodos do Math, verifique o menor número dentro de um intervalo de 5 números, o maior número dentro do mesmo intervalo e gere números aleatórios de 1 a 1000. comente e faça a indentação.

// // exemplo Alice.
// function getR (tam, min, max) {
//     let listaR = []; 
//     for (x=0; x<tam; x++); {
//         listaR [x] = Math.floor(Math.random() * (max - min));
//     }
//     return listaR;
// }
// let listaV = getR (5, 1, 1000);
// console.log(listaV);

// listaV.sort(function (a,b) { return a - b });

// console.log("o menor é... " + listaV[0]);
// console.log("o menor é... " + listaV[listaV.length-1]);


// // casas decimais
// var num = new Number(14.12);
// console.log(num.toPrecision(2)); // outputs 14
// console.log(num.toPrecision(3)); // outputs 14.1
// console.log(num.toPrecision(4)); // outputs 14.12
// console.log(num.toPrecision(5)); // outputs 14.120

