// 29. write a javascript program to implement promises for even numbers, if number is even fulfill the promise and it is odd reject the promise
var even=num=>new Promise((resolve, reject)=>num%2==0?resolve(num):reject(num));
even(11).then((n)=>console.log(n + ' is Even'))  
.catch((n)=>console.log(n+' is Odd'));