// 1. write a JavaScript program to print difference between biggest and smallest number of an array
arr=[1,3,1,5,0,10]
var m=arr[0],n=arr[0];
for (let x of arr){
    if (x>m)m=x;
    else if(x<n)n=x
}
console.log(m-n);

// 2. Write a JavaScript program to find the average of elements in an array of numbers.
arr=[1,3,1,5,0,10]
var sum=0;
for (let x of arr){
    sum+=x
}
console.log(sum/arr.length);

// 3. Write a JavaScript program to print sum of even numbers from given array
arr=[1,3,1,5,0,10]
var sum=0;
for (let x of arr){
    if (x%2==0) sum+=x
    }
    console.log(sum);

//4. Write a JavaScript program to count number of duplicates elements of an array
arr=[1,3,1,5,0,10,1,3,5]
var count={};
for (let x of arr){
    if (count[x]) count[x]++;
    else count[x]=1;
    }
    console.log(count);

    // 5. Write a JavaScript program to create array of even numbers from give array 
    arr=[1,3,1,5,0,10]
    var even=[];
    for (let x of arr){
        if (x%2==0) even.push(x);
        }
        console.log(even);


// 6. Write a JavaScript program to print running time 
var start=new Date().getTime();
for (let i=0;i<10000000;i++){
    }
    var end=new Date().getTime();
    console.log(end-start);

// 7. Write a JavaScript program to print student details who got highest marks, create objects using class     
class Student{
    constructor(name,marks,age){
        this.name=name;
        this.marks=marks;
        this.age=age;
        }
        }
var students=[new Student("Rahul",90,20),new Student("Rohan",80,21),new Student("Rahul",90,20),new Student("Rohan",80,21)];
var max=0;
var maxStudent;
for (let x of students){
    if (x.marks>max) {
    max=x.marks;
    maxStudent=x;
        }
    }
    console.log(maxStudent);

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




// 9. write a javascript program to check given number is palindrome number or not    
var num=12321;
var rev=0;
var n=num;
while (n>0) {
    var rem=n%10;
    rev=(rev*10)+rem;
    n=Math.floor(n/10);
    }
    if (num==rev) {
        console.log("number is palindrome");
        } else {
            console.log("number is not palindrome");
            }
            
// 10. write a javascript program to check given string is palindrome or not  
var str="madam";
var rev="";
var n=str.length-1;
while (n>=0) {
    rev=rev+str[n];
    n--;
    }
    if (str==rev) {
        console.log("string is palindrome");
        } else {
            console.log("string is not palindrome");
            }



// 11. Write a JavaScript program to remove duplicate elements from an array.
var arr=[1,2,2,3,4,4,5,6,6]
var uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // Output: [1, 2, 3, 4,5, 6]




// 12.  Write a JavaScript program to print incremental value every time when button is clicked     
var count = 0;
document.getElementById("btn").addEventListener("click", function() {
    count++;
    document.getElementById("p").innerHTML = count;
    });



// 13.  write a javascript program to print prime numbers between 1 to 100.
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) return false;
        }
        return true;
        }
        for (var i = 1; i <= 100; i++) {
            if (isPrime(i)) {
                console.log(i);
                }
                }




// 14. Write a JavaScript program to find the second largest element in an array.
var arr=[1,2,3,4,5,6,7,8,9]
var max = Math.max(...arr);
var secondMax = Math.max(...arr.filter(x => x < max));
console.log(secondMax); // Output: 8

// 15. write a javascript program to check given number is strong number or not
function isStrong(num) {
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        var fact = 1;
        for (var j = 1; j <= parseInt(str[i]); j++) {
            fact *= j;
            }
            sum += fact;
            }
            return sum == num ? true : false;
            }
            console.log(isStrong(145)); // Output: true
            console.log(isStrong(20)); // Output: false



