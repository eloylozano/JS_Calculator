document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            handleButtonClick(button.id);
            animateButtonClick(button);
        });
    });
});


let currentInput = '';
let operator = '';
let firstOperand = '';
let secondOperand = '';

function handleButtonClick(buttonId) {
    if (!isNaN(buttonId) || buttonId === '00') {
        currentInput += buttonId;
        updateDisplay(currentInput);

    } else if (buttonId === 'suma' || buttonId === 'restar' || buttonId === 'multiplicar' || buttonId === 'dividir' || buttonId === 'porcentaje') {
        if (firstOperand && currentInput) {
            secondOperand = currentInput;
            performCalculation();
        } else {
            firstOperand = currentInput;
        }
        operator = buttonId;
        currentInput = '';

    } else if (buttonId === 'equals') {
        // Si el botón es el igual
        secondOperand = currentInput;
        performCalculation();
        currentInput = '';

    } else if (buttonId === 'decimal') {
        // Si el botón es el punto decimal
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay(currentInput);
        }

    } else if (buttonId === 'borrar') {
        // Si el botón es para borrar
        currentInput = '';
        operator = '';
        firstOperand = '';
        secondOperand = '';
        updateDisplay('Teclea un núm.');
    }
}

function updateDisplay(value) {
    const resultDisplay = document.getElementById('result');
    resultDisplay.textContent = value;
}

function performCalculation() {
    let result;
    const firstNum = parseFloat(firstOperand);
    const secondNum = parseFloat(secondOperand);

    if (operator === 'suma') {
        result = firstNum + secondNum;
    } else if (operator === 'restar') {
        result = firstNum - secondNum;
    } else if (operator === 'multiplicar') {
        result = firstNum * secondNum;
    } else if (operator === 'dividir') {
        result = firstNum / secondNum;
    } else if (operator === 'porcentaje') {
        result = firstNum * (secondNum / 100);
    }

    updateDisplay(result);
    firstOperand = result;
    secondOperand = '';
}
