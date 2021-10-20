// criar a classe com letra maiscula para diferenciar dos atribuitos
// declaração da classe
class Produto {

    // definição dos atributos da classe
    constructor() {

        // "this" condições dos atributos, normalmente se começa com "id=1", mas podemos deixar aberto para o usuário digitar ou inciarmos a partir de outro número.
        this.id = 1;
        // this.nome = "";
        // this.valor = 0;
        this.arrayProdutos = [];
    }

    // salvar o produto digitado pelo usuário no objeto produto.
    salvar() {

        // alert("Salvando");
        let produto = this.lerDados();

        if (this.validarCampos(produto)) {

            // alert("Podemos Salvar?");
            this.adicionar(produto);
            this.listarDados();
            this.cancelar();
        }
        console.log(this.arrayProdutos);
    }

    // método para alimentar a tabela com os produtos
    listarDados() {
        // delcaracnao de uma variável para referenciar o tbody da tabela.
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

            // adicionando uma classe (.center) as colunas
            td_id.classList.add("center");
            td_acoes.classList.add("center");

            // criando um elemento de imagem oara ser colocado na quarta coluna da linha.
            let imgEdit = document.createElement("img");

            // atribuindo a esse elemento o caminho.
            imgEdit.src = "img/edit.png";

            // adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgEdit);

            // criando um elemento de imagem oara ser colocado na quarta coluna da linha.
            let imgDelete = document.createElement("img");

            // atribuindo a esse elemento o caminho.
            imgDelete.src = "img/delete.png";

            // adicionando um filho para a quarta coluna
            td_acoes.appendChild(imgDelete);

            imgDelete.setAttribute("onclick", "produto.deletar(" + this.arrayProdutos[i].id + ")");
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
            for (let i=0; i < this.arrayProdutos.length; i++)
            {
                if(this.arrayProdutos[i].id == idProcurado)
                {
                    this.arrayProdutos.splice(i,1);
                    tbody.deleteRow(i);
                    }
                }
        }
    }
}

// com a "var produto" temos a criação de uma nova varáviavel tendo como estrutura os atributos da "class Produto"
var produto = new Produto();
