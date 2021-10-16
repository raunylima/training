const apresentaDados = (resultado) => {
    for (let campo in resultado){
        if (document.querySelector("#" + campo)){
            console.log(campo);
            document.querySelector("#" + campo).value = resultado[campo];
        }
    }
}

function consultaCep() {
    let cepDigitado = document.getElementById("cep");

    if (cepDigitado.value == "") {
        cepDigitado.style.border = "3px solid red"
    }
    else {
        let cepProcurado = cepDigitado.value.replace("-","");
        console.log(cepProcurado);

        fetch(`http://viacep.com.br/ws/${cepProcurado}/json/`)
        .then(response => {response.json()
        .then(data => console.log(apresentaDados(data)))
        })
        .catch( error => console.log("CEP não encontrado"))
    }
}