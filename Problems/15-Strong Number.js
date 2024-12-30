// 15. write a javascript program to check given number is strong number or not
var strong=(x)=>{
    var s=x.toString();
    var sum=0;
    for(var i=0;i<s.length;i++){
        var n=parseInt(s[i]); 
        var m=1;
        for(var j=1;j<=n;j++)m*=j;
        sum+=m;
    }
    return sum==x;
}
console.log(strong(145))