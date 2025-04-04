const PI = 3.1416;

function sumar(num1, num2) {
  return num1 +num2;
}

function restar(num1, num2)  {
  return num1 - num2;
}

const multiplicar = (num1, num2) => num1 * num2;

const dividir = (num1, num2) => num1/num2;


module.exports = {PI,sumar,restar, multiplicar, dividir};