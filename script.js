const form = document.getElementById("registrationForm");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const password = document.getElementById("password").value;

    const passwordError = document.getElementById("passwordError");
    const message = document.getElementById("message");

    passwordError.textContent = "";
    message.textContent = "";

    // Check required fields
    if (!name || !roll || !email || !course || !password) {
        message.textContent = "Please fill in all required fields.";
        message.style.color = "red";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    // Password must contain at least 8 characters,
    // one uppercase letter, one lowercase letter,
    // one number and one special character.
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    if (!passwordPattern.test(password)) {
        passwordError.textContent =
            "Use 8+ characters with uppercase, lowercase, number and special character.";
        return;
    }

    message.textContent = "Registration form validated successfully!";
    message.style.color = "green";

});