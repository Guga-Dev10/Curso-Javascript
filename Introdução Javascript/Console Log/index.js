// Aprendendo sobre console.log

// o método "log" está dentro do objeto "Console"

// Função console.log();

// A função Console.log tem a função de imprimir algo na tela, também já possui a função de quebra de linha 
// no final da execução do comando completo.

console.log('Gustavo'); // string
console.log("Gustavo"); // string
console.log(`Gustavo 'Pereira' de "Moraes"`) // crase usada em template string

// O uso de ponto e vírgula não é obrigatório

console.log("\n" + 10);
console.log("\n" + 15.25); // o uso de \n funciona em js
console.log("Gustavo", 25, "anos de idade"); 

// tanto + (adição) como , (vírgula) funcionam como agregador de objetos dentro do console.log

console.log(10 + 15) // com dois números o + efetua uma soma ao invés de exibir os dois números
console.log(10, 15.25); // O mais correto seria usar uma vírgula 

/* O console.log é usado também para debugar um código. 
    Sua execução não afeta o funcionamento do front-end, sendo executado apenas no "back"
*/