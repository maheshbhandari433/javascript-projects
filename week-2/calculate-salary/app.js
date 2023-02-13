let hourlySalary = prompt("What is your hourly salary?")
let hours = prompt("How many hours do you work in a day?")

let salary = hourlySalary * hours

if(hours<=7) {
    console.log("Your salary is", salary)
}

else if(hours>7 && hours<=9) {
    extraHours = hours - 7
    extraHourlySalary = (hourlySalary/100)*50
    extraSalary = extraHours * extraHourlySalary
    console.log("Your salary is", salary + extraSalary)
}

else if(hours>=10) {
    doubleHours = hours - 9
    doubleSalary = doubleHours * hourlySalary 
    extraHours = hours - 7 - doubleHours
    extraHourlySalary = (hourlySalary/100)*50
    extraSalary = extraHours * extraHourlySalary
    console.log("Your salary is", salary + doubleSalary + extraSalary)
}

else {
    console.log("Not valid")
}