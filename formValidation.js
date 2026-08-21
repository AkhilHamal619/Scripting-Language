// Form Validation
// Name, Date, Email, Password, Phone Number

function validateName(name) {
    const nameRegex = /^[A-Za-z\s'-]{2,50}$/;

    if (!name || name.trim().length === 0) {
        return { valid: false, message: "Name is required." };
    }

    if (!nameRegex.test(name)) {
        return {
            valid: false,
            message: "Name must contain only letters, spaces, hyphens, or apostrophes."
        };
    }

    return { valid: true, message: "Valid name." };
}


function validateDate(dateString) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

    if (!dateString) {
        return { valid: false, message: "Date is required." };
    }

    if (!dateRegex.test(dateString)) {
        return { valid: false, message: "Date must be in YYYY-MM-DD format." };
    }

    const [year, month, day] = dateString.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    if (
        date.getFullYear() !== year ||
        date.getMonth() !== month - 1 ||
        date.getDate() !== day
    ) {
        return { valid: false, message: "Invalid calendar date." };
    }

    return { valid: true, message: "Valid date." };
}


function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || email.trim().length === 0) {
        return { valid: false, message: "Email is required." };
    }

    if (!emailRegex.test(email)) {
        return { valid: false, message: "Please enter a valid email address." };
    }

    return { valid: true, message: "Valid email." };
}


function validatePassword(password) {
    if (!password) {
        return { valid: false, message: "Password is required." };
    }

    const errors = [];

    if (password.length < 8) {
        errors.push("at least 8 characters");
    }

    if (!/[A-Z]/.test(password)) {
        errors.push("one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
        errors.push("one lowercase letter");
    }

    if (!/[0-9]/.test(password)) {
        errors.push("one number");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("one special character");
    }

    if (errors.length > 0) {
        return {
            valid: false,
            message: `Password must contain ${errors.join(", ")}.`
        };
    }

    return { valid: true, message: "Strong password." };
}


function validatePasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        return { valid: false, message: "Passwords do not match." };
    }

    return { valid: true, message: "Passwords match." };
}


function validatePhoneNumber(phone) {
    if (!phone || phone.trim().length === 0) {
        return { valid: false, message: "Phone number is required." };
    }

    const cleanedPhone = phone.replace(/[\s()-]/g, "");
    const phoneRegex = /^\+?[1-9]\d{7,14}$/;

    if (!phoneRegex.test(cleanedPhone)) {
        return {
            valid: false,
            message: "Please enter a valid phone number."
        };
    }

    return { valid: true, message: "Valid phone number." };
}


function validateForm(formData) {
    const results = {
        name: validateName(formData.name),
        date: validateDate(formData.date),
        email: validateEmail(formData.email),
        password: validatePassword(formData.password),
        phone: validatePhoneNumber(formData.phone)
    };

    const isFormValid = Object.values(results).every(result => result.valid);

    return {
        isFormValid,
        results
    };
}


// Test Data
const testData = {
    name: "Akhil Hamal",
    date: "2003-07-22",
    email: "akhil@example.com",
    password: "Str0ng@Pass",
    phone: "+977 9841234567"
};


// Display Name
console.log("Name: Akhil Hamal");

// Validate Form
const result = validateForm(testData);

console.log(result);