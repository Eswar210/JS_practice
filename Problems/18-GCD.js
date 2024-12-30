// 18. Write a JavaScript program to print GCD of given two numbers
function gcd(a, b) {
    if (!b) return a;
    return gcd(b, a % b);
}
console.log(gcd(48, 18));