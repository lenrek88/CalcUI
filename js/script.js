function calc(opeartion, a ,b) {
    switch (opeartion) {
        case 'sum':
            return a + b;
        case 'sub':
            return a - b;
        case 'mult':
            return a * b;
        case 'div':
            return a / b;
        default:
            return a;
    }
}
let line = document.querySelector('.line')
let clearButton = document.querySelector('.clear')
let deleteButton = document.querySelector('.delete')
let numbers = document.querySelectorAll('.number')
let operations = document.querySelectorAll('.operation')

console.log(numbers)
console.log(operations)
console.log(line)

let firstNumber = 0;
let currentNumber = 0;
let operation = 'sum';

function numberClick() {
    if (currentNumber === null){
        currentNumber = 0;
    }
    if (currentNumber < 10000) {
        currentNumber += this.textContent;
        update();
    }
}

function operationClick() {
    if (currentNumber != null){
        getResult(operations, firstNumber, currentNumber);
        operation = this.id;
        firstNumber = currentNumber;
        currentNumber = null;
    }
    else {
        operations = this.id;
    }
}

function getResult() {
    currentNumber = calc(operation, firstNumber, currentNumber);
    update();
    if (isNaN(currentNumber)){
        setTimeout(() => {
            clearLine();
        }, 1000)
    }
}

function clearLine() {
    firstNumber = 0;
    currentNumber = 0;
    operation = 'sum';
    update();
}

function undo() {
    currentNumber = Math.trunc(currentNumber / 10);
    update();
}

function update() {
    currentNumber = Math.floor(currentNumber * 100) / 100;
    line.textContent = currentNumber;
}





window.onload = function () {
    for (let num of numbers) {
        num.addEventListener('click', numberClick)
    }
    for (let op of operations) {
        op.addEventListener('click', operationClick)
    }
    clearButton.addEventListener('click', clearLine)
    deleteButton.addEventListener('click', undo)

}




