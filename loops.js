// three kinds of Loops in js
// for loop, while loop, do while Loop

// for (initialization; condition; increment/decrement) {
//    // code to be executed repeayedly
// }

for(let count = 0; count < 10; count++){
    console.log("Hello world")
}
for(let count = 10; count >= 0; count--){
    console.log(count)
}


// while(condition){
//     code to be executed
//     increment/decrement
// }
let x = 0
while(x < 5){
    console.log("repeat 5 times")
    x = x + 1
    x++

}
let y = 5
while(y > 0){
    console.log("repeat 5 times")
    y = y - 1
    y--
}

// to induce an infinite Loop
while(true){
    console.log("i am here")
}


