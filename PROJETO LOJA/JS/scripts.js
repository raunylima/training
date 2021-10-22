// CÓDIGO TABELA DE CADASTRO

// criar a classe com letra maiscula para diferenciar dos atribuitos
// declaração da classe - ela engloba tudo, nossos dados, eventos e funções necessárias para conseguirmos montar nosso banco de dados/listas/base de produtos.
class Produto {

    // definição dos atributos da classe
    constructor() {

        // "this" condições dos atributos, normalmente se começa com "id=1", mas podemos deixar aberto para o usuário digitar ou inciarmos a partir de outro número.
        // o "id" será a nosso ponto inicial e de indexização com o nosso cadastro.
        this.id = 1;
        // this.nome = "";
        // this.valor = 0;

        // aqui estamos fazendo um array dos nossos dados, neste exemplo estamos puxando o "id" que será sequencial (a partir de 1) e jea está declarado, após isso temos o dado nome e depois o dado valor.
        this.arrayProdutos = [];

        // propriedade para testa qual método deve ser executado pelo botão "btn1"
        // esta propriedade está aqui para validar quando iremos adicionar dados e ele deixa de ser 0 sendo atribuido um novo valor, ou quando precisamos corrigir um dado digitado e ele não crie novos dados e só atualize. 
        this.testeBtn = 0;
    }

    // salvar o produto digitado pelo usuário no objeto produto.
    salvar() {

        // alert("Salvando");
        // criando uma varieavel local que irá adicionar novos ou atualizar os dados da lista.
        let produto = this.lerDados();

        // essa validação serve para definir se iremos adicionar dados ou atualizá-lo ou se há dados a serem adicionados. há uma validação abaixo com o detalhamento desse evento.
        if (this.validarCampos(produto)) {

            // alert("Podemos Salvar?");
            // se o campo estiver vazio vamos adicionar
            if (this.testeBtn == 0) {
                this.adicionar(produto);
            }
            // se o campo tiver dados vamos atualizá-lo
            else {
                this.atualizar(this.testeBtn);
            }
            // aqui temos o retorno dos eventos de listarDados com todos os itens da nossa lista jea digitado ou o cancelar onde limpar os campos digitados antes de salvar.
            this.listarDados();
            this.cancelar();
        }
        // imprimir na tela o item novo ou atualizado.
        console.log(this.arrayProdutos);
    }

    // método para alimentar a tabela com os produtos.
    listarDados() {
        // delcaracnao de uma variável para referenciar o tbody da tabela dos produtos.
        let tbody = document.getElementById("tbody");

        tbody.innerText = "";

        // loop para pecorrer o array de produtos.
        for (let i = 0; i < this.arrayProdutos.length; i++) {

            // inserir uma nova linha no tbody.
            let novaLinha = tbody.insertRow();

            // criar cada coluna (célula) de cada linha.
            let td_id = novaLinha.insertCell();
            let td_nome = novaLinha.insertCell();
            let td_valor = novaLinha.insertCell();
            let td_acoes = novaLinha.insertCell();

            // alimentar as células.
            td_id.innerText = this.arrayProdutos[i].id;
            td_nome.innerText = this.arrayProdutos[i].nome;
            td_valor.innerText = this.arrayProdutos[i].valor;

            // adicionando uma classe (.center) nas colunas que queremos.
            td_id.classList.add("center");
            td_acoes.classList.add("center");

            // definindo o campo de editar 
            // criando um elemento de imagem para ser colocado na quarta coluna da linha, onde definimos onde será feitas nossas ações.
            let imgEdit = document.createElement("img");

            // atribuindo a esse elemento o caminho.
            imgEdit.src = "img/edit.png";

            // adicionando um filho para a quarta coluna.
            td_acoes.appendChild(imgEdit);

            // definindo o campo de deletar. 
            // criando um elemento de imagem para ser colocado na quarta coluna da linha.
            let imgDelete = document.createElement("img");

            // atribuindo a esse elemento o caminho.
            imgDelete.src = "img/delete.png";

            // adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgDelete);

            // atribuindo um método para imgDelete através do setAttribute com os parâmetros ("evento", "método"). ou seja, ao clicar na imagem de lixeira iremos deletar o item selecionado.
            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");

            // atribuindo um método para imgDelete através do setAttribute com os parâmetros ("evento", "método"). ou seja, ao clicar na imagem de lápis iremos editar o item selecionado.
            imgEdit.setAttribute("onclick", "produto.mostrarDados(" + JSON.stringify(this.arrayProdutos[i]) + ")");
        }
    }

    adicionar(produto) {
        this.arrayProdutos.push(produto);
        this.id++;
    }

    // metodo para limpar os inputs
    cancelar() {
        document.getElementById("nomeProduto").value = "";
        document.getElementById("valorProduto").value = "";
        // voltando a escrita do botão para Salvar quando estivermos editando o dado.
        document.getElementById("btn1").innerText = "Salvar"
        this.testeBtn = 0;
        // alert("Vamos Cancelar?");
    }

