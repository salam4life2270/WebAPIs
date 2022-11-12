
/** Defining contant variables **/


let numberButtons = document.querySelectorAll('[data-number]')
let operationButtons = document.querySelectorAll('[data-operation]')
let equalsButton = document.querySelector('data-equals')
let allClearButton = document.querySelector('data-all-clear')
let previousOperandTextElement = document.querySelector('data-current-input')
let currentOperandTextElement = document.querySelector('data-answer-screen')




class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  }
} 






function myFunction() {
    window.history.back();
}
