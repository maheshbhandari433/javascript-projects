let form = document.querySelector('form')
let colorOne = document.querySelector('#color1')
let colorTwo = document.querySelector('#color2')
let directions = document.querySelectorAll('input[name="direction"]')
let text = document.querySelector('#p-text')

console.log(form)

function backgroundChange () {

console.log('form activated')
console.log('color one', colorOne.value)
console.log('color two', colorTwo.value)
console.log(directions)
console.log(text.innerHTML)

let directionValue

for (const item of directions) {
if (item.checked) {
    directionValue=item.value
}

}

document.body.style.backgroundImage = `linear-gradient(${directionValue}, ${colorOne.value}, ${colorTwo.value})`

text.innerHTML = document.body.style.backgroundImage 

}

form.addEventListener('change', backgroundChange)




