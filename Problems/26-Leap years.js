// 26. Write JavaScript program to create new array of leap years from given array of years

var years = [1990, 1992, 1994, 1996,1998, 2000, 2001, 2002, 2003];
console.log(years.filter(x => (x % 4 == 0 && x % 100 != 0) || (x % 400 == 0)));

     