// 16. write a javascript program to remove odd numbers from given array
var arr = [1, 2, 3, 4, 5, 6]
var result = arr.filter(function(num) {
    return num % 2 == 0;
    });
    console.log(result); // Output: [2, 4, 6]



// 17. write a javascript program to count number of vowels in a string
var str = "Hello World";
var count = 0;
for (var i = 0; i < str.length; i++) {
    if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u')
        count++;
    console.log(count); // Output: 3


// 18. Write a JavaScript program to print GCD of given two numbers
function gcd(a, b) {
    if (!b) {
        return a;
        }
        return gcd(b, a % b);
        }
        console.log(gcd(48, 18)); // Output: 6



// 19. write a javascript program to check given number is armstrong number or not
function isArmstrong(num) {
    var str = num.toString();
    var sum = 0;
    for (var i = 0; i < str.length; i++) {
        var fact = 1;
        for (var j = 1; j <= parseInt(str[i]); j++) {
            fact *= j;
            }
            sum += fact;
            }
            return sum == num ? true : false;
            }
            console.log(isArmstrong(371)); // Output: true



// 20. write a javascript program to second smallest number from given array
var arr = [1, 2, 3, 4, 5, 6]
var sorted = arr.sort(function(a, b) {
    return a - b
    });
    console.log(sorted[1]); // Output: 2



// 21. Write a JavaScript program to print N digits in fibonacci series
function fibonacci(n) {
    if (n == 0)
        return 0;
    else if (n == 1)
        return 1;
    else {
        var fib = [0, 1];
        for (var i = 2; i <= n; i++) {
            fib.push(fib[i - 1] + fib[i - 2]);
            }
            return fib[n];
            }}
            console.log(fibonacci(10)); // Output: 34



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


// 24. write a javascript program to print following pattern                   
// 20 18 16 14
// 12 10 8
// 6 4
// 2
function printPattern() {
    var n = 20;
    for (var i = n; i > 0; i -= 2) {
        for (var j = i; j > 0; j--) {
            process.stdout.write(j + ' ');
            }
            console.log();
            }
            }
            // Call the function to print the pattern
            printPattern();
            

                        
// 25. write a javascript program to print following pattern
// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16
function printPattern() {
    var n = 4;
    for (var i = 1; i <= 16; i++) {
        if (i % n == 0) {
            console.log(i);
            }
            else {
                process.stdout.write(i + ' ');
                }
                }
                }
                // Call the function to print the pattern
                printPattern();

                       
// 26. Write JavaScript program to create new array of leap years from given array
// of years
function leapYears(years) {
    return years.filter(year => (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)); }
        // Test the function
        var years = [1990, 1992, 1994, 1996,1998, 2000, 2001, 2002, 2003];
            console.log(leapYears(years)); // Output: [ 1992, 1996,1998, 2000 ]

                        
// 27.write a javascript program to print follwoing pattern
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1
function printPattern() {
    var n = 5;
    for (var i = n; i > 0; i--) {
        for (var j = i; j > 0; j--) {
            process.stdout.write(j + ' ');
            }
            console.log();
            }
            }
            // Call the function to print the pattern
            printPattern();

                        
// 28. write a javascript program to store factorials of each number into new array from given array
function factorialArray(arr) {
    return arr.map(num => {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
            }
            return factorial;
            });
            }
            // Test the function
            var arr = [1, 2, 3, 4, 5];
            console.log(factorialArray(arr)); // Output: [ 1, 2, 6

                        
// 29. write a javascript program to implement promises for even numbers, if number is even fulfill the promise and it is odd reject the promise
function isEven(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 == 0) {
            resolve(num);
            }
            else {
                reject(num);
                }
                });
                }
                // Test the function
                isEven(10).then(num => console.log(num)).catch(num => console.log(num));
                isEven(11).then(num => console.log(num)).catch(num => console.log(num));

                        
// 30. write a javascript program to perform addition of n numbers using single function in js
function addNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        }
        return sum;
    }
                        
                        
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
            