//break and continue in JavaScript
console.log("Akhil Hamal");

let text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; // Exit the loop when i is 3
    }
    text += "The number is " + i + "\n";
}

console.log(text);

text = "";
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue; // Skip the rest of the loop when i is 3
    }
    text += "The number is " + i + "\n";
}

console.log(text);