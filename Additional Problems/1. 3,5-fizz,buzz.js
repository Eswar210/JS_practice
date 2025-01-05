// 1. Write a JavaScript program that prints the numbers from 1 to n. However, for multiples of 3, print "Fizz" instead of the number, for multiples of 5, print "Buzz", and for numbers which are multiples of both 3 and 5, print "FizzBuzz".
// let n = 15; 
// for (let i = 1; i <= n; i++) {
//     if (i % 3 ==0 && i%5==0) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

n = 15;
let arr=[...Array(n)].map((_, index)=>{ 
    let x=index + 1
    return (x % 3 === 0 && x % 5 === 0 )? 'FizzBuzz':x%3==0?'Fizz':x%5==0 ?'Buzz':x
})
console.log(arr)
