// 10. write a javascript program to check given string is palindrome or not  
var s='eye',r='';
for(var i=s.length-1;i>=0;i--)r=r+s[i];
console.log(s+' is ', r==s?"Palindrome":'Not a Palindrome')