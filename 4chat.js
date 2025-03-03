document.addEventListener("DOMContentLoaded", function () {
    const socket = io.connect("http://127.0.0.1:5000");

    const messagesContainer = document.getElementById("messages");
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-btn");

    // Function to send a message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (message === "") return;

        addMessage("You: " + message, "user");
        socket.send(message);
        messageInput.value = "";
        messageInput.focus();
    }

    // Function to add messages to chat box
    function addMessage(text, sender) {
        const newMessage = document.createElement("div");
        newMessage.classList.add("message", sender);
        newMessage.textContent = text;

        messagesContainer.appendChild(newMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
    }

    // Handle incoming messages
    socket.on("message", function (msg) {
        // Show "FSL Assistant is typing..."
        const typingMessage = document.createElement("div");
        typingMessage.classList.add("message", "typing");
        typingMessage.textContent = "FSL Assistant is typing...";
        messagesContainer.appendChild(typingMessage);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Simulate delay before showing the response
        setTimeout(() => {
            typingMessage.remove(); // Remove "typing..." message
            addMessage("FSL Assistant: I still have much much much more to learn! I'll reply soon!");
        }, 1200);
    });

    // Send message when clicking the button
    sendButton.addEventListener("click", sendMessage);

    // Send message when pressing Enter key
    messageInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent form submission (if inside a form)
            sendMessage();
        }
    });
});
