// dos-calculator.js
class DOSCalculator {
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

const calculator = new DOSCalculator();

function setupCalculator() {
    const calculatorDiv = document.createElement('div');
    calculatorDiv.id = 'dosCalculator';
    calculatorDiv.style.display = 'none';
    calculatorDiv.innerHTML = `
        <div id="calculatorDisplay">0</div>
        <button onclick="calculator.clear()">C</button>
        <button onclick="calculator.inputDigit('7')">7</button>
        <button onclick="calculator.inputDigit('8')">8</button>
        <button onclick="calculator.inputDigit('9')">9</button>
        <button onclick="calculator.handleOperator('/')">/</button>
        <button onclick="calculator.inputDigit('4')">4</button>
        <button onclick="calculator.inputDigit('5')">5</button>
        <button onclick="calculator.inputDigit('6')">6</button>
        <button onclick="calculator.handleOperator('*')">*</button>
        <button onclick="calculator.inputDigit('1')">1</button>
        <button onclick="calculator.inputDigit('2')">2</button>
        <button onclick="calculator.inputDigit('3')">3</button>
        <button onclick="calculator.handleOperator('-')">-</button>
        <button onclick="calculator.inputDigit('0')">0</button>
        <button onclick="calculator.inputDecimal()">.</button>
        <button onclick="calculator.handleOperator('=')">=</button>
        <button onclick="calculator.handleOperator('+')">+</button>
    `;
    document.body.appendChild(calculatorDiv);
}

function toggleCalculator() {
    const calculator = document.getElementById('dosCalculator');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
}

// Call this function when the page loads
window.addEventListener('load', setupCalculator);
