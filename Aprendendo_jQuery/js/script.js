
// alert("Tudo Conectado!");

// $(document).ready(function(){ EVENTO QUE QUEREMOS }) é uma prática muito utilizada no mercado de trabalho para rodar somente o evento após carregar o HTML. Uma maneira mais fácil usar o atributo "defer" no link que chama o JS.
$(document).ready(function () {
    $('#p1').text("Meu Nome é Rauny");
    // o ".append" adiciona conteúdos e elementos visualmente nas páginas.
    $ ("#minhaDiv").append("<p>Curso de jQuery</p>");
});
// criando função para soma de números digitados para a nossa calculadora.
$("#soma").click(function(){
    // declaracão de variáveis para obter o conteúdo dos inputs
    let v1 = $("#valor1").val();
    let v2 = $("#valor2").val();
    /// usamos o ".attr" para puxar um valor pré-definido no value de dentro do HTML e mesmo que alterado ele irá valer o valor já pré-defino antes. a aplicabilidade por exemplo é para descontos de produtos.
    // let v1 = $("#valor1").attr("value");

    // o ".prop" ele possui a mesma caracteristica do ".attr", trazendo um valor pré-definido, mas você pode alterá-lo depois caso necessário.
    // let v1 = $("#valor1").prop("value");

    // "parseFloat" transforma os números em casa decimais. poderiámos usar o "parseInt" mas ele limita os números (não faz números inteiros e negatigos) e tambeem poderiámos usar o "Number"
    let soma = parseFloat(v1) + parseFloat(v2);

    // resposta da soma aparecendo em "fadeIn".
    $("#resposta").append("<p id='res'> A Soma É: " + soma + "</p>").fadeIn(2000);
});

// botão limpar e dar "fadeOut" na "div" de resultados
$("#limpar").click(function(){
    $("input").val("");
    $("#resposta").fadeOut(2000)
    $('#res').remove();
});