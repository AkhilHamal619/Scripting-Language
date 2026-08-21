// ==========================================
// STRING METHODS IN JAVASCRIPT
// ==========================================

console.log("Akhil Hamal");


// ==========================================
// STRING LENGTH
// ==========================================

const name = "Akhil Hamal";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

console.log("Name:", name);
console.log("Alphabet Length:", alphabet.length);


// ==========================================
// split() METHOD
// ==========================================

const text = "a,b,c,d,e,f";
const myArray = text.split(",");

console.log("\n--- split() ---");
console.log("Array:", myArray);
console.log("Second Element:", myArray[1]);


// ==========================================
// STRING SLICE
// ==========================================

const fruits = "Apple, Banana, Kiwi";

const slice1 = fruits.slice(7, 12);
const slice2 = fruits.slice(-12, -6);

console.log("\n--- slice() ---");
console.log("slice(7, 12):", slice1);
console.log("slice(-12, -6):", slice2);


// ==========================================
// substr() METHOD
// ==========================================
// Deprecated, but shown for learning purposes.

const substrResult = fruits.substr(7, 6);

console.log("\n--- substr() ---");
console.log("substr(7, 6):", substrResult);


// ==========================================
// trim() METHOD
// ==========================================

const textWithSpaces = "    Hello World    ";
const trimmedText = textWithSpaces.trim();

console.log("\n--- trim() ---");
console.log("Before:", `"${textWithSpaces}"`);
console.log("After:", `"${trimmedText}"`);


// ==========================================
// UPPERCASE AND LOWERCASE
// ==========================================

const message = "Hello World";

const upperCase = message.toUpperCase();
const lowerCase = message.toLowerCase();

console.log("\n--- Case Conversion ---");
console.log("Original:", message);
console.log("Uppercase:", upperCase);
console.log("Lowercase:", lowerCase);


// ==========================================
// STRING CONCATENATION
// ==========================================

const text1 = "Muna";
const text2 = "Madan";

const text3 = text1.concat(" ", text2);

console.log("\n--- concat() ---");
console.log("Result:", text3);