// Creating Calculator Contanier
const contanier = document.createElement("div")

// Creating Display
const display = document.createElement("div")
const currentInput = document.createElement("div")
const lastInput = document.createElement("div")

// adding the current and last input to the display
display.appendChild(lastInput)
display.appendChild(currentInput)

// Creating button
const zero = document.createElement("button")
const one = document.createElement("button")
const two = document.createElement("button")
const three = document.createElement("button")
const four = document.createElement("button")
const five = document.createElement("button")
const six = document.createElement("button")
const seven = document.createElement("button")
const eight = document.createElement("button")
const nine = document.createElement("button")
const add = document.createElement("button")
const minus = document.createElement("button")
const multiply = document.createElement("button")
const divide = document.createElement("button")
const equal = document.createElement("button")

// Giving the element classes
contanier.classList.add("cal-con")
currentInput.classList.add("current-con")
lastInput.classList.add("last-con")
display.classList.add("dis-con")


// adding the to the html page
document.body.appendChild(contanier)
contanier.appendChild(display)
