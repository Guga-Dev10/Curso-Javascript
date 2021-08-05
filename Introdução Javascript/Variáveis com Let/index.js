// Variáveis com Let

let nome = 'Gustavo';

console.log("\nO", nome, "nasceu em 1996");
console.log("Em 2000", nome, "conheceu Maria");
console.log("João casou-se com Maria em 2012");
console.log("Maria teve um filho com João em 2015");
console.log("O filho de João se chama Eduardo");

/**
 *  Para declarar uma variável é preciso atentar para algumas
 * regras de boas práticas ou possíveis erros que essas variáveis
 * podem gerar no código.
 * 
 *  não podemos criar variáveis com palavras reservadas
 *  Variáveis precisam ter nomes significativos
 *  Não pode começar o nome de uma variável com um número
 *  Não podem conter espaços ou traços no nome de uma variável
 *  Utilizar camel case (camelCase) = Ex: "nomeCompletoDoCliente"
 *  Variáveis Case-sensitive = Letras e símbolos farão diferença na
 * declaração da variável e serão percebidas na declaração, ex:
 * "nomeCliente e nomecliente", assim as duas formas serão diferenciadas
 * pelo motor do Js
 *  Não podemos redeclarar uma variável utilizando a plavra LET, somente
 * podemos mudar seu valor.
 *  Não utilizar VAR, utilizar Let sempre que a variável possa
 * sofrer alguma mudança
 */