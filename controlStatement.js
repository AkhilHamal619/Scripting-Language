//for Loop
console.log("Akhil Hamal");
for(let i=1; i<=5; i++)
{
    console.log(i);
}

//If and If-else in javascript

// Name
const name = "Akhil Hamal";

console.log(`${name}`);

// IF statement only
const currentHour = new Date().getHours();

if (currentHour < 18) {
    console.log("Good Day!");
}

console.log("Welcome to the program!");

// IF-ELSE statement
const proceed = confirm("Do you want to proceed?");

if (proceed) {
    console.log("User chose to proceed.");
    window.location.href = "https://www.google.com/";
} else {
    console.log("User chose not to proceed.");
    window.location.href = "https://www.facebook.com/";
}

//while Loop
console.log("Akhil Hamal");
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

//if...else if...else statement
function change_color()
{
    if (document.bgColor == '#0000ff')
        document.bgColor = '#00ff00';
    else if (document.bgColor == '#00ff00')
        document.bgColor = '#ff0000';
    else
        document.bgColor = '#0000ff';
}

//Switch Case Statement
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

console.log("Akhil Hamal");
console.log("Today is " + day);

//do while loop in JS
console.log("Akhil Hamal");
i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);

//infinite Loop in js
console.log("Akhil Hamal");
i = 1;

while (i <= 5) {
    console.log(i);
}