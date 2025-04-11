// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");
const nameInput = document.getElementById("user-name");
const emailInput = document.getElementById("user-email");
const messageInput = document.getElementById("user-message");

submitButton.addEventListener("click", () => {
    const name = nameInput ? nameInput.value.trim() : "";
    const email = emailInput ? emailInput.value.trim() : "";
    const message = messageInput ? messageInput.value.trim() : "";

    if (!name || !email || !message || !email.includes("@") || !email.includes(".")) {
        alert("Please fill out all fields before submitting.");
        return;
    }
    contactPage.innerHTML = ""; 
    const thankYouMessage = document.createElement("p"); 
    thankYouMessage.innerText = "Thank you for your message"; 
    thankYouMessage.style.alignItems = "center"; 
    thankYouMessage.style.justifyContent = "center"; 
    thankYouMessage.style.display = "flex"; 
    thankYouMessage.style.fontSize = "24px"; 
    contactPage.appendChild(thankYouMessage); 
});


