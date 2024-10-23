console.log('Hello!');

// Variable

let age = 28; //kan bytte navn
const name = "Julie H"; //kan ikke byttes

console.log(age+" "+name);
console.log(age);
const isPresent = true; console.log(isPresent);
console.log(typeof age); console.log(typeof isPresent);
const firstName = "Julie"; const lastName = "Hauge"; let fullName=firstName+" "+lastName; console.log(fullName+" = "+isPresent);
console.log(typeof fullName);
//Reusing template varaible 
fullName= `My name is ${firstName} ${lastName}!`; console.log(fullName);
let behe;
behe= `What is 3 but comes at ${0} and will added up to become ${1}!`, "3", "5"; console.log(behe);
//A variable using DOM Manipulation to display text to 
const htmlElement1= document.querySelector("#javaScriptData");
htmlElement1.textContent=fullName;
const htmlElement2= document.querySelector("#javaScriptData1");
htmlElement2.textContent=behe;
