                   
// 28. write a javascript program to store factorials of each number into new array from given array

var arr = [1, 2, 3, 4, 5];
console.log(arr.map(num => {
    let f=1;
    for (let i=1;i<=num;i++) f *= i;
    return f;}));