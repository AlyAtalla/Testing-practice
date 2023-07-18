const { stringLength, reverseString, Calculator, capitalize } = require('./script');

test('stringLength should return the correct length of the string', () => {
  expect(stringLength('Hello, World!')).toBe(13);
});

test('stringLength should throw an error for empty string', () => {
  expect(() => stringLength('')).toThrow('String must have at least 1 character.');
});

test('stringLength should throw an error for string longer than 10 characters', () => {
  expect(() => stringLength('ThisIsTooLong')).toThrow('String cannot have more than 10 characters.');
});

test('reverseString should reverse the input string', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});

test('capitalize should capitalize the first character of the string', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!');
});

test('capitalize should return an empty string if input is empty', () => {
  expect(capitalize('')).toBe('');
});

// Test for reverseString function
test('reverseString should reverse the input string', () => {
  expect(reverseString('Hello, World!')).toBe('!dlroW ,olleH');
});

// Test for Calculator class
describe('Calculator', () => {
  const calculator = new Calculator();

  describe('add', () => {
    test('should add two numbers correctly', () => {
      expect(calculator.add(5, 3)).toBe(8);
    });

    // Add more tests for the add method if needed
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      expect(calculator.subtract(10, 4)).toBe(6);
    });

    // Add more tests for the subtract method if needed
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(10, 0)).toThrow('Cannot divide by zero.');
    });

    // Add more tests for the divide method if needed
  });

  describe('multiply', () => {
    test('should multiply two numbers correctly', () => {
      expect(calculator.multiply(4, 3)).toBe(12);
    });

    // Add more tests for the multiply method if needed
  });
});

// Test for capitalize function
test('capitalize should capitalize the first character of the string', () => {
  expect(capitalize('hello, world!')).toBe('Hello, world!');
});

test('capitalize should return an empty string if input is empty', () => {
  expect(capitalize('')).toBe('');
});