// ==========================================
// break and continue in JavaScript
// ==========================================

console.log("Akhil Hamal");


// ==========================================
// break Statement
// ==========================================

// The break statement stops the loop completely
// when i becomes 3.

let text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break;
    }

    text += "The number is " + i + "\n";
}

console.log("Using break:");
console.log(text);


// ==========================================
// continue Statement
// ==========================================

// The continue statement skips the current
// iteration when i becomes 3 and continues
// with the next iteration.

text = "";

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue;
    }

    text += "The number is " + i + "\n";
}

console.log("Using continue:");
console.log(text);