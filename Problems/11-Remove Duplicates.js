// 11. Write a JavaScript program to remove duplicate elements from an array.
var arr=[1,2,2,3,4,4,5,6,6];
arr=arr.filter((x,ind)=>ind===arr.indexOf(x))

console.log(arr)