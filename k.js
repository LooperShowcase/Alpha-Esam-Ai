// Get the form element by its ID
const loginForm = document.getElementById("loginForm");

// Add an event listener for the form submission
loginForm.addEventListener("submit", function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values entered by the user
    const username = loginForm.querySelector('input[name="username"]').value;
    const password = loginForm.querySelector('input[name="password"]').value;

    // You can add your validation logic here
    // For a basic example, you can check if the fields are not empty
    if (username.trim() === "" || password.trim() === "") {
        alert("Please fill in both username and password fields.");
    } else {
        // If the fields are not empty, you can submit the form
        loginForm.submit();
    }
});
