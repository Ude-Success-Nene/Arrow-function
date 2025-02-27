function getSum(x, y){
     return x + y
 }
 console.log(getSum(5, 8))


// performing arithematic operation using the calculator function
function calculator(a, b, operator){
    if (operator === "+"){
        return a + b;
    }
    else if (operator === "-"){
        return a - b;
    }
    else if (operator === "*"){
        return a * b;
    } 
    else if (operator === "/"){
        return a / b;
    }
    else if (operator === "%"){
        return a % b;
    }else{
        return "invalid operator"
    }
    
       
}
console.log(calculator(6, 9, '*')) 

 // Destructuring of objects
 const userObj = {
     name: "Success",
     age: 18,
     complexion: "fair",
     isMarried: true
 }
 const {name, age, complexion, isMarried} = userObj //destructuring.
 console.log(userObj.name)
 console.log(name)