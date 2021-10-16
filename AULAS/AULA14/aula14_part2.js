// declaração de uma lista de objetos. não usar acentuação ou ç nos títulos dos itens, uma vez que é uma boa prática termos esses itens não estilizados para que seja posssivel chamar mais fácil. é uma boa prática fazer isso.
const produtos = [
    { codigo: 1, nome: "camiseta", cor: "preta", quantidade: 4, categoria: "vestuário", preco: 45.90 },
    { codigo: 2, nome: "tênis", cor: "azul", quantidade: 5, categoria: "vestuário", preco: 245.85 },
    { codigo: 3, nome: "meia", cor: "branca", quantidade: 8, categoria: "vestuário", preco: 15.90 },
    { codigo: 4, nome: "bola de basquete", cor: "laranja", quantidade: 2, categoria: "esporte", preco: 149.90 },
    { codigo: 5, nome: "par de raquetes", cor: "verde", quantidade: 6, categoria: "esporte", preco: 78.25 }
]

console.log(produtos);

// map - executa uma ação em cida de cada elemento da lista, criando uma nova lista.

// filter - filtra a lista, selecionando os elementos de acordo com uma condição, gerando uma nova lista.

// reduce - reduz os valores de uma determinada propriedade do objeto para único valor.

// APLICAÇÃO DE FILTER NO OBJETO //

// declaração de uma variável que recebeu o método filter da lista produtos, através de uma arrow function =>

console.log("__________metódo filter");
const vestuario = produtos.filter(e => e.categoria == "vestuário");
console.log(vestuario);

const esporte = produtos.filter(e => e.categoria == "esporte");
console.log(esporte);

var maisCaros = produtos.filter(e => e.preco > 100);
console.log(maisCaros);

// APLICAÇÃO DE MAP NO OBJETO //
console.log("__________metódo map");

const NomeMaiusculo = produtos.map(e => e.nome.toUpperCase());
console.log(NomeMaiusculo);

// gerando uma lista com código, nome e preços dos produtos
const listaNova = produtos.map(function (e) {
    return {
        codigo: e.codigo,
        none: e.nome,
        preco: e.preco
    }
});
console.log(listaNova);

const listaVlrTotal = produtos.map(function (e) {
    return {
        nome: e.nome,
        valorTotal: e.quantidade * e.preco
    }
});
console.log(listaVlrTotal);

const listaDesconto = produtos.map(function (e) {
    return {
        codigo: e.codigo,
        nome: e.nome,
        preco: e.preco,
        valorDesc: (e.preco * 0.7).toFixed(2)
    }
});
console.log(listaDesconto);

const produtosEsportes = produtos.filter(e => e.categoria == "esporte");

const esporteDesconto = produtosEsportes.map(function (e) {
    return {
        codigo: e.codigo,
        nome: e.nome,
        preco: e.preco,
        valorDesc: (e.preco * 0.5).toFixed(2)
    }
});
console.log(esporteDesconto);

// APLICAÇÃO DE REDUCE NO OBJETO //

const totalProdutos = produtos.reduce((soma, e) => soma + e.preco * e.quantidade, 0);
console.log(totalProdutos);


// "stringfy" converte um objeto JavaScript para o formato JSON

const dadosJSON = JSON.stringify(produtos);
console.log(dadosJSON);

// para consumir dados em formato JSON utilizamos crase ` 
const dadosCep = `{
    "cep": "04127-090",
    "logradouro": "Rua José Alves Passos",
    "complemento": "",
    "bairro": "Bosque da Saúde",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  }`

// "parse" converte dados em formato JSON para objeto JavaScript
const dadosCepObjeto = JSON.parse(dadosCep);
console.log(dadosCepObjeto);


const funcionarios = [
    { matricula: 123, nome: "Rodolpho", setor: "rh", salario: 43210, idade: 35, tempoDEmpresa: 5, sexo: "Masculino" },
    { matricula: 456, nome: "Eduardo", setor: "eventos", salario: 32109, idade: 30, tempoDEmpresa: 3, sexo: "Masculino" },
    { matricula: 789, nome: "Bianca", setor: "rh", salario: 25360, idade: 25, tempoDEmpresa: 2, sexo: "Feminino" },
    { matricula: 1011, nome: "Rauny", setor: "marketing", salario: 20975, idade: 34, tempoDEmpresa: 3, sexo: "Masculino" },
    { matricula: 1213, nome: "Zoraide", setor: "diretoria", salario: 57910, idade: 50, tempoDEmpresa: 7, sexo: "Feminino" }
]

console.log("__________ Troca de valor dentro da lista")
funcionarios[3].nome = "Raul"
console.log(funcionarios);

console.log("__________ filter sexo");
const sexo = funcionarios.filter(e => e.sexo == "Feminino");
console.log(sexo);


console.log("__________ filter idade entre 30 e 35 anos");
const idade = funcionarios.filter(e => e.idade >= 30 && e.idade <= 35);
console.log(idade);


console.log("__________ filter Tempo de Empresa");
const maiorTempo = funcionarios.filter(e => e.tempoDEmpresa >= 5);
console.log(maiorTempo);


console.log("__________ filter Pessoas com a Letra R");
const funcR = funcionarios.filter(e => e.nome.charAt(0) >= "R");
console.log(funcR);


console.log("__________ filter Nome do Setor em Letras Maiúsculas")
const setorMaiusculo = funcionarios.map(e => e.setor.toUpperCase());
console.log(setorMaiusculo);


console.log("__________ filter Funcionário Ordem Alfabética")
const funcOrdem = funcionarios.map(e => e.nome);
console.log(funcOrdem.sort());


console.log("__________ filter Aumento de 15% no Salário para 5 ou menos anos de empresa")
const menorTempo = funcionarios.filter(e => e.tempoDEmpresa < 5);
const aumentoSalario1 = menorTempo.map(function (e) {
    return {
        nome: e.nome,
        tempoDEmpresa: e.tempoDEmpresa,
        aumento15: ((e.salario * 0.15) + e.salario)
    }
});
console.log(aumentoSalario1);


console.log("__________ filter Aumento de 10% no Salário para 5 ou mais anos de empresa")
const aumentoSalario2 = maiorTempo.map(function (e) {
    return {
        nome: e.nome,
        tempoDEmpresa: e.tempoDEmpresa,
        aumento10: ((e.salario * 0.1) + e.salario)
    }
});
console.log(aumentoSalario2);


console.log("__________ filter Salário Mensal 2021")
const salario2021 = funcionarios.reduce((soma, e) => soma + e.salario * 1, 0);
console.log(salario2021);


console.log("__________ filter Salário Mensal 2022")
const salario2022 = aumentoSalario2.reduce((soma, e) => soma + e.aumento10,0) + aumentoSalario1.reduce((soma, e) => soma + e.aumento15,0);
console.log(salario2022);


console.log("__________ filter Média Salarial 2021")
const mediaSalario = funcionarios.reduce((soma, e) => soma + e.salario / funcionarios.length, 0);
console.log(mediaSalario);


