let displayValue = '';
let firstNumber = '';
let operator = '';
let secondNumber = '';

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function setOperator(op) {
  if (displayValue !== '') {
    firstNumber = displayValue;
    operator = op;
    displayValue = '';
  }
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return 'Error';
  }
  return a / b;
}

function operate(operator, a, b) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Error';
  }
}

function calculate() {
  if (firstNumber !== '' && operator !== '' && displayValue !== '') {
    secondNumber = displayValue;
    displayValue = operate(operator, firstNumber, secondNumber);
    document.getElementById('display').value = displayValue;
    firstNumber = '';
    operator = '';
    secondNumber = '';
  }
}
