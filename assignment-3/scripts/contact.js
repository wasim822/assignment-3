// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
const submitButton = document.getElementById("submit-button");
const contactPage = document.getElementById("contact-page");
const messageInput = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {

    const message = messageInput.value.trim(); //get value
    console.log("working1");
    if (message === "") {
      alert("Please enter a message before submitting.");
      console.log("Please enter a message before submitting.");
      return;
      
    }
    
    console.log("working2");
    contactPage.innerHTML = ""; //clear
    const thankYouMessage = document.createElement("h1"); //create
    thankYouMessage.innerText = "Thank you for your message"; //message 
    thankYouMessage.style.fontSize = "24px"; //size
    contactPage.appendChild(thankYouMessage); //append
    


});


