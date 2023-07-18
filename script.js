// Task 1: stringLength(string)

function capitalize(string) {
  if (string.length === 0) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Task 2: reverseString(string)

function reverseString(string) {
  return string.split('').reverse().join('');
}

// Task 3: Calculator class

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

// Task 4: capitalize(string)

function capitalize(string) {
  if (string.length === 0) {
    return string;
  }
  return string[0].toUpperCase() + string.slice(1);
}

module.exports = { stringLength, reverseString, Calculator, capitalize };