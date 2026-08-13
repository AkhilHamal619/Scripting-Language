//Name Validation, Date Validation, Email Validation, Password Validation, Phone Number Validation

/**
 * ============================
 * NAME VALIDATION
 * ============================
 * Allows letters, spaces, hyphens, apostrophes (e.g., "Mary-Jane O'Brien")
 * Length: 2-50 characters
 */
function validateName(name) {
    const nameRegex = /^[A-Za-z\s'-]{2,50}$/;
    
    if (!name || name.trim().length === 0) {
        return { valid: false, message: "Name is required." };
    }
    if (!nameRegex.test(name)) {
        return { valid: false, message: "Name must contain only letters, spaces, hyphens, or apostrophes (2-50 characters)." };
    }
    return { valid: true, message: "Valid name." };
}


/**
 * ============================
 * DATE VALIDATION
 * ============================
 * Expects format: YYYY-MM-DD
 * Checks format validity AND that it's a real calendar date
 */
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

    const isValidDate =
        date.getFullYear() === year &&
        date.getMonth() === month - 1 &&
        date.getDate() === day;

    if (!isValidDate) {
        return { valid: false, message: "Invalid calendar date." };
    }

    return { valid: true, message: "Valid date." };
}

// Optional: Validate date is not in the future (e.g., for birthdates)
function validatePastDate(dateString) {
    const result = validateDate(dateString);
    if (!result.valid) return result;

    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (inputDate > today) {
        return { valid: false, message: "Date cannot be in the future." };
    }
    return { valid: true, message: "Valid date." };
}


/**
 * ============================
 * EMAIL VALIDATION
 * ============================
 * Standard RFC-like pattern (covers most real-world cases)
 */
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


/**
 * ============================
 * PASSWORD VALIDATION
 * ============================
 * Requires: min 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
 */
function validatePassword(password) {
    if (!password) {
        return { valid: false, message: "Password is required." };
    }

    const errors = [];

    if (password.length < 8) errors.push("at least 8 characters");
    if (!/[A-Z]/.test(password)) errors.push("one uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("one lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("one number");
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push("one special character");

    if (errors.length > 0) {
        return {
            valid: false,
            message: `Password must contain ${errors.join(", ")}.`
        };
    }

    return { valid: true, message: "Strong password." };
}

// Optional: Check if password and confirm password match
function validatePasswordMatch(password, confirmPassword) {
    if (password !== confirmPassword) {
        return { valid: false, message: "Passwords do not match." };
    }
    return { valid: true, message: "Passwords match." };
}


/**
 * ============================
 * PHONE NUMBER VALIDATION
 * ============================
 * Supports optional country code + 10-digit numbers
 * Accepts formats like: +1234567890, 123-456-7890, (123) 456-7890
 */
function validatePhoneNumber(phone) {
    if (!phone || phone.trim().length === 0) {
        return { valid: false, message: "Phone number is required." };
    }

    // Strip common formatting characters for validation
    const cleaned = phone.replace(/[\s()-]/g, "");
    const phoneRegex = /^\+?[1-9]\d{7,14}$/; // E.164-ish: 8–15 digits, optional +

    if (!phoneRegex.test(cleaned)) {
        return { valid: false, message: "Please enter a valid phone number (8-15 digits, optional country code)." };
    }

    return { valid: true, message: "Valid phone number." };
}


/**
 * ============================
 * USAGE EXAMPLE
 * ============================
 */
function validateForm(formData) {
    const results = {
        name: validateName(formData.name),
        date: validateDate(formData.date),
        email: validateEmail(formData.email),
        password: validatePassword(formData.password),
        phone: validatePhoneNumber(formData.phone)
    };

    const isFormValid = Object.values(results).every(r => r.valid);

    return { isFormValid, results };
}

// Example test
const testData = {
    name: "Sita Sharma",
    date: "1998-05-20",
    email: "sita@example.com",
    password: "Str0ng@Pass",
    phone: "+61 412 345 678"
};

console.log(validateForm(testData));