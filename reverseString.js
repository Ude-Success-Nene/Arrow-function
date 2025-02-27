// Write a function reverseString(str) that takes a string and 
// returns the reversed version of it.
// hello=== olleh
// backend=== dnekcab

//  .split() // string method
// .reverse() // array method
//  .join() // string method

let myName = "Success"
//  how to convert a string to an array
//  using .split("") or  .split("")
let myNameArray = myName.split("")
// console.log(myNameArray);
let reversed = myNameArray.reverse()
let finalResult = reversed.join("")
// console.log(myName);
// console.log(reversed);
// console.log(finalResult);

function reverseString(str){
    // let strArray = str.split("")
    // let reversedStrArray = strArray.reverse()
    // let finalResult = reversedStrArray.join("")
    // return finalResult
    return str.split("").reverse().join("")
}

console.log(reverseString("Success"))