let sum = 0
let count = 0
let num 

let numCount = Number(prompt('How many numbers do you want to enter?'))

while (numCount != count) {
    
    if (numCount == count) {
        break;
     }

    else {
    num = Number(prompt('Enter your number'))
    sum = sum + num
    count = count + 1
    }

    }

console.log('Average is', sum / count)
