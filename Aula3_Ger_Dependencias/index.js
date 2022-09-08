const Calculadora = require("./src/calculadora");

let soma_resto = Calculadora.soma("x", "y"); //exemplo para uso do validate em caso de "error"
let subtracao_resto = Calculadora.subtracao(5, 5);
let multiplicacao_resto = Calculadora.multiplicacao(10, 100);
let divisao_resto = Calculadora.divisao(10, 0); //validate tambem trata o caso de div. por 0 (tende a infinito)
let exponenciacao_resto = Calculadora.exponenciacao(3, 4);

console.log(soma_resto);
console.log(subtracao_resto);
console.log(multiplicacao_resto);
console.log(divisao_resto);
console.log(exponenciacao_resto);
