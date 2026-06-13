console.log("contact.js loaded");

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (event) {
  // Clear all errors first
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  let isValid = true;

  if (nameInput.value.trim() === "") {
    nameError.textContent = "A name must be entered";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "A valid email address must be entered";
    isValid = false;
  }

  if (messageInput.value.trim() === "") {
    messageError.textContent = "A message must be entered";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});