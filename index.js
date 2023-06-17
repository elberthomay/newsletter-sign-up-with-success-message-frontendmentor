(() => {
    // Get references to the required elements
const emailInput = document.getElementById('email-input');
const emailErrorLabel = document.getElementById('email-error-label');
const signUpButton = document.getElementById('sign-up-button');
const signUpPopup = document.getElementById('sign-up-popup');
const popupContent = document.getElementById('popup-content');
const userEmailSpan = document.getElementById('user-email-span');
const closePopupButton = document.getElementById('close-popup-button');

// Add event listener to the button for when it is pressed
signUpButton.addEventListener('click', function() {
  const email = emailInput.value;

  if (!validateEmail(email)) {
    // Email is invalid, add the error class to the input and label
    emailInput.classList.add('email-error');
    emailErrorLabel.classList.add('email-error');
  } else {
    // Email validation successful, add the success class to the popup body
    signUpPopup.classList.add('email-success');
    userEmailSpan.innerText = email;
  }
});

// Add event listener to the email input for when it is focused
emailInput.addEventListener('focus', function() {
  // Remove the error class from the input and label
  emailInput.classList.remove('email-error');
  emailErrorLabel.classList.remove('email-error');
});

// Add event listener to the popup body for when it is clicked
signUpPopup.addEventListener('click', function(event) {
  if (event.target === signUpPopup || event.target === closePopupButton) {
    // Clicked on the popup body or the close button, remove the success class
    signUpPopup.classList.remove('email-success');
  }
});

// Function to validate the email format
function validateEmail(email) {
  // A simple email validation regex
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}
})()