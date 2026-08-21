// ==========================================
// Arrays in JavaScript
// ==========================================

console.log("Akhil Hamal");

// Creating an array
const cars = ["BMW", "Volvo", "Saab", "Ford"];

// Accessing array elements using a loop
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}


// ==========================================
// Length and Sort Properties of Arrays
// ==========================================

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Length of the array
console.log("Length:", fruits.length);

// Sorting the array alphabetically
console.log("Sorted:", fruits.sort());


// ==========================================
// Accessing the Last Element of an Array
// ==========================================

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

// Access the last element
const lastElement = fruits1[fruits1.length - 1];

console.log("Last element:", lastElement);


// ==========================================
// Array Methods: push(), pop(), reverse(),
// shift(), and unshift()
// ==========================================

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// push() - adds an element to the end
fruits2.push("Kiwi");
console.log("After push():", fruits2);

// pop() - removes the last element
fruits2.pop();
console.log("After pop():", fruits2);

// reverse() - reverses the array
fruits2.reverse();
console.log("After reverse():", fruits2);

// shift() - removes the first element
fruits2.shift();
console.log("After shift():", fruits2);

// unshift() - adds an element to the beginning
fruits2.unshift("Strawberry");
console.log("After unshift():", fruits2);