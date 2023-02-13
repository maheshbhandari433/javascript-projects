let sum = 0;
let count = 0
let num
let confirmStatus 

while (num != 0) {
    num = Number(prompt('Enter number'));
    confirmStatus = confirm('Do you want to continue?')
    if (confirmStatus == false) {
    break;
    }
    else {
    sum = sum + num 
    count = count + 1 
}
}

console.log('Average is', sum / count)
