class Calculator {
    constructor(previousOperandDiv, currentOperandDiv) {
        this.previousOperandDiv_ = previousOperandDiv;
        this.currentOperandDiv_ = currentOperandDiv;
        this.currentOperand_ = ' ';
        this.previousOperand_ = ' ';
        this.operation_ = '';
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand_.includes('.')) {
            return;
        }
        this.currentOperand_ = this.currentOperand_.toString() + number.toString();

    }

    updateDisplay() {
        this.currentOperandDiv_.innerText = this.currentOperand_;
        if (this.operation_ !== ' ') {
            this.previousOperandDiv_.innerText =
                `${this.previousOperand_} ${this.operation_}`;
        } else {
            this.previousOperandDiv_.innerText = '';

        }
    }
        clear()
        {
            this.currentOperand_ = ' ';
            this.previousOperand_ = ' ';
            this.operation_ = '';
        }
        delete ()
        {
            this.currentOperand_ = this.currentOperand_.slice(0, -1);
        }
        setOperation(operation)
        {
            if (this.currentOperand_ === '') {
                return;
            }
            this.operation_ = operation;
            this.previousOperand_ = this.currentOperand_;
            this.currentOperand_ = '';
        }
        compute()
        {
            let result;
            const previous=parseFloat(this.previousOperand_);
            const current =parseFloat(this.currentOperand_);
            if(isNaN(previous)||isNaN(current)) return
            switch(this.operation_)
            {
                case '+':
                    result = previous + current;
                    break;
                case '-':
                    result = previous - current;
                    break;
                case '*':
                    result = previous * current;
                    break;
                case '/':
                    result = previous / current;
                    break;
                case '%':
                    result = previous % current;
                    break;
                default:
                    return;

            }
            this.currentOperand_=result.toString();
            this.operation_= ' ';
            this.previousOperand_ =' ';
        }


}
function run()
{
        const numberButtons = document.querySelectorAll('[data-number]');
        const operationButtons = document.querySelectorAll('[data-operation]');
        const equalsButton = document.querySelector('[data-equals]');
        const deleteButton = document.querySelector('[data-delete]');
        const allClearButton = document.querySelector('[data-all-clear]');
        const previousOperandDiv = document.querySelector('[data-previous-operand]');
        const currentOperandDiv = document.querySelector('[data-current-operand]');

        const calculator = new Calculator(previousOperandDiv, currentOperandDiv);

        numberButtons.forEach((button) => {
            button.addEventListener('click', () => {
                calculator.appendNumber(button.innerText);
                calculator.updateDisplay();
            })
        })
    operationButtons.forEach((button) => {
        button.addEventListener('click', () => {
            calculator.setOperation(button.innerText);
            calculator.updateDisplay();
        })
    })
    allClearButton.addEventListener('click',() =>{
        calculator.clear();
        calculator.updateDisplay();
    })
    deleteButton.addEventListener('click',() =>{
        calculator.delete ();
        calculator.updateDisplay();
    })

    equalsButton.addEventListener('click',() =>{
        calculator.compute()
        calculator.updateDisplay()
    })

    }
run();