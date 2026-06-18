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

  // Regex validation Patterns
  const nameFieldValidPattern = /^[A-Za-z][A-Za-z -]{1,50}$/; 
  const emailFieldValidPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const messageFieldValidPattern = /^.{5,500}$/;
  

  // Name field validation

  if (nameFieldValidPattern.test(nameInput.value.trim()) === false) {
    nameError.textContent = "A valid name must be entered (Letters & spaces only and 1-50 characters)";
    isValid = false;
  }

  // Email field validation
  if (emailFieldValidPattern.test(emailInput.value.trim()) === false) {
    emailError.textContent = "A valid email address must be entered";
    isValid = false;
  }

  // Message field validation
  if (messageFieldValidPattern.test(messageInput.value.trim()) === false) {
    messageError.textContent = "A message between 5 and 500 characters must be entered";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }

  else {
    alert("Your message has been sent.");
  }

});