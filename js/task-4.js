const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const elements = event.target.elements;

  const email = elements.email.value.trim();
  const password = elements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  event.target.reset();
}
