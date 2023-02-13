let firstNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter your second number'));
let thirdNumber = Number(prompt('Enter your second number'));

if (firstNumber >= 0 || secondNumber >= 0 || thirdNumber >= 0) {
    console.log('Sum is', firstNumber + secondNumber + thirdNumber, 'Multiplication is', firstNumber * secondNumber * thirdNumber)
}
   
    else  if (firstNumber < 0 && secondNumber < 0 && thirdNumber < 0) {
        console.log('Numbers are negative.')
}

else {
    console.log('Invalid.')
}