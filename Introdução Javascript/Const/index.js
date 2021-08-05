/**
 *  Uma constante precisa ser inicializada e declarada ao mesmo
 * tempo.
 *  Não podemos criar constantes com palavras reservadas
 *  Constantes precisam ter nomes significativos
 *  Não pode começar o nome de uma constante com um número
 *  Não podem conter espaços ou traços
 *  Utilizar camelCase
 *  Case-Sensitive
 *  Não pode ser modificado um valor de uma constante
 *  Não utilizar var, utilizar const
 */

const nome = 'Gustavo';
console.log(nome);
// nome = 'Guilherme'; o nome não será alterado pois o Js entende que
// não deve mudar o valor da variável por se tratar de uma variável const

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;

console.log(resultado);

/**
 *  Para descobrir o tipo de uma variável caso seu 
 * tipo não seja entendido utilizamos o seguinte código:
 * 
 * console.log(typeof(nome da variável));
 * 
 *  Assim poderemos descobrir qual o tipo da variável
 */

console.log(typeof(resultado)); // variável do tipo number
console.log(typeof(nome)); // variável do tipo string