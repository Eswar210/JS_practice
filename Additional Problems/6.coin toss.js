// 6. Write a JavaScript program that simulates a coin toss using a promise (resolve for heads, reject for tails)
var toss=new Promise((res, rej)=>Math.random()<0.5?res('heads'):rej('tails'));

toss.then((x)=>{console.log(x);})
.catch((x)=>{console.log(x);})