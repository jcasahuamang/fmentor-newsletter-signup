const btnDismiss = document.getElementById("btnDismiss");
const signupForm = document.getElementById("form");

const container = document.querySelector(".container");
const confirmation = document.querySelector(".confirmation");
const confirmationEmail = document.querySelector(".confirmation-email");

// select the email form field message element
const messageLabel = document.querySelector(".form-input-label p");        
const inputEmail = document.querySelector(".form-input input");

function handleSubmit(e) {
  e.preventDefault() // prevent the default behaviour
  
  const formDataEntries = new FormData(signupForm).entries();
  const { email } = Object.fromEntries(formDataEntries);

   const emailErrorMessage = validateEmail(email);

   if (emailErrorMessage) {
    messageLabel.innerText = emailErrorMessage;
    inputEmail.classList.add('error-input');

    }
  else{
    inputEmail.classList.remove('error-input');

    container.classList.toggle('container-active');
    confirmation.classList.toggle('confirmation-active');

    confirmationEmail.innerText = email;
    messageLabel.innerText = "";
    inputEmail.value="";

  }

}


signupForm.addEventListener('submit', handleSubmit);

btnDismiss.addEventListener("click", function () {
    container.classList.toggle('container-active');
    confirmation.classList.toggle('confirmation-active');

  });


function validateEmail(email) {
  if (!email) return 'Email is required';

  const isValidEmail = /^\S+@\S+$/g
  if (!isValidEmail.test(email)) {
    return 'Please enter a valid email';
  }
  return '';
}
