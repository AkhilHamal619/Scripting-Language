// ==========================================
// OPERATORS IN JAVASCRIPT
// ==========================================

console.log("Akhil Hamal");


// ==========================================
// ARITHMETIC OPERATORS
// ==========================================

console.log("\n--- Arithmetic Operators ---");

let x = 3;
let y = 5;

console.log("Addition:", x + y);

x = 6;
y = 3;

console.log("Subtraction:", x - y);

x = 5;
y = 1;

console.log("Multiplication:", x * y);
console.log("Division:", x / y);

// Hexadecimal number
const hexNumber = 0xAB;

console.log("Hexadecimal 0xAB:", hexNumber);


// ==========================================
// ASSIGNMENT OPERATORS
// ==========================================

console.log("\n--- Assignment Operators ---");

let a = 1;
let b = 15;
let c = 15;

a <<= 3;   // a = a << 3
b >>= 3;   // b = b >> 3
c >>>= 2;  // c = c >>> 2

console.log("a <<= 3:", a);
console.log("b >>= 3:", b);
console.log("c >>>= 2:", c);


// ==========================================
// LOGICAL OPERATORS
// ==========================================

console.log("\n--- Logical Operators ---");

const name = "Akhil Hamal";
x = 6;
y = 3;

console.log("Name:", name);

console.log(
    "x < 10 && y > 1:",
    x < 10 && y > 1
);

console.log(
    "x < 10 && y < 1:",
    x < 10 && y < 1
);


// ==========================================
// TERNARY OPERATOR
// ==========================================

console.log("\n--- Ternary Operator ---");

function checkAge(age) {
    const result = age < 18 ? "Too young" : "Old enough";
    return result + " to vote.";
}

console.log("Age 18:", checkAge(18));
console.log("Age 15:", checkAge(15));


// ==========================================
// COMPARISON OPERATORS
// ==========================================

console.log("\n--- Comparison Operators ---");

const age = 5;

console.log("Is age equal to 8?", age == 8);
console.log("Is age strictly equal to 8?", age === 8);
console.log("Is age not equal to 8?", age != 8);
console.log("Is age greater than 3?", age > 3);
console.log("Is age less than 8?", age < 8);