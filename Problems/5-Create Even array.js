// 5. Write a JavaScript program to create array of even numbers from give array 
arr=[1,3,1,5,0,10]
var even=[];
for (let x of arr) if (x%2==0) even.push(x);
console.log(even);