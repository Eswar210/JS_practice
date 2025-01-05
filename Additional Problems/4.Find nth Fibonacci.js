// 4. Write a JavaScript program to find the nth Fibonacci numbers
var fib=(n)=>n==1?0:(n==2?1:fib(n-1)+fib(n-2));
console.log(fib(10));