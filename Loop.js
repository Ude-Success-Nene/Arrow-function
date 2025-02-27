// program to calculate the sum of numbers from 1 to 5 using a while loop
let sum = 0;
let num = 1;
// use while loop to calculate the sum
while(num <= 5){
    sum += num;
    num++;
    console.log("the sum of numbers from 1 to 5 is: ${15}");    
}

// program to check even or odd numbers from 1 to 10 using a for loop
for (let num = 1; num <= 10; num++) {
    if (num % 2 == 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

// using while loop to check even or odd numbers from 1 to 10 using a while loop

let nun = 1
while(nun <= 10){
    if(nun % 2 == 0){
        console.log(`${nun} is even`)
    }else{
        console.log(`${nun} is odd`)
    }
    nun++
    }

// fizzzbuzz
// using a for loop write a js program that prints 'fizz' for multiples 
// of 3 and 'buzz' for multiples of 5 and fizzbuzz for multiples of both
// 3 and 5
// multiple of 3(mun % 3 == 0)
// multiple of 5(mun % 5 == 0)
// mun = 15
// if(mun % 3 ==0){
//     console.log(`${mun} is a multiple of 3`)
// }
// if(mun % 5 == 0){
//     console.log(`${mun} is a multiple of 5`)
// }
// if (mun % 3 == 0 && mun % 5 == 0){
//     console.log(`${mun} is a multiple of 3 and 5`)
// }
for(let count = 1 ; count <= 20; count ++){
    console.log(count)
    if(count % 3 == 0){
    console.log(`${count} is a multiple of 3`)
}else if(count % 5 == 0){
    console.log(`${count} is a multiple of 5`)
}else if(count % 3 == 0 && count % 5 == 0){
    console.log(`${count} is a multiple of 3 and 5`)
}
}
// && = and
// || = or
for (let count = 1; count <= 20; count++){
    if(count % 3 == 0 && count % 5 == 0){
        console.log(`${count} is a multiple of 3 and 5`)
    }else if(count % 3 == 0){
        console.log(`${count} is a multiple of 3`)
    }else if(count % 5 == 0){
        console.log(`${count} is a multiple of 5`)
    }else{
        console.log(count)
    }
}


