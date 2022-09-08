const validate = require("validate.js");
const CalculadoraConstraint = require("./validate");

const Calculadora = {
  soma(x, y) {
    const validateX = validate({ x }, CalculadoraConstraint.calculadoraConstraint);
    const validateY = validate({ y }, CalculadoraConstraint.calculadoraConstraint);
    if (validateX !== undefined || validateY !== undefined) {
      return "Error";
    }
    let soma = x + y;
    return soma;
  },

  subtracao(x, y) {
    const validateX = validate({ x }, CalculadoraConstraint.calculadoraConstraint);
    const validateY = validate({ y }, CalculadoraConstraint.calculadoraConstraint);
    if (validateX !== undefined || validateY !== undefined) {
      return "Error";
    }
    let sub = x - y;
    return sub;
  },

  multiplicacao(x, y) {
    const validateX = validate({ x }, CalculadoraConstraint.calculadoraConstraint);
    const validateY = validate({ y }, CalculadoraConstraint.calculadoraConstraint);
    if (validateX !== undefined || validateY !== undefined) {
      return "Error";
    }
    let mult = x * y;
    return mult;
  },

  divisao(x, y) {
    const validateX = validate({ x }, CalculadoraConstraint.calculadoraConstraint);
    const validateY = validate({ y }, CalculadoraConstraint.calculadoraConstraint);
    if (validateX !== undefined || validateY !== undefined) {
      return "Error";
    }
    let div = x / y;
    return div;
  },

  exponenciacao(x, y) {
    const validateX = validate({ x }, CalculadoraConstraint.calculadoraConstraint);
    const validateY = validate({ y }, CalculadoraConstraint.calculadoraConstraint);
    if (validateX !== undefined || validateY !== undefined) {
      return "Error";
    }
    let exp = x ** y;
    return exp;
  },
};

module.exports = Calculadora;
