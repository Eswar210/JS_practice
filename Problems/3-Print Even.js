// 3. Write a JavaScript program to print sum of even numbers from given array
arr=[1,3,1,5,0,10]
var sum=0;
for (let x of arr) if (x%2==0) sum+=x
console.log(sum);