//Numbers: Extra Large Numbers in JavaScript
console.log("Akhil Hamal");

const x = 123e5;
const y = 123e-5;

console.log(x);
console.log(y);

//Number Methods in JavaScript
const num = 15.56789;

console.log(num.toString());
console.log(num.toExponential(2));
console.log(num.toFixed(2));
console.log(num.toPrecision(4));

//Numbers: 64-bit Floating Point in JavaScript
const num1 = 12345678901234567890;
const num2 = 12345678901234567890n; // BigInt

console.log(num1);
console.log(num2);

//Numbers: NaN in JavaScript
const num3 = "Hello" / 2;

console.log(num3); // NaN
console.log(isNaN(num3)); // true   

//Numbers: Floating Precision in JavaScript
const num4 = 0.1 + 0.2;

console.log(num4);

//Numbers: NaN - Not a Number in JavaScript
const num5 = 0 / 0;

console.log(num5);

//Numbers: isNaN in JavaScript
const num6 = "Hello" / 2;

console.log(isNaN(num6)); // true

//Numbers: typeof NaN in JavaScript
const num7 = NaN;

console.log(typeof num7); // number

//Numbers: Infinity in JavaScript
const num8 = 1 / 0;

console.log(num8); // Infinity

//Numbers: -Infinity in JavaScript
const num9 = -1 / 0;

console.log(num9); // -Infinity

//Numbers: Hexadecimal Numbers in JavaScript
const num10 = 0xFF;

console.log(num10); // 255

//Numbers: Numbers as Objects in JavaScript
const num11 = new Number(123);

console.log(num11);


