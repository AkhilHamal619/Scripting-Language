//Simple Function in JavaScript
let x = myFunction(4, 3);

console.log("Akhil Hamal");
console.log(x);

function myFunction(a, b) {
    return a * b;
}

//function call 
function akhil()
{
    console.log("My name is Akhil Hamal");  
}
akhil();

//function with parameters
function akhil1(name, age)
{
    console.log("My name is " + name + " and I am " + age + " years old.");  
}
akhil1("Akhil Hamal", 20);

//function with return value
function akhil2(name, age)
{
    return "My name is " + name + " and I am " + age + " years old.";  
}
console.log(akhil2("Akhil Hamal", 20));

//function with default parameters
function akhil3(name = "Akhil Hamal", age = 20)
{
    return "My name is " + name + " and I am " + age + " years old.";  
}
console.log(akhil3());
console.log(akhil3("John Doe", 25));

//function to add
function add(a, b)
{
    return a + b;
}

add(5, 10);

//function to subtract
function subtract(a, b)
{
    return a - b;

}
subtract(10, 5);

//function to multiply
function multiply(a, b)
{
    return a * b;
}
multiply(5, 10);

//function to divide
function divide(a, b)
{
    return a / b;
}
divide(10, 5);

//arrow functions
myFunction = (a, b) => a * b;

let result = myFunction(4, 3);
console.log(result);

//this in functions
function myFunction1() {
    console.log(this);
}
myFunction1();

//this in arrow functions
const myFunction2 = () => {
    console.log(this);
}
myFunction2();

