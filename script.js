// Define a sample user for authentication
const sampleUser = {
    username: "user123",
    password: "password123",
};

// Show login popup
const showPopupBtn = document.querySelector(".login-btn");
showPopupBtn.addEventListener("click", () => {
    document.body.classList.add("show-popup");
});

// Hide login popup
const hidePopupBtn = document.querySelector(".form-popup .close-btn");
hidePopupBtn.addEventListener("click", () => {
    document.body.classList.remove("show-popup");
});

// Show or hide signup form
const signupLoginLink = document.querySelectorAll(".bottom-link a");
signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(".form-popup").classList.toggle("show-signup");
    });
});

// Authenticate user on form submission
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    try {
        if (!username || !password) {
            throw new Error("Username and password are required fields.");
        }
        authenticateUser(username, password);
        alert("Login successful!");
        clearLoginForm();
        closePopup();
    } catch (error) {
        handleError(error.message);
    }
});

document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const email = document.getElementById("email").value;
    const newPassword = document.getElementById("new-password").value;
    const policyChecked = document.getElementById("policy").checked;
    
    try {
        if (!newUsername || !email || !newPassword) {
            throw new Error("All fields are required.");
        }

        if (!isValidEmail(email)) {
            throw new Error("Invalid email format.");
        }

        if (newUsername.length < 8) {
            throw new Error("Username must be at least 8 characters.");
        }

        if (newPassword.length < 8) {
            throw new Error("Password must be at least 8 characters.");
        }

        if (!policyChecked) {
            throw new Error("Please accept the Terms & Conditions.");
        }
        // Perform signup actions
        alert("Signup successful!");
        clearSignupForm();
        closePopup();
    } catch (error) {
        handleError(error.message);
    }
});

// Function to authenticate the user
function authenticateUser(username, password) {
    if (username !== sampleUser.username || password !== sampleUser.password) {
        throw new Error("Invalid username or password.");
    }
}

// Function to validate email format
function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

// Clear the login form fields
function clearLoginForm() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

// Clear the signup form fields
function clearSignupForm() {
    document.getElementById("new-username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("policy").checked = false;
}

// Close the popup
function closePopup() {
    document.body.classList.remove("show-popup");
}

// Handle errors
function handleError(errorMessage) {
    alert(errorMessage);
}
