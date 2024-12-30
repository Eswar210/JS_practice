
// 24. write a javascript program to print following pattern                   
// 20 18 16 14
// 12 10 8
// 6 4
// 2

var n=20;
for (let i=4;i>0;i--){
    var r=[]
    for (let j=i;j>0;j--){
        r.push(n)
        n-=2
    }
    console.log(r)
}