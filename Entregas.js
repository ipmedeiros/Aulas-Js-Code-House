// Solicita o nome do usuário
let nome = prompt("Digite seu nome:");

// Solicita um número do usuário
let numero = prompt("Digite um número:");

// Converte a entrada de texto para número
numero = Number(numero);

// Faz a soma do número mais 10
let soma = numero + 10;

// Calcula o número vezes 2
let vezes2 = numero * 2;

// Exibe uma saudação com o nome no console
console.log("Olá, " + nome + "!");

// Mostra o resultado da soma no console
console.log("O número que você digitou mais 10 é: " + soma);

// Exibe mensagens com o nome, resultado da soma e o número vezes 2 em um alert
alert("Nome: " + nome + ", Resultado da soma: " + soma + ", Seu número vezes 2 é: " + vezes2);