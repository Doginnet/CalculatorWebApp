let add = (a, b) => a + b;

let subtract = (a, b) => a - b;

let multiply = (a, b) => a * b;

let divide = (a, b) => {
  if (b === 0) {
    throw new Error("Can't divide by zero, you fuck!");
  }
  return a / b;
};

const display = document.querySelector(".display");
const calculateButton = document.querySelector(".calculate");
const numButtons = document.querySelectorAll(".numRow button");
const operatorButtons = document.querySelectorAll(".operators button");

let num1;
let num2 = 0;
let operator;

function calculate() {
  let result;
  //TODO: implement try catch scenario
  try {
    switch (operator) {
      case "+":
        result = add(num1, num2);

        break;
      case "-":
        result = subtract(num1, num2);
        break;
      case "*":
        result = multiply(num1, num2);
        break;
      case "/":
        result = divide(num1, num2);
        break;
    }
  } catch (e) {
    alert(e);
  }
  display.textContent = result;
  num1 = result;
  num2 = 0;
}

export function enterNumbers() {
  let buffNum = this.textContent; //buffer number for the display
  if (num1 === undefined) {
    //if the first number already entered go to else
    let num = this.textContent;
    display.textContent += num;
  } else {
    if (num2 === 0) {
      num2 = Number(this.textContent); //TODO: store display.textContent in a variable
      display.textContent.endsWith("0")
        ? (display.textContent = display.textContent.slice(0, -1))
        : null;
    } else {
      num2 += this.textContent;
    }
    display.textContent += buffNum;
    num2 = Number(num2);
  }
}

function selectOperator() {
  operator = this.textContent;
  num1 = Number(display.textContent);
  display.textContent += operator;
}

function reset() {
  display.textContent = "";
  num1 = undefined;
  num2 = 0;
  operator = undefined;
}

numButtons.forEach((n) => n.addEventListener("click", enterNumbers));
operatorButtons.forEach((op) => op.addEventListener("click", selectOperator));
calculateButton.addEventListener("click", calculate); // need to pass number arguments and the operator

//TODO: fix the num1 zero bug
