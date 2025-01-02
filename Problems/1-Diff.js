// 1. write a JavaScript program to print difference between biggest and smallest number of an array
arr=[1,3,1,5,0,10]
var m=arr[0],n=arr[0];
for (let x of arr){
    if (x>m)m=x;
    else if(x<n)n=x
}
console.log(m-n);







    


// 6. Write a JavaScript program to print running time 
var start=new Date().getTime();
for (let i=0;i<10000000;i++){
    }
    var end=new Date().getTime();
    console.log(end-start);



// 8. Write a JavaScript program to add colors to all h1 tags when the button is clicked    
document.addEventListener("DOMContentLoaded", function()
{
    var button=document.getElementById("button");
    button.addEventListener("click", function()
    {
        var h1s=document.querySelectorAll("h1");
        for (let x of h1s)x.style.color="red";
    });
});




// 12.  Write a JavaScript program to print incremental value every time when button is clicked     
var count = 0;
document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("p").innerHTML = count;
    });



// 22. Write a JavaScript program to create subclasses for different types of people (e.g., Student, Teacher) inheriting from the Person class and adding additional properties and methods
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        }
        }
        class Student extends Person {
            constructor(name, age, rollNo) {
                super(name, age);
                this.rollNo = rollNo;
                }
                }
                class Teacher extends Person {
                    constructor(name, age, subject) {
                        super(name, age);
                        this.subject = subject;
                        }
                        }
                        var student = new Student('John', 20, 101);
                        var teacher = new Teacher('Jane', 35, 'Maths');
                        console.log(student.name); // Output: John
                        console.log(teacher.subject); // Output: Maths







// 23. Write a JavaScript program to apply text color for h1 which user entered in input tag and    submit
function changeColor() {
    var text = document.getElementById("input").value;
    document.getElementById("h1").style.color = text;
    }
    // Get the input field
    var input = document.getElementById("input");
    // Get the h1 element
    var h1 = document.getElementById("h1");
    // Add an event listener to the input field
    input.addEventListener("input", changeColor);
    // Add an event listener to the form
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault();
        changeColor();
        });
        // Add an event listener to the button
        document.getElementById("button").addEventListener("click", changeColor);      
                                          
                        
            