const addButton = document.querySelector('#add-button')
const searchButton = document.querySelector('#search-button')



function displayDetails(e) {
     e.preventDefault()  

const name = document.querySelector('#name').value
const licence = document.querySelector('#licence').value
const maker = document.querySelector('#maker').value
const model = document.querySelector('#model').value
const owner = document.querySelector('#owner').value
const price = document.querySelector('#price').value
const color = document.querySelector('#color').value


let row = 1
let table = document.querySelector('#output-table')
  

     let newRow = table.insertRow(row)

     let cell1 = newRow.insertCell(0)
     let cell2 = newRow.insertCell(1)
     let cell3 = newRow.insertCell(2)
     let cell4 = newRow.insertCell(3)
     let cell5 = newRow.insertCell(4)
     let cell6 = newRow.insertCell(5)
     let cell7 = newRow.insertCell(6)
   

 /*  let tr = document.getElementsByTagName('tr')
    console.log(tr) */

      /* for(let i = 0; i < tr.length; i ++) { */
        

    cell1.innerHTML = name
    cell2.innerHTML = licence
    cell3.innerHTML = maker
    cell4.innerHTML = model
    cell5.innerHTML = owner
    cell6.innerHTML = price
    cell7.innerHTML = color

    row ++

    addData() 
 
    }


/*   } */
  

function addData() {

  let carArray = []
  let tr = document.getElementsByTagName('tr')
    console.log(tr)

      for(let i = 0; i < tr.length; i ++) {

carArray.push({
  name: tr[i].getElementsByTagName('td')[0].textContent,
  licence: tr[i].getElementsByTagName('td')[1].textContent,
  maker: tr[i].getElementsByTagName('td')[2].textContent,
  model: tr[i].getElementsByTagName('td')[3].textContent,
  owner: tr[i].getElementsByTagName('td')[4].textContent,
  price: tr[i].getElementsByTagName('td')[5].textContent,
  color: tr[i].getElementsByTagName('td')[6].textContent
}) 
    }

localStorage.setItem('localdata', JSON.stringify(carArray))

displayDetails()

} 
 

/* 
function getData() {

  let itemsArray = []
  let item = localStorage.getItem('localdata')
  console.log(item)
  if(item != null)
  itemsArray = JSON.parse(item)
  console.log(itemsArray)

}


 function deleteData() {

  localStorage.clear()

}  */ 


  function searchByName() {

    let searchResult = document.querySelector('#search-result')
    console.log(searchResult.textContent) 

    let filter = document.getElementById('search-box').value
    let outputTable = document.getElementById('output-table')

    let tr = outputTable.getElementsByTagName('tr')
    console.log(tr)

    
    for(let i = 0; i < tr.length; i ++) {

    let name = tr[i].getElementsByTagName('td')[0]
    let licence = tr[i].getElementsByTagName('td')[1]
    let maker = tr[i].getElementsByTagName('td')[2]
      
      console.log(name.textContent)
      console.log(licence.textContent)
      console.log(maker.textContent)
      

        if(name.textContent.includes(filter)) {

          searchResult.textContent = `Name of the car is ${name.textContent}, license is ${licence.textContent} and maker is ${maker.textContent}`

        } 

       /*  else {
          searchResult.textContent = 'Not found'
        }  */

        }
   
}  

/* validateforms */

function validateforms() {

  let x=document.forms["myForm"][0].value
  console.log(x)

  if (x=== "") {
    alert("form must be filled out");
    
  }
  
}

/* validateforms() */

addButton.addEventListener('click', displayDetails)
searchButton.addEventListener('click', searchByName)
