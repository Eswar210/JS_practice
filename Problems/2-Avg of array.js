// 2. Write a JavaScript program to find the average of elements in an array of numbers.
arr=[1,3,1,5,0,10]
var sum=0;
for (let x of arr){
    sum+=x
}
console.log(sum/arr.length);