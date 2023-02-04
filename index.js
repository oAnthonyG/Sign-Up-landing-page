const form = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');





function ValidateEmail () {
  const validRegexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.value.match(validRegexEmail)){
    return emailError.innerHTML = 'Invalid Email';
  } emailError.innerHTML = '';
}
function ValidatePassword () {
  const validRegexPassword = /^[A-Za-z0-9]\w{8,}$/;

  if(!password.value.match(validRegexPassword)){
    return passwordError.innerHTML = 'Invalid Passowrd'
  } passwordError.innerHTML = '';
}




form.addEventListener('submit', (e) => {
  e.preventDefault();
  
 ValidateEmail();
 ValidatePassword();

 window.location.href="./checked.html";
})