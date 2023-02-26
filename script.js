// console.log("Ready for Regex");

// slashes are used to define the regex in the middle
// to the right of the middle is the flags to apply to the regex
// i.e. g and i

let str = "Hello, my name is Jason";
let str2 = "And i am a robot arent i";

// first the regex must be put into a variable to be tested
const regex = /my/g
const regex2= /i+/gi
const regex3= /a+s?/gi
const regex4 = /a/g



// tests
const result = str.search(regex);
const result2 = str2.match(regex2);
const result3 = str.search(regex3);

// console.log(result);
// console.log(result2);
console.log(result3);