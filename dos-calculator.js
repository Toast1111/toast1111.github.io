// dos-calculator.js
class ModernCalculator {
    constructor() {
        this.display = '0';
        this.currentValue = 0;
        this.operator = null;
        this.waitingForSecondOperand = false;
    }

    updateDisplay() {
        document.getElementById('calculatorDisplay').textContent = this.display;
    }

    inputDigit(digit) {
        if (this.waitingForSecondOperand) {
            this.display = digit;
            this.waitingForSecondOperand = false;
        } else {
            this.display = this.display === '0' ? digit : this.display + digit;
        }
        this.updateDisplay();
    }

    inputDecimal() {
        if (!this.display.includes('.')) {
            this.display += '.';
            this.updateDisplay();
        }
    }

    clear() {
        this.display = '0';
        this.currentValue = 0;
        this.operator = null;
        this.waitingForSecondOperand = false;
        this.updateDisplay();
    }

    handleOperator(nextOperator) {
        const inputValue = parseFloat(this.display);

        if (this.operator && this.waitingForSecondOperand) {
            this.operator = nextOperator;
            return;
        }

        if (this.currentValue === 0) {
            this.currentValue = inputValue;
        } else if (this.operator) {
            const result = this.performCalculation[this.operator](this.currentValue, inputValue);
            this.display = String(result);
            this.currentValue = result;
        }

        this.waitingForSecondOperand = true;
        this.operator = nextOperator;
        this.updateDisplay();
    }

    performCalculation = {
        '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
        '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
        '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
        '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
        '=': (firstOperand, secondOperand) => secondOperand
    };
}

const calculator = new ModernCalculator();

function toggleCalculator() {
    const calculatorElement = document.getElementById('modernCalculator');
    if (calculatorElement) {
        calculatorElement.style.display = calculatorElement.style.display === 'none' ? 'block' : 'none';
    } else {
        console.error('Calculator element not found');
    }
}

function addToggleButton() {
    console.log("Attempting to add the toggle button...");
    const userInfo = document.querySelector('.user-info');
    if (userInfo) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = '🖩';
        toggleButton.onclick = toggleCalculator;
        toggleButton.style.cssText = `
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            margin-left: 10px;
        `;
        userInfo.appendChild(toggleButton);
    } else {
        console.error('User info element not found');
    }
}

function addToggleButton() {
    const userInfo = document.querySelector('.user-info');
    if (userInfo) {
        const toggleButton = document.createElement('button');
        toggleButton.textContent = '🖩';
        toggleButton.onclick = toggleCalculator;
        toggleButton.style.cssText = `
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
            margin-left: 10px;
        `;
        userInfo.appendChild(toggleButton);
    } else {
        console.error('User info element not found');
    }
}

// Call this function when the page loads
window.addEventListener('load', addToggleButton);
