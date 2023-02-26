// console.log("Ready for Regex");

// slashes are used to define the regex in the middle
// to the right of the middle is the flags to apply to the regex
// i.e. g and i

let str = "Hello, my name is Jason";
let str2 = "And i am a robot arent i";
const str3 = "The fat cat ran down the street. It was searching for a mouse to eat.";


// first the regex must be put into a variable to be tested
// global test
const regex = /my/g

// global test with case insensitivity
const regex2= /i+/gi
// global test with case insensitivity and a plus a followed by s search
const regex3= /a+s?/gi
// same test as above but wrote differently
const regex4 = /re*/
// tests for multiple instances
const regex5 = /fat|cat|the/g
// test for intances returns index of last number of instance in this case 21
const regex6 = /the/
// test to produce true or false with js method
const regex7 = /str*/



// tests
const result = str.search(regex);
const result2 = str2.match(regex2);
const result3 = str.search(regex3);
const result4 = str3.search(regex4);
const result5 = str3.search(regex5)
const result6 = str3.search(regex6)
console.log(result6);
// console.log(result2);
// console.log(result3);
// console.log(result4);
