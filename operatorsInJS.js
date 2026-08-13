//Arithmetic Operators in JS
let x = 3, y = 5; //Addition
let z = x + y;
console.log("Akhil Hamal");
console.log(z);

x = 6, y = 3; //Subtraction
z = x - y;
console.log(z);

x = 5, y = 1; //Multiplication
z = x * y;
console.log(z);

x = 5, y = 1; //Divison
z = x / y;
console.log(z);

let ab=0xAB;   //0x followed by Hexadecimal numbers 
console.log(ab);



//Assignment Operator in JavaScript
x = 1, y = 15;
z = 15;

x <<= 3;
y >>= 3;
z >>>= 2;

console.log("Akhil Hamal");
console.log("Value of x is: " + x);
console.log("Value of y is: " + y);
console.log("Value of z is: " + z);


//Logical Operator in JS
const name = "Akhil Hamal";

x = 6;
y = 3;

console.log(`${name}`);
console.log(`(x < 10 && y > 1): ${x < 10 && y > 1}`);
console.log(`(x < 10 && y < 1): ${x < 10 && y < 1}`);


//ternary operator in JS
function checkAge(age) {
    const voteable = (age < 18) ? "Too young" : "Old enough";
    return voteable + " to vote.";
}


// example usage
console.log("Akhil Hamal");
console.log(checkAge(18));
console.log(checkAge(15));


//Comaprison Operators in JS
name = "Akhil Hamal";
x = 5;

console.log(`${name}`);
console.log(`Is x equal to 8? ${x == 8}`);
