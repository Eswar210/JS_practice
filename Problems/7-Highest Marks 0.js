// 7. Write a JavaScript program to print student details who got highest marks, create objects using class     
class s{
    constructor(name,marks){
        this.name=name;
        this.marks=marks;
    }
}
var s1=new s('a',90),s2=new s('b',80),s3=new s('c',95)
var all=[s1,s2,s3],max=0,main;
for (let x of all){
    if (x.marks>max) {
        max=x.marks;
        main=x.name;
        // console.log(main)
    }
}
console.log(main);