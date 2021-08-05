/**
 *  O erxercício tem que imprimir a seguinte frase: 
 * "Gustavo Pereira de Moraes Souza tem 25 anos, pesa 125 kg,
 * tem 1.85 cm de altura e seu IMC é: ", fazer o cálculo de IMC
 */

const nome = 'Gustavo';
const sobrenome = 'Pereira de Moraes Souza';
const idade = 25;
const peso = 125;
const altura = 1.85;
let imc = peso / (altura * altura);
console.log(`\n ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg, tem ${altura}M e seu IMC é de: ${imc}`);
