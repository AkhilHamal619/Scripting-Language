//length String
const name = "Akhil Hamal";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log(`${name}`);
console.log(`Length of the string: ${alphabet.length}`);

// split() in JavaScript

name = "Akhil Hamal";

let text = "a,b,c,d,e,f";

const myArray = text.split(",");

console.log(`${name}`);
console.log(myArray[1]);

//String Slice
const str = "Apple, Banana, Kiwi";

const demo1 = str.slice(7, 12);
const demo2 = str.slice(-12, -6);
const demo3 = str.substr(7, 6); // outdated but still works in many browsers

console.log("Akhil Hamal");
console.log("slice(7,12):", demo1);
console.log("slice(-12,-6):", demo2);
console.log("substr(7,6):", demo3);

//str.trim() removes whitespace from both the beginning and end of a string.
str = "    Hello   World    ";

let trimmedStr = str.trim();

console.log(trimmedStr);

//String substr() method extracts a part of a string and returns it as a new string, without modifying the original string.
str = "Apple, Banana, Kiwi";

const result = str.substr(7, 6); // deprecated but still works

console.log("Akhil Hamal");
console.log("Result:", result);

//String Uppercase Lowercase

console.log("Akhil Hamal");
text = "Hello World";

const upper = text.toUpperCase();
const lower = text.toLowerCase();

console.log("Original text:", text);
console.log("upper case:", upper);
console.log("lower case:", lower);

//String concatenation in JavaScript
let text1 = "Muna";
let text2 = "Madan";

let text3 = text1.concat(" ", text2);

console.log("Akhil Hamal");
console.log(text3);
