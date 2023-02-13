const gasolineCalculator = () => {
    
    const price = Number(document.getElementById('price').value);
    const money = Number(document.querySelector('#money').value);

    const output = document.querySelector('#calculate-result')

    let text;
 
   const result = money / price;

   if (result >= 10) {
     text = `You could get about ${result} litres, good now you can go.`;

   }

   else {
    text = `You could get about ${result} litres. Sorry you have to stay.`;

   } 

   output.textContent = text;
    
};

const tempConverter = (id, value) => {
  
    let celcius = document.querySelector('#celcius');
    let fahrenheit = document.querySelector('#fahrenheit');
    let kelvin = document.querySelector('#kelvin'); 

const val = Number(value);
console.log(id, value)

if (id ==="celcius") {
  fahrenheit.value = ((9 / 5) * val + 32).toFixed(2);
  kelvin.value = val + 273.15; 
}

if (id ==="fahrenheit") {
  celcius.value = ((val - 32) / 1.8).toFixed(2)
  kelvin.value = (val - 32) / 1.8 + 273.15
}

if (id ==="kelvin") {
  fahrenheit.value =  (val - 273.15) * 1.8 + 32
  celcius.value = val - 273.15
}

   /*  let celcius = value
    let fahrenheit = value
    let kelvin = value */

    /* document.getElementById('celcius').value = value;
    document.getElementById('fahrenheit').value = (9 / 5) * value + 32;
    document.getElementById('kelvin').value = Number(value) + 273.15; */

    /* console.log(celcius);
    console.log(fahrenheit);
    console.log(kelvin); */
    
}
 