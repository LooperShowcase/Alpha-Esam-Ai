const chatContainer = document.getElementById("chat-container");
        const userInputElement = document.getElementById("user-input");
        const submitButton = document.getElementById("submit-button");

        submitButton.addEventListener("click", function() {
            const userMessage = userInputElement.value;
            
            if (userMessage.trim() !== "") {
                // Display user's message in the chat container
                chatContainer.innerHTML += `<p>User: ${userMessage}</p>`;
                
                // Clear the user input field
                userInputElement.value = "";

                // You can process the user's message or store it in a database here
                // For simplicity, we're just displaying it in the chat container.
            }
        });