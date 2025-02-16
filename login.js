document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Sample credentials (Replace this with real authentication)
    const validUser = "admin";
    const validPass = "12345";

    if (username === validUser && password === validPass) {
        alert("Login successful!");
        localStorage.setItem("loggedIn", "true"); // Save login status
        window.location.href = "calculator.html"; // Redirect to calculator page
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
});
