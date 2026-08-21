// ==========================================
// Control Statements and Loops in JavaScript
// ==========================================

console.log("Akhil Hamal");


// ==========================================
// 1. For Loop
// ==========================================

// Prints numbers from 1 to 5.

for (let i = 1; i <= 5; i++) {
    console.log(i);
}


// ==========================================
// 2. If Statement
// ==========================================

// Storing a name
const name = "Akhil Hamal";

console.log(`Name: ${name}`);


// Checking the current time
const currentHour = new Date().getHours();

if (currentHour < 18) {
    console.log("Good Day!");
}

console.log("Welcome to the program!");


// ==========================================
// 3. If-Else Statement
// ==========================================

// Node.js does not have the browser's confirm() function.
// We use readline to get input from the user.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Do you want to proceed? (yes/no): ", (answer) => {

    if (answer.toLowerCase() === "yes") {
        console.log("User chose to proceed.");
        console.log("You would be redirected to Google in a browser.");
    } else {
        console.log("User chose not to proceed.");
        console.log("You would be redirected to Facebook in a browser.");
    }

    rl.close();


// ==========================================
// 4. While Loop
// ==========================================

// Prints numbers from 1 to 5.

    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }


// ==========================================
// 5. If...Else If...Else Statement
// ==========================================

// Changes a color value based on the current color.

    let backgroundColor = "#0000ff";

    function changeColor() {
        if (backgroundColor === "#0000ff") {
            backgroundColor = "#00ff00";
        } else if (backgroundColor === "#00ff00") {
            backgroundColor = "#ff0000";
        } else {
            backgroundColor = "#0000ff";
        }

        console.log("Background color:", backgroundColor);
    }

    console.log("Current color:", backgroundColor);

    changeColor();
    changeColor();
    changeColor();


// ==========================================
// 6. Switch Case Statement
// ==========================================

// Get the current day of the week.

    let day;

    switch (new Date().getDay()) {
        case 0:
            day = "Sunday";
            break;

        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;

        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break;

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;
    }

    console.log("Today is " + day);


// ==========================================
// 7. Do-While Loop
// ==========================================

// The do-while loop executes at least once
// before checking the condition.

    i = 1;

    do {
        console.log(i);
        i++;
    } while (i <= 5);


// ==========================================
// 8. Infinite Loop
// ==========================================

// WARNING:
// This creates an infinite loop because
// i is never increased.
//
// DO NOT RUN THIS CODE.

/*
    i = 1;

    while (i <= 5) {
        console.log(i);
    }
*/

});