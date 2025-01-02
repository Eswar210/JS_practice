// 35. Write a function that takes an object and a list of keys, and returns a new object that only contains the properties from the list of keys.
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// const keys = ['b', 'c'];
// output : { b: 2, c: 3 }
const obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = ['b', 'c'];
    
var res= (obj, keys)=>{
    const result = {};  
    keys.forEach(key => {
      if (key in obj) result[key] = obj[key]; 
    });
  
    return result;
  }
console.log(res(obj,keys));  // Output: { b: 2, c: 3 }
  