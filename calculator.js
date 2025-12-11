
const display = document.getElementById("display");

// Variables

let firstNumber = "";
let secondNumber = "";
let operation = "";
let resultDisplayed = false;

const numberButtons = document.getElementsByClassName("number");

// Number Buttons

for (let i = 0; i < numberButtons.length; i++) {
    const button = numberButtons[i];

    button.addEventListener("click", function() {

        if (resultDisplayed) {
            firstNumber = "";
            resultDisplayed = false;
        }

        firstNumber += button.textContent;
        display.textContent = firstNumber;
    });
}


// Add, Subtract, Multiply, & Divide Buttons 

document.getElementById("add").addEventListener("click", () => calculator("+"));
document.getElementById("subtract").addEventListener("click", () => calculator("-"));
document.getElementById("multiply").addEventListener("click", () => calculator("*"));
document.getElementById("divide").addEventListener("click", () => calculator("/"));


function calculator(op) {
    if (firstNumber === "") return;

    operation = op;
    secondNumber = firstNumber;
    firstNumber = "";
    display.textContent = op;
}

// Equals Buttons

document.getElementById("equals").addEventListener("click", () => {

    if (firstNumber === "" || secondNumber === "" || operation === "") {
        display.textContent = "Error";
        return;
    }

    const num1 = Number(secondNumber);
    const num2 = Number(firstNumber);
    let answer = 0;

    if (operation === "+") {
        answer = num1 + num2;
    } else if (operation === "-") {
        answer = num1 - num2;
    } else if (operation === "*") {
        answer = num1 * num2;
    } else if (operation === "/") {
        if (num2 === 0) {
            display.textContent = "No / 0";
            return;
        }
        answer = num1 / num2;
    }

    display.textContent = answer;

    firstNumber = String(answer);
    secondNumber = "";
    operation = "";
    resultDisplayed = true;
});

// Reset Buttons

document.getElementById("clear").addEventListener("click", () => {
    firstNumber = "";
    secondNumber = "";
    operation = "";
    display.textContent = "0";
});