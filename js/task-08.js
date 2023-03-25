const formRef = document.querySelector('form.login-form');

function onSubmitForm(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const email = formElements.email.value
    const password = formElements.password.value

    const formValue = {
        email,
        password,
    };

    email === '' || password === '' ?
    alert('Не введено email та password') :
    console.log(formValue);

    event.currentTarget.reset();
};

formRef.addEventListener('submit', onSubmitForm);