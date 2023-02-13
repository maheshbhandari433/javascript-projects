let sum = 0;
let count = 0
let num


while (num != 0) {
    num = Number(prompt('Enter number'));
    if (num == 0) {
        break;
    }
    else {
    sum = sum + num 
    count = count + 1 
}
}

console.log('Average is', sum / count)
