// 9. write a javascript program to check given number is palindrome number or not    
var num=1234321,r=0;
var x=num;
while(x>0){
    r=(r*10)+(x%10);
    x=parseInt(x/10);
}
console.log(r==num ? 'Palindrome':'Not a Palindrome')
