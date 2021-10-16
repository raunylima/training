// //querySelector retorba o primeiro elemento debtro do documento. //

// // criação de botão que chama um seletor 
// // "querySelector" retorna o primeiro elemento dentro do documento
// // "btn" é a variável que recebe o seletor butto
// // "document" é o elemento
// var btn = document.querySelector ('button');

// // função que gera números randômicos e sempre ao trazer esses números eles são alterados através dos multiplicadores "number+1"
// function random (number) {
//     return Math.floor(Math.random() * (number+1));
// }

// // função criada para alteração de fundo do site, ela soma a função random feita anterior, gerando sempre cores diferentes de bg. //  
// function bgChange(){
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random (255) + ')';
//     // chamando a variável através do "rndCol"
//     document.body.style.backgroundColor = rndCol;
// }

// // ATIVIDADE

// alert("SEJAM BEM-VINDO!!");

// function sair1(obj) { // dispara quando você traz o mouse sobre o elemento
//     obj.innerHTML = "<h1><b>Volte Sempre!</b></h1>"
// }
// function sair2(obj) { // dispara quando você mover o mouse para fora do elemento.
//     obj.innerHTML = "<h1><b>Obrigada por entrar nesta página!</b></h1>"
// }
// // função que gera números randômicos e sempre ao trazer esses números eles são alterados através dos multiplicadores "number+1"
// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
// }

// // função criada para alteração de fundo do site, ela soma a função random feita anterior, gerando sempre cores diferentes de bg. //  
// function bgChange() {
//     var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
//     // chamando a variável através do "rndCol"
//     document.body.style.backgroundColor = rndCol;
// }

function myFunction() {
// getElementyById é uma função do JavaScript que serve para retornar um elemento do DOM que é identificado por um ID específico.
    document.getElementById("demo").innerHTML = "Olá Mundo!";
}
