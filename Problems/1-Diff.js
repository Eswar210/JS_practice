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

          
                        
                  
                        
// 31. Given an array of objects representing students, use the map method to create a new array of objects where each object has an additional property isAdult that is true if the student's age is 18 or above, and false otherwise.      
// students = [
//   { name: 'John', age: 17 },
//   { name: 'Jane', age: 19 },
//   { name: 'Jack', age: 18 },
// ];                        
// output : 
// [
//   { name: 'John', age: 17, isAdult: false },
//   { name: 'Jane', age: 18, isAdult: true },
//   { name: 'Jack', age: 19, isAdult: true }
// ]
function isAdult(student) {
    return student.age >= 18 ? { ...student, isAdult: true } : {
        ...student, isAdult: false
    };
}
var students = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 19 },
    { name: 'Jack', age: 18 },
];
var result = students.map(isAdult);
console.log(result);

                        
// 32. Given an array of objects representing books, use the findIndex method to find the index of the book with a specific title given by the user.
// const books = [
//   { title: 'Book A', author: 'Author 1' },
//   { title: 'Book B', author: 'Author 2' },
//   { title: 'Book C', author: 'Author 3' },
// ];
// const title = 'Book B';
// const index = books.findIndex(book => book.title === title);
// console.log(index); // Output: 1
const books = [
    { title: 'Book A', author: 'Author 1' },
    { title: 'Book B', author: 'Author 2' },
    { title: 'Book C', author: 'Author 3' },
    ];
    const title = 'Book B';
    const index = books.findIndex(book => book.title === title);
    console.log(index); // Output: 1


// 33.  Given an array of employee objects, each with name and salary properties, print the names of employees in ascending order who earn more than a specified amount given by the user.
const employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 40000 },
];
const salaryThreshold = 55000;
employees.sort((a, b) => a.salary - b.salary);
employees.forEach(employee => {
      if (employee.salary > salaryThreshold) {
        console.log(employee.name);
      }
    });
    
                        
// 34. Given an array of movie objects, each with properties movieName, movieHero, movieGenre, and releaseDate, write a function to sort the array in ascending order of the releaseDate
// movies = [
//   { movieName: 'Movie A', movieHero: 'Hero A', movieGenre: 'Action', releaseDate: '2020-01-15' },
//   { movieName: 'Movie B', movieHero: 'Hero B', movieGenre: 'Drama', releaseDate: '2019-06-10' },
//   { movieName: 'Movie C', movieHero: 'Hero C', movieGenre: 'Comedy', releaseDate: '2021-12-25' },
//   { movieName: 'Movie D', movieHero: 'Hero D', movieGenre: 'Horror', releaseDate: '2018-04-05' },
// ];
// function sortMovies(movies) {
//   return movies.sort((a, b) => new Date(a.releaseDate) - new Date
// (b.releaseDate));
// }
// const sortedMovies = sortMovies(movies);
// console.log(sortedMovies);
const movies = [
    { movieName: 'Movie A', movieHero: 'Hero A', movieGenre: 'Action', releaseDate: '2020-01-15' },
    { movieName: 'Movie B', movieHero: 'Hero B', movieGenre: 'Drama', releaseDate: '2019-06-10' },
    { movieName: 'Movie C', movieHero: 'Hero C', movieGenre: 'Comedy', releaseDate: '2021-12-25' },
    { movieName: 'Movie D', movieHero: 'Hero D', movieGenre: 'Horror', releaseDate: '2018-04-05' },
];
    function sortMovies(movies) {
            return movies.sort((a, b) => new Date(a.releaseDate) - new Date(b
                .releaseDate));
                }
                const sortedMovies = sortMovies(movies);
                console.log(sortedMovies);

                        
// 35. Write a function that takes an object and a list of keys, and returns a new object that only contains the properties from the list of keys.
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const keys = ['b', 'c'];
// output : { b: 2, c: 3 }
const obj = { a: 1, b: 2, c: 3, d
    : 4 };
    const keys = ['b', 'c'];
    function pick(obj, keys) {
        return keys.reduce((acc, key) => {
            acc[key] = obj[key];
            return acc;
            }, {});
            }
            const result = pick(obj, keys);
            console.log(result);
            
            