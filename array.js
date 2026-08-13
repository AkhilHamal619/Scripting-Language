//array in JavaScript
console.log("Akhil Hamal");

const cars = ["BMW", "Volvo", "Saab", "Ford"];

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

//Length and Sort properties of Arrays
fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.length);
console.log(fruits.sort());

//accessing last element of an array
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const lastElement = fruits1[fruits1.length - 1];

console.log(lastElement);

//push() pop() reverse() shift() unshift() methods in JS
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.push("Kiwi");
console.log(fruits2);

fruits2.pop();
console.log(fruits2);

fruits2.reverse();
console.log(fruits2);

fruits2.shift();
console.log(fruits2);

fruits2.unshift("Strawberry");
console.log(fruits2);


