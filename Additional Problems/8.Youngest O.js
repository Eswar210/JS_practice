// 8. Find the youngest person from an array of objects containing name and age.
// people = [
//     { name: 'Anna', age: 25 },
//     { name: 'Mark', age: 20 },
//     { name: 'Sophia', age: 30 },
//   ];
people = [
  { name: 'Anna', age: 25 },
  { name: 'Mark', age: 20 },
  { name: 'Sophia', age: 30 },
];
let x = people[0];

for (let i=1;i<people.length;i++) {
    if (people[i].age<x.age)x = people[i];
}

console.log(x);