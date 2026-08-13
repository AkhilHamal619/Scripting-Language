//built-in objects / global objects in JavaScript

//math object in JavaScript
console.log("Akhil Hamal");
console.log(Math.PI);
console.log(Math.round(4.7));
console.log(Math.ceil(4.4));
console.log(Math.floor(4.7));
console.log(Math.sqrt(64));
console.log(Math.abs(-4.7));
console.log(Math.pow(8, 2));
console.log(Math.min(0, 150, 30, 20, -8, -200));
console.log(Math.max(0, 150, 30, 20, -8, -200));

//date object in JavaScript
const d = new Date();
console.log(d);
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

//string object in JavaScript
let text = "Akhil Hamal";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.charAt(0));
console.log(text.indexOf("H"));
console.log(text.lastIndexOf("a"));
console.log(text.slice(0, 5));
console.log(text.replace("Akhil", "John"));

//number object in JavaScript
let num = 123.456;
console.log(num.toString());
console.log(num.toFixed(2));
console.log(num.toPrecision(4));

//array object in JavaScript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.push("Kiwi");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.unshift("Lemon");
console.log(fruits);

//JSON object in JavaScript
const person = { name: "Akhil", age: 25, city: "Kathmandu" };
const myJSON = JSON.stringify(person);
console.log(myJSON);

const myObj = JSON.parse(myJSON);
console.log(myObj.name);
console.log(myObj.age);
console.log(myObj.city);

//RegExp Object (Regular Expressions) in JavaScript
const pattern = /Akhil/;
const str1 = "My name is Akhil Hamal";
console.log(pattern.test(str1));
console.log(str1.match(pattern));
console.log(str1.search(pattern));
console.log(str1.replace(pattern, "John"));

//Error Object in JavaScript
try {
    throw new Error("This is a custom error message.");
} catch (e) {
    console.log(e.message);
}       

//boolean object in JavaScript
const isTrue = true;
const isFalse = false;
console.log(isTrue);
console.log(isFalse);

