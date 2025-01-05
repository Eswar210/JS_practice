// 3. Write a JavaScript program to group an array of numbers into even and odd categories using reduce.
arr=[1, 2, 3, 4, 5,6, 7, 8, 9, 10]
var res=arr.reduce((acc, num) => {
    num%2==0?acc.even.push(num):acc.odd.push(num);
    return acc;
});
console.log(res);