    // capturar o que foi digitado pelo usuários nos inputs.
    lerDados() {

        // as chaves vazias segue a mesma ideia do que se fazia em Array, deixando uma lista vazia a ser preenchida. Poderia seguir o mesmo esquema padrão, colocando as chaves antes e depois dos valores (depois do let e antes do return). Quando se colaca as {} ela é uma variável do tipo objeto. 
        let produto = {};

        produto.nome = document.getElementById("nomeProduto").value;
        produto.valor = document.getElementById("valorProduto").value;
        produto.id = this.id;

        return produto;
    }

    // validação dos conteúdos dos inputs
    validarCampos(produto) {
        let msg = "";
        if (produto.nome == "") {
            msg += "- informe o nome do produto \n";
        }
        if (produto.valor == "") {
            msg += "- informe o valor do produto \n";
        }
        if (msg != "") {
            alert(msg);
            return false;
        }
        return true;
    }

    deletar(idProcurado) {
        // alert("Vamos Deletar o Produto com ID: " + idProcurado);
        if (confirm("Deseja Realmente Deletar o Produto de ID: " + idProcurado)) {
            // this.arrayProdutos.splice(idProcurado, 0);
            // this.listarDados();
            for (let i = 0; i < this.arrayProdutos.length; i++) {
                if (this.arrayProdutos[i].id == idProcurado) {
                    this.arrayProdutos.splice(i, 1);
                    tbody.deleteRow(i);
                }
            }
        }
    }

    mostrarDados(dados) {
        // alert("Vamos Editar o ID: " + dados.id);

        // mostrar as propriedades dos produtos nos inputs.
        document.getElementById("nomeProduto").value = dados.nome;
        document.getElementById("valorProduto").value = dados.valor;

        // modificar o texto do botão Salvar e atribuindo a propriedade "testeBtn"para o id do produto selecionado.
        document.getElementById("btn1").innerText = "Atualizar";
        this.testeBtn = dados.id;
    }

    atualizar(id) {
        //alert("Agora Vamos Atualizar?")

        // procurando pelo produto que será atualizado.
        for (let i = 0; i < this.arrayProdutos.length; i++) {
            if (id == this.arrayProdutos[i].id) {
                // atualizando o nome e valor do produto.
                this.arrayProdutos[i].nome = document.getElementById("nomeProduto").value;
                this.arrayProdutos[i].valor = document.getElementById("valorProduto").value
            }
        }
        // voltando a escritado do botão para salvar e voltando também a propriedade "testeBtn" para 0 para o modo adicionar
        document.getElementById("btn1").innerText = "Salvar"
        this.testeBtn = 0;
    }
}

// com a "var produto" temos a criação de uma nova varáviavel tendo como estrutura os atributos da "class Produto".
var produto = new Produto();

// CÓDIGO DO BANNER ROTATIVO

//
var vtBanner = ["IMG/b1.jpeg", "IMG/b2.jpeg", "IMG/b3.jpeg", "IMG/b4.png"];
let max = vtBanner.length - 1;
let i = 0;

$("#btnAntes").text("<");
$("#btnProx").text(">");
$("#banner").css("backgroundImage", "url(" + vtBanner[0] + ")");

$("#btnAntes").click(function () {
    troca(-1);
});

$("#btnProx").click(function () {
    troca(1);
});

function troca(opr) {
    $("#banner").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeOut(250, function () {
        i += opr
        if (i > max) {
            i = 0;
        } else if (i < 0) {
            i = max
        }
    $("#banner").css("backgroundImage", "url(" + vtBanner[i] + ")").fadeIn(250);
    });
};

// setInterval(() => troca(1), 4000)

function verificarBn () {
    const buttons = [
        document.querySelector('#btn1'),
        document.querySelector('#btn2'),
        document.querySelector('#btn3'),
        document.querySelector('#btn4'),
    ];

    buttons.forEach(button => {
        if(button.checked) {
            $("#banner").css("backgroundImage", "url(" + vtBanner[button.value] + ")").fadeIn(250);
        }
    })
};

$('#btnRadio').click(() => verificarBn());

// $('#b1').click(function(){

//     alert("Botão 1 ok");

//      $('#banner').css("backgroundImage","url(" + vtBanner[0] + ")").fadeIn(1000);
// });

// $('#b2').click(function(){

//     alert("Botão 2 ok");

//      $('#banner').css("backgroundImage","url(" + vtBanner[1] + ")").fadeIn(1000);
// });

// $('#b3').click(function(){

//     alert("Botão 3 ok");

//      $('#banner').css("backgroundImage","url(" + vtBanner[2] + ")").fadeIn(1000);
// });

// $('#b4').click(function(){

//     alert("Botão 4 ok");

//      $('#banner').css("backgroundImage","url(" + vtBanner[3] + ")").fadeIn(1000);
// });



// function verificarB(): void

// function verificarB() {
//     for (let x=1; 1 = vtBanner.length; x++){
//         if($("#b" + x).checked){
//             console.log("b" + x); 
//         }
//     }
// }


// com flexslider

// $(window).carrega(function() {
//     $('#slideR').flexslider({
//       animation: "slide"
//     });
//   });