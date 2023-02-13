
const outputForm = document.getElementById('output-form')
const submitButton = document.getElementById('submit-button')

let sizePrice = 7.50
let toppingPrice = 0
let count = 0
let deliveryPrice = 0


function submit (e) {
                e.preventDefault()
        
                const username = document.getElementById('name').value
                console.log(username)
        
                const size = document.querySelector('input[name="size"]:checked').value
                console.log(size)
                if (size === 'for-two') {
                        sizePrice = sizePrice + 0
                }
                else if (size === 'for-four'){
                        sizePrice = sizePrice + 3

                }

                else if (size === 'for-six'){
                        sizePrice = sizePrice + 5

                }

                else if (size === 'for-eight'){
                        sizePrice = sizePrice + 8

                }
                
                console.log(sizePrice)

                const checkedTopping = []
                topping = document.getElementsByName('topping')
               /*  console.log(topping) */
               
                for (let i = 0; i < topping.length; i++) {
                if(topping[i].checked) {
                        checkedTopping.push(topping[i].value)
                        count = count + 1
                        if (count > 3) {
                                toppingPrice = toppingPrice + 0.50
                        }
                }
                }
                console.log(checkedTopping)
                console.log(toppingPrice)
        
        
                const deliveryMethod = document.querySelector('#delivery-option').value

                if (deliveryMethod ==='delivery-home') {
                        deliveryPrice = deliveryPrice + 5
                }
                console.log(deliveryMethod)
                console.log(deliveryPrice)


                outputForm.innerHTML = `<b>Your Order is:</b><br>
                Name: <i>${username}</i><br>
                Size: <i>${size}</i><br>
                Toppings: <i>${checkedTopping}</i><br>
                Delivery: <i>${deliveryMethod}</i><br>
                <b>Total price is</b> ${sizePrice + toppingPrice + deliveryPrice}€`
               
        }
        
        
 submitButton.addEventListener("click", submit)
 









       

       
       
       
       
        
        
    
     
    
    





