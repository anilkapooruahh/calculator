let firstOperand = ''
let secondOperand = '' 
let currentOperator = null
let isScreenReset = false

//DOM
const numberButtons = document.querySelectorAll('button.val')
const operatorButtons = document.querySelectorAll('button.op')
const equalButton = document.querySelector('button.equal')
const currentOperation = document.querySelector('div.currentOperand')
const lastOperation = document.querySelector('div.lastOperand')
const clearButton = document.querySelector('button.clear')

//Event handling
numberButtons.forEach(button => {
    button.addEventListener('click', () => addNumber(button.textContent))
})

operatorButtons.forEach(button => {
    button.addEventListener('click', () => setOperator(button.textContent))
})

equalButton.addEventListener('click', () => evaluate())


clearButton.addEventListener('click', () => clear())

const clear = () => {
    currentOperation.textContent = ''
    lastOperation.textContent = ''
    currentOperator = null
}

const addNumber = number => {
    if (currentOperation.textContent === '0' || isScreenReset) {
        resetScreen()
    }
    currentOperation.textContent += number
}

const setOperator = operator => {
    if (currentOperator !== null) {
        evaluate()
    }
    firstOperand = currentOperation.textContent
    currentOperator = operator
    lastOperation.textContent = `${firstOperand} ${currentOperator}`
    isScreenReset = true
}

evaluate = () => {
    if (currentOperation === null || isScreenReset) return
    if (currentOperation === '÷' && currentOperation.textContent === '0') {
        window.alert('You cannot divide by 0')
    }
    secondOperand = currentOperation.textContent
    currentOperation.textContent = operate(currentOperator, firstOperand, secondOperand)
    lastOperation.textContent = `${firstOperand} ${currentOperator} ${secondOperand} =`
   
}


const resetScreen = () => {
    currentOperation.textContent = ''
    isScreenReset = false
}



const add = (i, j) => i + j
const subtract = (i, j) => i - j
const multiply = (i, j) => i * j
const divide = (i, j) => i / j

const operate = (op, i, j) => {
    i = Number(i)
    j = Number(j)
    
    switch (op) {
        case '+':
            return add(i, j)
            break;
        case '-':
            return subtract(i, j)
            break;
        case '*':
            return multiply(i, j)
            break;
        case '÷':
            return divide(i, j)
            break;
        default:
            window.alert("Unsupported Operation")
            break
    }
}

