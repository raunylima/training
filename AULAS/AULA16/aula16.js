let caixa = document.getElementById("caixaMenor");

function chamarJanela(){
    caixa.style.display = "block";
    if(document.getElementById("opcao1").checked) document.getElementById("mensagemCaixa").innerHTML = "Você Escolheu Pedra Letícia";
    else if(document.getElementById("opcao2").checked) document.getElementById("mensagemCaixa").innerHTML = "Você Escolheu Pato Fu";
    else if(document.getElementById("opcao3").checked) document.getElementById("mensagemCaixa").innerHTML = "Você Não Escolheu Nenhuma Banda";
    else document.getElementById("mensagemCaixa").innerHTML = "Você Não Escolheu Nada";
}
function fecharJanela (){
    caixa.style.display = "none";
    for (let i=1; i<4; i++){
        let check = document.getElementById("opcao"+i);
        check.checked = false
    }
}