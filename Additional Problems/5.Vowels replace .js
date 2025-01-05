// 5. Write a JavaScript program to create a function that takes a string and replaces vowels with *
var str='asdfghjko'
var v=['a','e','i','o','u']
for (var i=0;i<str.length;i++) {
    if (v.includes(str[i])) {str=str.slice(0,i)+'*'+str.slice(i+1);}
}
console.log(str);