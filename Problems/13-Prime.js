// 13.  write a javascript program to print prime numbers between 1 to 100.
function prime(n){
    if (n<=1)return false;
    if (n==2 || n==3)return true;
    if (n%2==0 || n%3==0)return false;
    for (let i=5; i<=parseInt(n**0.5); i+=6)
        if (n%i==0 || n%(i+2)==0)return false
    return true;
}
console.log([...Array(100).keys()].filter(x=>x>1 && prime(x)));