function checkAge() {
let age=prompt("What is your age?")
if(age<18){ 
    console.log("Too young") 
}
else if(age<27){
    console.log("Right age for military service")
}
else if(age<41){
    console.log("You are in reserve")
}
else if(age<55){
    console.log("You are in back up reserve")
}
else{
    console.log("Too aged")
}
}
    
checkAge()
    

