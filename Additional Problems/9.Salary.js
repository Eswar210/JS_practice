// 9. Write a program to calculate the total salary of employees from an array of objects.
// employees = [
//   { name: 'Alice', salary: 50000 },
//   { name: 'Bob', salary: 60000 },
//   { name: 'Charlie', salary: 40000 },
// ];
employees = [
  { name: 'Alice', salary: 50000 },
  { name: 'Bob', salary: 60000 },
  { name: 'Charlie', salary: 40000 },
];
let c=employees.reduce((acc,ele)=>acc+ele.salary,0)
console.log(c);