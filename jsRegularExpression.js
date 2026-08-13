//JavaScript Regular Expression

let text = "My name is Akhil Hamal and I am learning JavaScript.";

// 1. Create a Regular Expression
let pattern = /Akhil/i;


// 2. test() - checks whether the pattern exists
console.log("Akhil Hamal");
console.log("Using test():");
console.log(pattern.test(text));


// 3. search() - returns the position of the match
console.log("\nUsing search():");
console.log(text.search(pattern));


// 4. match() - returns the matched text
console.log("\nUsing match():");
console.log(text.match(pattern));


// 5. replace() - replaces the matched text
console.log("\nUsing replace():");
let newText = text.replace(pattern, "Akhil Bahadur");
console.log(newText);