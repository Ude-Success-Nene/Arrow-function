// This is my first javascript code
// let myName = prompt('what is my name');
// alert(myName)

let num1 = parseInt(prompt("Enter first number"))
let operator = prompt("Enter operator")
let num2 = parseInt(prompt("Enter second number"))

function calculator(a, b){
    if (operator == "+"){
        alert(num1 + num2);
    }else if(operator =="-"){
        alert(num1 - num2);
    }else if(operator == "/"){
        alert(num1 / num2);
    }else if (operator =="*"){
        alert(num1 * num2);
    }else{
        alert("Invalid operator")
    }
}

calculator()