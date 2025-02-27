const greet = () => {
    return "Hello World!";
};
// console.log(greet)

// Write a function reverseString(str) that takes a string and 
// returns the reversed version of it.
// const reverseString= (str) =>str.split("").reverse().join("")
const reverseString= (str) => {
    return str.split("").reverse().join("")
};
console.log(reverseString("Success"))