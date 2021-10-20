let caixa = document.getElementById("caixaG");

function abrirJanela() {
    caixa.style.display = "block";
    if (document.getElementById("opcao1").checked) document.getElementById("mensagemNaCaixa").innerHTML = "Você escolheu Casa e Carro";
    else if (document.getElementById("opcao2").checked) document.getElementById("mensagemNaCaixa").innerHTML = "Você escolheu Conhecimento Infinito";
    else if (document.getElementById("opcao3").checked) document.getElementById("mensagemNaCaixa").innerHTML = "Você escolheu Saúde";
    else if (document.getElementById("opcao4").checked) document.getElementById("mensagemNaCaixa").innerHTML = "Você escolheu Poderes";
    else if (document.getElementById("opcao5").checked) document.getElementById("mensagemNaCaixa").innerHTML = "Você escolheu Viajar";
    else if (document.getElementById("opcao6").checked) document.getElementById("mensagemNaCaixa").innerHTML = "Você Não Gosta de Pílulas?";
    else document.getElementById("mensagemNaCaixa").innerHTML = "Você não escolheu nada";
}

function fecharJanela() {
    caixa.style.display = "none";
    for (let i = 1; i < 7; i++) {
    let check = document.getElementById("opcao" + i);
    check.checked = false;
    }
}