// ==========================================
// BUILT-IN / GLOBAL OBJECTS IN JAVASCRIPT
// ==========================================

console.log("Akhil Hamal");


// Math Object
console.log("\n--- Math Object ---");

console.log(
    Math.PI,
    Math.round(4.7),
    Math.ceil(4.4),
    Math.floor(4.7),
    Math.sqrt(64)
);

console.log(
    Math.abs(-4.7),
    Math.pow(8, 2),
    Math.min(0, 150, 30, 20, -8, -200),
    Math.max(0, 150, 30, 20, -8, -200)
);


// Date Object
console.log("\n--- Date Object ---");

const date = new Date();

console.log("Date:", date.toLocaleDateString());
console.log(
    "Year:", date.getFullYear(),
    "Month:", date.getMonth() + 1,
    "Day:", date.getDate()
);


// String Object
console.log("\n--- String Object ---");

const text = "Akhil Hamal";

console.log(
    "Length:", text.length,
    "| Upper:", text.toUpperCase(),
    "| Lower:", text.toLowerCase()
);

console.log(
    "First:", text.charAt(0),
    "| H Index:", text.indexOf("H"),
    "| Slice:", text.slice(0, 5)
);


// Number Object
console.log("\n--- Number Object ---");

const num = 123.456;

console.log(
    "String:", num.toString(),
    "| Fixed:", num.toFixed(2),
    "| Precision:", num.toPrecision(4)
);


// Array Object
console.log("\n--- Array Object ---");

const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.push("Kiwi");
fruits.pop();
fruits.shift();
fruits.unshift("Lemon");

console.log("Fruits:", fruits);
console.log("Length:", fruits.length);


// JSON Object
console.log("\n--- JSON Object ---");

const person = {
    name: "Akhil",
    age: 25,
    city: "Kathmandu"
};

const jsonData = JSON.stringify(person);
const myObj = JSON.parse(jsonData);

console.log("JSON:", jsonData);
console.log("Name:", myObj.name, "| Age:", myObj.age);


// RegExp Object
console.log("\n--- RegExp Object ---");

const pattern = /Akhil/;
const sentence = "My name is Akhil Hamal";

console.log(
    "Test:", pattern.test(sentence),
    "| Search:", sentence.search(pattern)
);


// Error Object
console.log("\n--- Error Object ---");

try {
    throw new Error("Custom error message");
} catch (error) {
    console.log(error.message);
}


// Boolean
console.log("\n--- Boolean ---");

const isTrue = true;
const isFalse = false;

console.log(isTrue, isFalse);