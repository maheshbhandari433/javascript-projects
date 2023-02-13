let num
let sum = 0
let count = 0

for (let x = 0; x < 5; x++) {
    num = Number(prompt('Enter your number'));
    sum = sum + num
    count = count + 1
    
}

console.log(' Average is', sum / count)