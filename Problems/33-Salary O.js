// 33.  Given an array of employee objects, each with name and salary properties, print the names of employees in ascending order who earn more than a specified amount given by the user.
const employees = [
    { name: 'Bob', salary: 60000 },
    { name: 'Alice', salary: 50000 },
    
    { name: 'Charlie', salary: 40000 },
];
  const salaryThreshold = 5000;
  
//   const salaryThreshold = parseInt(prompt("Enter the salary threshold:"));

employees.sort((a, b)=>a.name<b.name?-1:1);
employees.forEach(employee => {if (employee.salary>salaryThreshold) console.log(employee.name);});
      