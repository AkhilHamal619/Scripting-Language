// 1. Create a cookie
document.cookie = "username=Akhil";

// 2. Read the cookie
console.log("Current cookies:");
console.log(document.cookie);

// 3. Create a cookie with expiry time (1 hour)
document.cookie = "city=Kathmandu; max-age=3600";

// Read again
console.log("After adding city:");
console.log(document.cookie);

// 4. Delete a cookie
document.cookie = "username=; max-age=0";

console.log("After deleting username:");
console.log(document.cookie);

// 5. Complete example: create another cookie
document.cookie = "course=JavaScript; max-age=3600";

console.log("Akhil Hamal");
console.log("Final cookies:");
console.log(document.cookie);