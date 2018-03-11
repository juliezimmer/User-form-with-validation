// Event Listeners for the input fields of form
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
   // get the value entered in the name field
   const name = document.getElementById('name');
   // create variable for the regular expression that is matched
   const re = /^[a-zA-Z]{2,10}$/; // this matches a string that starts with an a-z upper or lowercase letter, and is between 2 and 10 characters.

   // name.value grabs the input from the text field
   if(!re.test(name.value)) { // this is the case for if the name value does NOT match the reg exp.  The class="is invalid" is dynamically added to the DOM so the error shows.
      name.classList.add('is-invalid');
   }else {
     name.classList.remove('is invalid'); 
   }
}

function validateZip() {
   // get the value entered in the zipcode field
   const zip = document.getElementById('zip');
   // create variable for the regular expression that is matched
   const re = /^[0-9]{5}(-[0-9]{4})?$/; // this matches a string that has 5 numbers that are 0-9 '-' 4 numbers that are 0-9 that are optional. Everything in (-[0-9]{4}) is optional

   // zip.value grabs the input from the text field
   if(!re.test(zip.value)) { // this is the case for if the name value does NOT match the reg exp.  The class="is invalid" is dynamically added to the DOM so the error shows.
      zip.classList.add('is-invalid');
   }else {
      zip.classList.remove('is-invalid'); 
   }
}

function validateEmail() {
   // get the value entered in the email field
   const email = document.getElementById('email');
   // create variable for the regular expression that is matched
   const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]{2,5})$/; 

   // email.value grabs the input from the text field
   if(!re.test(email.value)) { // this is the case for if the name value does NOT match the reg exp.  The class="is invalid" is dynamically added to the DOM so the error shows.
      email.classList.add('is-invalid');
   }else {
      email.classList.remove('is-invalid'); 
   }
}

function validatePhone() {
   // get the value entered in the phone field
   const phone = document.getElementById('phone');
   // create variable for the regular expression that is matched
   const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/; 

   // phone.value grabs the input from the text field
   if(!re.test(phone.value)) { // this is the case for if the name value does NOT match the reg exp.  The class="is invalid" is dynamically added to the DOM so the error shows.
      phone.classList.add('is-invalid');
   }else {
      phone.classList.remove('is-invalid'); 
   }
}