// ==========================================
// FUNCTIONS IN JAVASCRIPT
// ==========================================

// Simple Function
function multiplyNumbers(a, b) {
    return a * b;
}

let x = multiplyNumbers(4, 3);

console.log("Akhil Hamal");
console.log(x);


// ==========================================
// FUNCTION CALL
// ==========================================

function greet() {
    console.log("My name is Akhil Hamal");
}

greet();


// ==========================================
// FUNCTION WITH PARAMETERS
// ==========================================

function introduce(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

introduce("Akhil Hamal", 20);


// ==========================================
// FUNCTION WITH RETURN VALUE
// ==========================================

function introduction(name, age) {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(introduction("Akhil Hamal", 20));


// ==========================================
// FUNCTION WITH DEFAULT PARAMETERS
// ==========================================

function defaultIntroduction(name = "Akhil Hamal", age = 20) {
    return `My name is ${name} and I am ${age} years old.`;
}

console.log(defaultIntroduction());
console.log(defaultIntroduction("John Doe", 25));


// ==========================================
// ARITHMETIC FUNCTIONS
// ==========================================

// Addition
function add(a, b) {
    return a + b;
}

console.log("Addition:", add(5, 10));


// Subtraction
function subtract(a, b) {
    return a - b;
}

console.log("Subtraction:", subtract(10, 5));


// Multiplication
function multiply(a, b) {
    return a * b;
}

console.log("Multiplication:", multiply(5, 10));


// Division
function divide(a, b) {
    return a / b;
}

console.log("Division:", divide(10, 5));


// ==========================================
// ARROW FUNCTION
// ==========================================

const multiplyArrow = (a, b) => a * b;

let result = multiplyArrow(4, 3);

console.log("Arrow Function Result:", result);


// ==========================================
// 'this' IN REGULAR FUNCTIONS
// ==========================================

function regularThis() {
    console.log(this);
}

regularThis();


// ==========================================
// 'this' IN ARROW FUNCTIONS
// ==========================================

const arrowThis = () => {
    console.log(this);
};

arrowThis();