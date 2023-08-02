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
const allClear = document.createElement("button")
// creating input con
const input_con = document.createElement("div")

// Giving the button content
zero.textContent = 0
one.textContent = 1
two.textContent = 2
three.textContent = 3
four.textContent = 4
five.textContent = 5
six.textContent = 6
seven.textContent = 7
eight.textContent = 8
nine.textContent = 9
multiply.textContent = "X"
add.textContent = "+"
divide.textContent = "÷"
minus.textContent = "-"
allClear.textContent = "A/C"
equal.textContent = "="


// adding button to input-con
input_con.appendChild(seven)
input_con.appendChild(eight)
input_con.appendChild(nine)
input_con.appendChild(add)
input_con.appendChild(four)
input_con.appendChild(five)
input_con.appendChild(six)
input_con.appendChild(multiply)
input_con.appendChild(one)
input_con.appendChild(two)
input_con.appendChild(three)
input_con.appendChild(minus)
input_con.appendChild(zero)
input_con.appendChild(divide)
input_con.appendChild(allClear)
input_con.appendChild(equal)

// Giving the element classes
contanier.classList.add("cal-con")

currentInput.classList.add("current-con")
lastInput.classList.add("last-con")
display.classList.add("dis-con")

input_con.classList.add("input-con")

// adding the to the html page
document.body.appendChild(contanier)
contanier.appendChild(display)
contanier.appendChild(input_con)

