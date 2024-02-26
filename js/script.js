let form = document.getElementById('form_free');
let inputEmail = document.getElementById('email');
let error_messages = document.querySelectorAll('.error_message');
let inputs = document.querySelectorAll('input');
let error_icon = document.querySelectorAll('.error_icon');
let toast = document.querySelector('.toast');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  if(window.userInstance) {
    let fields = window.userInstance.validateEmptyField();
    let emailValidate = window.userInstance.validateEmail();

    error_messages.forEach((message, i) => {
      let isError = !fields[i];
      if (i === 2) {
        isError = !emailValidate;
        inputEmail.ariaPlaceholder = isError ? 'email@example.com' : inputEmail.value;
        inputEmail.classList.toggle('error_email', isError);
      }

      inputs[i].classList.toggle('error', isError);
      message.classList.toggle('active', isError);
      error_icon[i].classList.toggle('active', isError);
    });
  }

  if (window.userInstance && window.userInstance.validateEmptyField() && window.userInstance.validateEmail()) {
    toast.classList.add('active');
    clearForm();
    
    setTimeout(() => {
      toast.classList.remove('active');
    }, 3000);
  } 
});

function clearForm() {
  inputs.forEach(input => {
    input.value = '';
  });
}