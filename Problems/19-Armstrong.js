// 19. write a javascript program to check given number is armstrong number or not
var arm=(x)=>{
    var s=x.toString();
    var l=s.length;
    var sum=0;
    for(var i=0;i<l;i++)sum+=parseInt(s[i])**l    
    return sum==x;
}
console.log(arm(153))