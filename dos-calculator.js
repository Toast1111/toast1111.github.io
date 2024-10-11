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

function setupCalculator() {
    const calculatorDiv = document.createElement('div');
    calculatorDiv.id = 'modernCalculator';
    calculatorDiv.style.display = 'none';
    calculatorDiv.innerHTML = `
        <div id="calculatorDisplay">0</div>
        <div class="calculatorButtons">
            <button onclick="calculator.clear()">C</button>
            <button onclick="calculator.handleOperator('/')">/</button>
            <button onclick="calculator.handleOperator('*')">*</button>
            <button onclick="calculator.handleOperator('-')">-</button>
            <button onclick="calculator.inputDigit('7')">7</button>
            <button onclick="calculator.inputDigit('8')">8</button>
            <button onclick="calculator.inputDigit('9')">9</button>
            <button onclick="calculator.handleOperator('+')">+</button>
            <button onclick="calculator.inputDigit('4')">4</button>
            <button onclick="calculator.inputDigit('5')">5</button>
            <button onclick="calculator.inputDigit('6')">6</button>
            <button onclick="calculator.inputDigit('1')">1</button>
            <button onclick="calculator.inputDigit('2')">2</button>
            <button onclick="calculator.inputDigit('3')">3</button>
            <button onclick="calculator.handleOperator('=')" class="equalBtn">=</button>
            <button onclick="calculator.inputDigit('0')" class="zeroBtn">0</button>
            <button onclick="calculator.inputDecimal()">.</button>
        </div>
    `;
    document.body.appendChild(calculatorDiv);

    // Add CSS for the calculator
    const style = document.createElement('style');
    style.textContent = `
        #modernCalculator {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 250px;
            background-color: #f0f0f0;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            padding: 10px;
            font-family: Arial, sans-serif;
            z-index: 1000;
        }
        #calculatorDisplay {
            background-color: #fff;
            padding: 10px;
            text-align: right;
            font-size: 24px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
        .calculatorButtons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 5px;
        }
        #modernCalculator button {
            padding: 10px;
            font-size: 18px;
            border: none;
            background-color: #e0e0e0;
            cursor: pointer;
            border-radius: 5px;
        }
        #modernCalculator button:hover {
            background-color: #d0d0d0;
        }
        #modernCalculator .equalBtn {
            grid-row: span 2;
        }
        #modernCalculator .zeroBtn {
            grid-column: span 2;
        }
    `;
    document.head.appendChild(style);
}

function toggleCalculator() {
    const calculator = document.getElementById('modernCalculator');
    calculator.style.display = calculator.style.display === 'none' ? 'block' : 'none';
}

// Add toggle button to the navigation bar
function addToggleButton() {
    const navBar = document.querySelector('.user-info');
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
    navBar.appendChild(toggleButton);
}

// Call these functions when the page loads
window.addEventListener('load', () => {
    setupCalculator();
    addToggleButton();
});
