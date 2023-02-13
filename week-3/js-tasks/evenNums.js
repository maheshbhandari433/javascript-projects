let num
let count = 0

for (let x = 0; x < 5; x++) {
    num = Number(prompt('Enter your number'));
    
   if (num % 2 == 0) {
    count = count + 1
   }
    
}

console.log('Even numbers are', count, 'times.')