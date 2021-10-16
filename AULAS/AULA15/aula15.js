// VALIDAÇÃO DE FORMULÁRIO

function enviarDados1() {
    // o primeiro "if" usado para validação do nome no formulário. Ao deixar em branco ou digitar menos de 3 caracteres é exibido um alerta na página informando que deve ser preenchido corretamente. // 
    if (document.faleConosco.nome.value == "" || document.faleConosco.nome.value.length < 3) {
        alert("Preencha o Campo Nome Corretamente!");
        document.faleConosco.nome.focus();
        return false;
    }

    // o segundo "if" usado para validação do email no formulário. Ao deixar em branco ou digitar menos de 3 caracteres é exibido um alerta na página informando que deve ser preenchido corretamente. // 
    if (document.faleConosco.email.value == "" || document.faleConosco.email.value.length < 3) {
        alert("Preencha o Campo E-Mail Corretamente!");
        document.faleConosco.email.focus();
        return false;
    }

    // o terciero "if" usado para validação do assunto no formulário. Ao deixar em branco ou digitar menos de 10 caracteres é exibido um alerta na página informando que deve ser preenchido corretamente.
    if (document.faleConosco.assunto.value == "" || document.faleConosco.assunto.value.length < 10) {
        alert("Detalhe Melhor Seu Assunto!");
        document.faleConosco.assunto.focus();
        return false;
    }

    // o último "if" usado para validação do assunto no formulário. Ao deixar em branco ou digitar menos de 10 caracteres é exibido um alerta na página informando que deve ser preenchido corretamente.
    if (document.faleConosco.mensagem.value == "" || document.faleConosco.mensagem.value.length < 20) {
        alert("Detalhe Melhor Sua Mensagem!");
        document.faleConosco.mensagem.focus();
        return false;
    }

    // caso não seja encontrado erro nas validações anteriores é exibida uma mensagem no final informando que o cadastro foi realizado com sucesso.
    {
        alert("Cadastro Enviado com Sucesso!");
    }
}

// VALIDADOR DE CPF

function verificarCpf(c){
    var i;
    s = c;
    //O substr() extrai caracteres de comprimento de um str , contando a partir do indice inicial. Se o start for um número positivo, o indice começa a contar no início da string. ... Se o start for um número negativo, o indice começa a contar a partir do final da string.
    var c = s.substr(0, 9);
    var dv = s.substr(9, 2);
    var d1 = 0;
    var v = false;

for(i=0; i<9;i++) {
    //o charAt() método retorna o caractere no índice especificado em uma string. O índice do primeiro caracter é 0, o segundo caracter é 1, e assim por diante.
    d1 +=c.charAt(i) *(10 - i);
}

if (d1 == 0){
    alert("CPF inválido")
    v =true;
    return false;
}

d1 = 11 - (d1 %11);
if(d1>9) d1 = 0;
if (dv.charAt(0) !=d1) {
    alert("CPF inválido")
    v = true;
    return false;
}

d1 *=2;
for (i=0; i<9;i++){
    d1 += c.charAt(i) * (11 - i);
}

d1 = 11 - (d1 % 11);
if(d1 >9) d1 = 0;
if(dv.charAt(1) !=d1) {
    alert("CPF Inválido")
    v = true;
    return false;
}

if(!v) {
    alert(c + "CPF Válido")
}
}

// EVENTO ONKEY

// o onkeydown detecta quando a tecla está sendo pressionada (BEM RÁPIDO)
// o onkeyup detecta quando a tecla não está sendo pressionada (FIXA NA TELA)
// e o onkeypress detecta quando a tecla ALT, CONTROL ou SHIFT.
// o primeiro evento a ocorrer no processo de digitar uma tecla é o onkeydown, depois imediatamente onkeypress, então o sistema captura a cada teclada e depois ocorre o onkeyup. no exemplo abaixo, um código simples que mostra "DOWN" quando estamos apertando uma tecla e mostra o texto "UP" quando solto:

function down() {
    document.getElementById("status").innerHTML = "DOWN";
}

function up() {
    document.getElementById("status").innerHTML = "UP";
}

// EVENTO 

const x = document.getElementById("clickIt");
x.addEventListener("click", Respond);
function Respond (e) {
    document.getElementById("effect").innerHTML = "Tipo de Evento Gatilho = " + e.type + "<br><br>";
    document.getElementById("effect").innerHTML = "Agora Clique no Evento para Desabilitar!" + "<br><br>";
    x.innerText = "Clique Desabilitado :(";
    x.removeEventListener("click", Respond);
}