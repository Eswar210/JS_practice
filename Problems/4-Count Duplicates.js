//4. Write a JavaScript program to count number of duplicates elements of an array
arr=[1,3,1,5,0,10,1,3,5]
var count={};
for (let x of arr){
    if (count[x]) count[x]++;
    else count[x]=1;
}
var d=count.filter((x)=>count[x]>1);
console.log(d);
console.log(count);