function fib(n){
    if (n==0)return 0;
    else if (n==1)return 1;
    else {
        var f = [1, 1];
        for (var i=2;i<n;i++) f.push(f[i-1]+f[i-2]);
        return f[n-1];
    }
}
console.log([...Array(11).keys()].map((x)=>fib(x)));