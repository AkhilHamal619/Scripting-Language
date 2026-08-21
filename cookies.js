// ==========================================
// Cookies in JavaScript (Node.js)
// ==========================================

console.log("Akhil Hamal");


// ==========================================
// 1. Create Cookies
// ==========================================

let cookies = {};

cookies.username = "Akhil";
cookies.city = "Kathmandu";

console.log("Current cookies:");
console.log(cookies);


// ==========================================
// 2. Read a Cookie
// ==========================================

console.log("Username:", cookies.username);
console.log("City:", cookies.city);


// ==========================================
// 3. Create a Cookie with Expiry Time
// ==========================================

// Cookie expires after 3600 seconds (1 hour).

cookies.course = {
    value: "JavaScript",
    maxAge: 3600
};

console.log("After adding course:");
console.log(cookies);


// ==========================================
// 4. Delete a Cookie
// ==========================================

delete cookies.username;

console.log("After deleting username:");
console.log(cookies);


// ==========================================
// 5. Final Cookies
// ==========================================

console.log("Final cookies:");
console.log(cookies);