// 1. write a JavaScript program to print difference between biggest and smallest number of an array
arr=[1,3,1,5,0,10]
var m=arr[0],n=arr[0];
for (let x of arr){
    if (x>m)m=x;
    else if(x<n)n=x
}
console.log(m-n);