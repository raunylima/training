// console.log("CHAMA CHAMA");

// let opcao = 5;
// // permite executar um bloco de código diferente de acordo com cada opção (cada case) especificada.
// switch (opcao) {
//     case 1:
//         console.log("escolhida a opção 1");
//         break;
//     case 2:
//         console.log("escolhida a opção 2");
//         break;
//     case 3:
//         console.log("escolhida a opção 3");
//         break;
//     case 4:
//         console.log("escolhida a opção 4");
//         break;
//     default:
//         console.log("ERROR - Escolha de 1 a 4.");
// }

// nota-se que podemos chamar com o "prompt" para o usuário digite um valor. para forçar o usuário a digitar um número para termos um resultado válido nesse caso colocamos o "Number" para que fosse possível retornar só resultados válidos com os números que queremos. o "default" é usado para retornar valores inválidos.
// let opcao = Number(prompt("Digite um número de 1 a 4: "));
// switch (opcao) {
//     case 1:
//         console.log("escolhida a opção 1");
//         break;
//     case 2:
//         console.log("escolhida a opção 2");
//         break;
//     case 3:
//         console.log("escolhida a opção 3");
//         break;
//     case 4:
//         console.log("escolhida a opção 4");
//         break;
//     default:
//         console.log("ERROR - Escolha de 1 a 4.");
// }


// nota-se que podemos chamar com o "prompt" para o usuário digite um valor. podemos usar o "toLowerCase" para que ao digitar os valores, sejam eles maiúsculos ou minúsculos, o resultado será minúsculo. o inverso ocorre com o "toUpperCase" para retornar somente valores maiúsculos. novamente o "default" é usado para retornar valores inválidos.
let opcao2 = prompt("Digite uma vogal.").toLowerCase();
switch (opcao2){
    case 'a':
        console.log("foi digitada a vogal " + opcao2);
        break;
    case 'e':
        console.log("foi digitada a vogal " + opcao2);
        break;
    case 'i':
        console.log("foi digitada a vogal " + opcao2);
        break;
    case 'o':
        console.log("foi digitada a vogal " + opcao2);
        break;   
    case 'u':
        console.log("foi digitada a vogal " + opcao2);
        break;  
    default:
        console.log("ERROR - Escolha uma vogal válida.");
}