var password = document.getElementById("password");
var confirm_password = document.getElementById("confirmPassword");
var passwordMismatchMessage = document.getElementById("passwordMismatchMessage");

// Function to validate password and confirm password
function validatePassword() {
    // If passwords don't match
    if (password.value !== confirm_password.value) {
        // Set custom validity message
        confirm_password.setCustomValidity("Passwords Don't Match");
        // Show password mismatch message
        passwordMismatchMessage.classList.remove("hidden");
    } else {
        // If passwords match, clear custom validity
        confirm_password.setCustomValidity("");
        // Hide password mismatch message
        passwordMismatchMessage.classList.add("hidden");
    }
}

password.addEventListener("input", validatePassword);
confirm_password.addEventListener("input", validatePassword);