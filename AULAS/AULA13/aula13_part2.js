// declaração de lista
let numeros = [1,2,3,4,5]; // declaração de uma lista com 5 elementos.
function dobrarN(lista) { // declaração de uma funcçano para gerar uma com os elementos dobrados
    let numerosD = []; // declaração de uma lista vazia a ser preenchida.
    for (let elemento of lista){ // loop para percorrer a lista de números.
        elemento *= 2; // dobrando cada elemento da lista
        numerosD.push (elemento) // inserindo cada elemento dobrado na lista.
    }
    return numerosD; // retornando a lista dobrada.
    // for (i=0; i<lista.length; i++){
    //     let elemento = 0;
    //     elemento = lista[i] *2;
    //     numerosD.push(elemento);
    // }
    // return numerosD;
}
console.log(numeros) // mostrando a lista com os elementos originais.
console.log(dobrarN(numeros)); // mostrando a lista com os elementos dobrados.

// MAP
console.log("***MAP***")

// utilização do map para gerar uma lista com os valores dobrados. veja como ficou mais simples e curto o código. o "map" pode ser usado com números, textos e objetos, serve para modificações nas listas.
// usamos "e" como demonominador elemento, usamos a function reduzida "=>" e realizamos a operação após a função.
let numerosD2 = numeros.map (e => e*2);
console.log(numerosD2);

// acrescentar 10% de aumento nos valores dos produtos.
// sempre quando for declarar variáveis utilize let, var ou const.
let produtos = [34.67, 12.45, 8.35, 59.37];
// uso do to.fixed para limitar para dois digitos após o ponto
// usamos "e" como demonominador elemento, usamos a function reduzida "=>" e realizamos a operação após a função.
let produtosA = produtos.map(e => (e*1.1).toFixed(2));
console.log(produtosA);
console.log(produtos);

// FILTER

console.log("***FILTER***")

let numeros2 = [34,86,94,76,27];

// forma tradicional
function maiorQ50(listaS){
    let osM50 = [];
    for(let elements of listaS){
        if(elements > 50) {
            osM50.push(elements);
        }
    }
    return osM50;
}
console.log(maiorQ50(numeros2));

// utilizando o filter e resumindo todo o código.
// usamos "e" como demonominador elemento, usamos a function reduzida "=>" e realizamos a operação após a função.
let vM50 = numeros2.filter (e => e>50);
console.log(vM50);

// REDUCE

console.log("***REDUCE***")

let numeros3 = [1,2,3,4,5,6];
// diferente dos demais precimaos definir um acumulador (neste caso "s") e colocá-los junto do "e" de elemento nos parenteses, após isso seguir com com a function reduzida "=>", somar o acumulador "s" com o elemento "e".
let soma3 = numeros3.reduce ((s, e) => s + e);
console.log (soma3);
