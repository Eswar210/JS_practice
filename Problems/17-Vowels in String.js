// 17. write a javascript program to count number of vowels in a string
var countVowels=(str)=>{
    var vowels=new Set('aeiouAEIOU'),c = 0;
    for (let i=0;i<str.length;i++) if (vowels.has(str[i]))c++;
    return c;
};
console.log(countVowels("AEIOU"));        
