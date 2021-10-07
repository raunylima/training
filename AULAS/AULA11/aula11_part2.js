
// let alunos = ["Mariana", "Rafael", "Anderson", "Carol", "João Pedro"];

// let notas = [6.8, 8.9, 3.7, 4.7, 9.8];

// a função ".reverse" inverte os itens mais facilmente.
// console.log (alunos.reverse());
// console.log (notas.reverse());

// aqui um exemplo do uso do ".reverse" e criando uma nova lista e a imprimindo.
// alunosI = alunos.reverse();
// console.log (alunosI);

// aqui um exemplo do uso do ".sort" que imprimi os nomes ou números em ordem alfabética ou descrecente.
// console.log (alunos.sort());
// console.log (notas.sort());

// a união de duas funções para ter um resultado reverso e ordenado.
// console.log(alunos.sort().reverse());

// let aluno1 = {
//     nome: "Bianca",
//     cursos: ["HTML", "CSS", "Java Script"],
//     ativo: true,
//     nota: 9.7
// };

// let aluno2 = {
//     nome: "Einstein",
//     cursos: ["Física", "PhotoShop"],
//     ativo: true,
//     nota: 10
// };

// let aluno3 = {
//     nome: "Mateus",
//     cursos: ["HTML", "CSS", "Estrutura de Dados"],
//     ativo: false,
//     nota: 2.7
// };

// // juntando todos os alunos em uma nova lista
// let alunos = [aluno1, aluno2, aluno3];

// // imprimindo os resultados de uma nova lista
// console.log(alunos);

// // "in" mostra os indices da lista
// for (let aluno in alunos) {
//     console.log(aluno);
// }

// ---

// // "of" mostra os elementos da lista
// for (let aluno of alunos) {
//     // no exemplo abaixo incluimos a função ".nome" um dos cabeçalhos da lista de alunos (os cabeçalhos que temos acima são nome, cursos, ativo e nota) e imprimimos somente a informação que pedimos.
//     console.log(aluno.nome);
// }

// // "if" para termos uma condicão para puxarmos os só os alunos ativos com validador true. e colocarmos "!aluno.ativo" no "if" ele irá retornar somente os alunos com validador false, a adicão do "!" serve como uma validador negativo.
// for (let aluno of alunos) {
//     if (aluno.ativo) {
//         console.log(aluno.nome)
//     }
// }

// temos a criação da lista "aluno" com dados da lista "alunos"
// for (let aluno of alunos) {
//     // imprimimos aqui os elementos do cabeçalho nome da lista "aluno".
//     // ele passa de 1 em 1. Primeira vez ele puxa o nome Bianca, depois Einstein, depois Mateus. Ele sempre vai passar de 1 em 1 e pegar os resultados e imprimi-los 
//     console.log(aluno.nome);
//     // aqui estamos complementando a informação solicitada no primeiro "for", estamos criando a lista "curso" puxando as do cabeçalho "cursos" da lista "aluno".
//     for (let curso of aluno.cursos) {
//         // aqui imprimi os elementos solicitados, conforme solicitado, para complentar a primeira informação solicitada, o "nome" do aluno
//         console.log(curso);
//     }
//     // aqui colocamos uma linha para separar as informações visualmente.
//     console.log("____________________")
// }

// // ATIVIDADE

// // "let" chamando a lista de produtos para cadastro.
// // cadastro dos produtos. "produtosN" é o nome do produto. "forncedorD" são os fornecedores que tem os produtos. "estoqueD" é se o produto tem estoque ou não. "valorX" é o valor doi produto no fornecedor.
// let p1 = {
//     produtoN: "Hambúrguer de Soja",
//     fornecedorD: ["Casa da Soja", "Casa Vegana", "Mundo Verde"],
//     estoqueD: true,
//     valorX: 3.23
// };

// let p2 = {
//     produtoN: "Nuggets de Planta",
//     fornecedorD: ["Comida do Futuro", "Casa Vegana"],
//     estoqueD: false,
//     valorX: 9.47
// };

// let p3 = {
//     produtoN: "Carne de Glúten",
//     fornecedorD: ["Pão dos Pão", "Mundo Verde"],
//     estoqueD: true,
//     valorX: 7.87
// };

// let p4 = {
//     produtoN: "Linguiça de Ervilha",
//     fornecedorD: ["Planta Comestível", "Casa da Soja"],
//     estoqueD: false,
//     valorX: 6.90
// };

// // junção dos itens da loja
// let lojaP = [p1, p2, p3, p4];

// // aqui colocamos uma linha para separar e dar nome ao campo.
// console.log("PRODUTOS DISPONÍVEIS");

// // produtos disponiveis
// for (let statusP of lojaP) {
//     if (statusP.estoqueD) {
//         console.log(statusP.produtoN);
//     }
// }

// console.log("____________________");

// // aqui colocamos uma linha para separar e dar nome ao campo.
// console.log("PRODUTOS INDISPONÍVEIS");

// // produtos indispoíveis
// for (let statusP of lojaP) {
//     if (!statusP.estoqueD) {
//         console.log(statusP.produtoN);
//     }
// }

// // criação da lista com os produtos, preço, fornecedores e disponibilidade
// for (let statusP of lojaP) {
//     console.log("____________________");
//     console.log("PRODUTO - PREÇO - FORNECEDOR");
//     // imprimimos aqui os elementos do referente ao nome do produto "produtoN".
//     console.log(statusP.produtoN);
//     console.log(statusP.valorX)
//     // aqui para complmentar a informação coloquei o nome dos forncedores disponíveis desses produtos e cria uma nova lista com os fornecedor "fornecedorD".
//     for (let forncedorD of statusP.fornecedorD) {
//         // imprimindo o nome dos forncedores
//         console.log(forncedorD);
//     }
// }

// CRIAÇÃO DE FUNÇÕES
// geralmente o nome da função é de "verbo + substantivo"

// let minhaCP = "laranja";

// function mudarCor () {
//     // nesse campo colocar os comandos/instruções da função.
//     minhaCP = "azul";
//     console.log(minhaCP);
// }

// console.log(minhaCP);

// mudarCor();

// chamandos a "function" e determinamos um nome (no meu caso "somaDN). e dentro dos parenteses definimos os parâmetros, neste exemplo "num1" e "num2".
// podemos chamar os números com os prompts. coloquei o "Number" antes do prompt para que o sistema tente atribuir a ideia dele a número

let numeroE1 = prompt("Digite o primeiro número:");
let numeroE2 = prompt("Digite o segundo número:");

function somaDN (num1=0, num2=0){
    // dentro das chaves definimos que queremos fazer com a função. neste caso estamos criando o "let soma" somando números e imprimindo o resultado no console.
    let soma = 0;
    soma = num1 + num2;
    console.log(soma)
}

// basta chamar a função e ele irá imprimir na página
// caso colocassemos somente um valor numeral neste parâmetros " exemplo (14)" o próprio sistema identifica o segundo número é 0.
// com o prompt ativo aqui chamamos os números originados do prompt "numeroE1" e "numeroE2"
somaDN(Number(numeroE1),Number(numeroE2));