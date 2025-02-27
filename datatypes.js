// Primitive Data Types(Native or natural or inbuilt, it came with the
// Language originally)
// Examples: numbers, strings, boolean, null, undefined

// Non- primitive(It came from the primitive data-types, an abstraction)
// array, objects and functions

// Javascript Arrays
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixedArray = [1, "hello", true, null]; // Mixed data types
// string methods
// what are methods? Methods are inbuilt js functions in a js object.
// String.methodName()
// String.methodName(parameter)
// Array methods
// Array.method()
// Push and Pop
// console.log(fruits)
fruits.push("pineapple")
fruits.push("guava", "pear")
fruits.pop()
// console.log(fruits, indexOf("banana"))
// Anonymous functions are functions without a name

// js objects are a collection of key-value pairs
// let orangeObj = {
    // name: "orange",
    // noOfSeeds: 5000,
    // Location: "Okirika",
    // ripe: true,
    // price: function(){
        // console.log("Price is N500")
  //  }
//)
// objects.keys to display their value
// objects.method() to display value of method
// console.log(orangeObj.name)
//console.log(orangeObj.ripe)
//orangeObject.price() //console.log("price is N500")

// Create a user object with keys including name, email, age and a role
// method which prints "I am a student" in the terminal
// this keyword is used as this.objectKey == value of key
const userObject = {
    firstName: "Success",
    secondName: "Ude",
    printfullName: function(){
        console.log(`My full name is ${this.firstName} ${this.secondName}`)
    },
    email: "preciousgold461@gmail.com",
    age: 18,
    ageDeclaration: function(){
        console.log("I am " + this.age + "years old")
        // template literals(`${variable}`)
        console.log(`I am ${this.age} years old`)
    }
}
// userObject.ageDeclaration()
// userObject.printfullName()

// DESTRUCTURING OF OBJECTS

 let udaraObject = {
      name: "udara",
      noOfSeeds: 5000,
      Location: "Okirika",
      ripe: true
    }
const {name, noOfSeeds, Location, ripe} = udaraObject
console.log (name)
console.log (noOfSeeds)






//let studentObject = {
   // name: "Success",
   // email: "preciousgold@gmail.com",
    //age: 20,
   // role: function(){
        //console.log("i am a student")
    

//console.log(studentObject)
//studentObject.role()