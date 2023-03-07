const addButton = document.querySelector('#add-button')
const searchButton = document.querySelector('#search-button')
const calculateDiscount = document.querySelector('#calculate-discount')



function displayDetails(e) {
     e.preventDefault()


let licence = document.querySelector('#licence').value
let maker = document.querySelector('#maker').value
let model = document.querySelector('#model').value
let owner = document.querySelector('#owner').value
let price = document.querySelector('#price').value
let color = document.querySelector('#color').value


let row = 1
let table = document.querySelector('#output-table') 

     let newRow = table.insertRow(row)

     let cell1 = newRow.insertCell(0)
     let cell2 = newRow.insertCell(1)
     let cell3 = newRow.insertCell(2)
     let cell4 = newRow.insertCell(3)
     let cell5 = newRow.insertCell(4)
     let cell6 = newRow.insertCell(5)
     

     let tr = table.getElementsByTagName('tr')
     
      for(let i = 0; i < tr.length; i ++) { 
        
  let itemsArray = []
  let item = localStorage.getItem('localdata')

  if(item != null)
  itemsArray = JSON.parse(item)
  console.log(item)
       
    
    cell1.innerHTML = licence
    cell2.innerHTML = maker
    cell3.innerHTML = model
    cell4.innerHTML = owner
    cell5.innerHTML = price
    cell6.innerHTML = color
  
     } 

     addData()
  }
 

  function addData() {

  let carArray = [] 
  let tr = document.getElementsByTagName('tr')
    console.log(tr)
    
      for(let i = 0; i < tr.length; i ++) {

carArray.push({
  licence: tr[i].getElementsByTagName('td')[0].textContent,
  maker: tr[i].getElementsByTagName('td')[1].textContent,
  model: tr[i].getElementsByTagName('td')[2].textContent,
  owner: tr[i].getElementsByTagName('td')[3].textContent,
  price: tr[i].getElementsByTagName('td')[4].textContent,
  color: tr[i].getElementsByTagName('td')[5].textContent
}) 

    }

localStorage.setItem('localdata', JSON.stringify(carArray)) 

} 


 
function getData() {

  let itemsArray = []
  let item = localStorage.getItem('localdata')
  

  if(item != null)
  itemsArray = JSON.parse(item)

 /*  console.log(item)

   console.log(itemsArray[0].name ,itemsArray[1].name)
   console.log(itemsArray[0].licence ,itemsArray[1].licence) */  

}

 getData() 


function deleteData() {

  localStorage.clear()

}  


function discount() {

  let searchResult = document.querySelector('#search-result')
  let filter = document.getElementById('search-box').value

  let tr = document.getElementsByTagName('tr')

  for(let i = 0; i < tr.length; i ++) {

    let licence = tr[i].getElementsByTagName('td')[0].textContent
    let price = tr[i].getElementsByTagName('td')[4].textContent
    
    if(price > 20000) {
      price = 'Discount is 25% and discount amount is ' + price * 0.25
    } 
    else if(price < 5000) {
      price = 'Discount is 10% and discount amount is ' + price * 0.1
    }
    else if(price > 5000 && price < 20000) {
      price = 'Discount is 10% and discount amount is ' + price * 0.15
    }  
    else {
      price = 'Invalid input'
    }

        if(licence.includes(filter)) {
         
          searchResult.textContent = price

         }

        }

}




  function searchByLicence() {

    let searchResult = document.querySelector('#search-result')
    console.log(searchResult.textContent) 

    let filter = document.getElementById('search-box').value
    
    let tr = document.getElementsByTagName('tr')
   
    for(let i = 0; i < tr.length; i ++) {

    
    let licence = tr[i].getElementsByTagName('td')[0].textContent
    let maker = tr[i].getElementsByTagName('td')[1].textContent
    let model = tr[i].getElementsByTagName('td')[2].textContent
    let owner = tr[i].getElementsByTagName('td')[3].textContent
      

        if(licence.includes(filter)) {

          searchResult.textContent = `Maker of the car is ${maker}, model is ${model} and owner is ${owner}`

         } 

      /*  else {
          searchResult.textContent = 'Not found'
        } */   

         }
   
}  



 function validateforms() {

  let x=document.forms["myForm"][0].value
  console.log(x)

  if (x=== "") {
    alert("form must be filled out");
    
  }
  
}  



addButton.addEventListener('click', displayDetails)
searchButton.addEventListener('click', searchByLicence)
calculateDiscount.addEventListener('click', discount)
