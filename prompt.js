// ==========================================
// PRICE CALCULATOR - NODE.JS
// ==========================================

const readline = require("readline");

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Akhil Hamal");
console.log("Price Calculator");


// Get Price
input.question("Enter the price: ", price => {

    // Get Quantity
    input.question("How many: ", quantity => {

        const total = Number(price) * Number(quantity);

        console.log("\n--- Result ---");
        console.log(`Price: ${price}`);
        console.log(`Quantity: ${quantity}`);
        console.log(`Total: ${total}`);

        console.log("\nThank You!");

        input.close();
    });
});