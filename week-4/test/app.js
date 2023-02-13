
   
    const form = document.getElementById('form')
    console.log(form)

 form.addEventListener("submit", (e) => {
   e.preventDefault();
    const username = document.getElementById('username').value;
    console.log(username)
}) 



