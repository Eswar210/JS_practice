// 14. Write a JavaScript program to find the second largest element in an array.
var arr=[...Array(10).keys()]
// console.log(arr)
var m=arr[0],n=arr[0];

for(var i=1;i<arr.length;i++)
    if(arr[i]>m){
        n=m;
        m=arr[i];
        }
console.log(n);
