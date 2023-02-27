const form = document.querySelector('form')

const user = document.querySelector('#name')
const size = document.querySelectorAll('[name="size"]')
const toppings = document.querySelectorAll('input[type="checkbox"]')
const delivery = document.querySelector('#delivery')

const orderName = document.querySelector('#order-name')
const orderSize = document.querySelector('#order-size')
const orderToppings = document.querySelector('#order-toppings')
const orderDelivery = document.querySelector('#order-delivery')
const orderPrice = document.querySelector('#order-price')


function outputForm () {

    let userName = user.value;
    let sizeResult = ''
    let sizeText = ''
    let price = 0
    let toppingResult = []
    let deliveryResult = delivery.value
    
    
    size.forEach((item) => {
        if(item.checked) {
        sizeResult = item.value
        sizeText = `pizza for ${sizeResult}`
        
    }
})

    switch(sizeResult) {

            case 'two':
            price = price + 7.5
            orderSize.textContent = sizeText
            break;

            case 'four':
            price = price + 10.5
            orderSize.textContent = sizeText
            break;

            case 'six':
            price = price + 12.5
            orderSize.textContent = sizeText
            break;

            case 'eight':
            price = price + 15.5
            orderSize.textContent = sizeText
            break;
    }
    
    toppings.forEach((item) => {
        if(item.checked) {
            toppingResult.push(item.value)
        }
    })

    if(toppingResult.length > 4) {
        price = price + (toppingResult.length - 4) * 0.5
    }

    if(deliveryResult =='home-delivery') {
        price = price + 5
    }


    orderName.textContent = userName
    orderToppings.textContent = toppingResult.join(', ')
    orderDelivery.textContent = deliveryResult
    orderPrice.textContent = price
   

}

form.addEventListener('input', outputForm)
