class Calculator {
  constructor() {
    this.result = 0;
  }

  add(a) {
    this.result += a;
  }

  subtract(a) {
    this.result -= a;
  }

  multiply(a) {
    this.result *= a;
  }

  divide(a) {
    if (a === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    this.result /= a;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const cleanedExpression = expression.replace(/\s+/g, "");

    if (/[^0-9+\-*/().]/.test(cleanedExpression)) {
      throw new Error("Invalid characters in the expression.");
    }

    if (/\/\s*0/.test(cleanedExpression)) {
      throw new Error("Division by zero is not allowed.");
    }

    try {
      this.result = eval(cleanedExpression);
    } catch (error) {
      throw new Error("Error evaluating the expression: " + error.message);
    }
  }
}

module.exports = Calculator;
