const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validName = false;
let validEmail = false;
let validPhone = false;
$('#success').hide();
$('#failure').hide();

name.addEventListener('blur', () => {
    //validate name here
    let regex = /^[a-zA-z]([0-9a-zA-z]){2,10}$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        console.log('your name is valid');
        name.classList.add('is-invalid');
        validName = false;

    }
})

//email validation

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('your email is no valid');
        email.classList.add('is-invalid');
        validEmail = false;

    }
})

//form validation

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('you have submitted your form');
    //submit your form here
    if (validName && validEmail && validPhone) {
        let failure = document.getElementById('failure');
        console.log('Phone , Name , Email are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        //failure.classList.remove('show');
        //$('#failure').alert('close')
        $('#failure').hide();
        $('#success').show();


    } else {
        console.log('One of name,email,phone are not valid.Hence not submitting the form. please correct');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        //$('#success').alert('close');
        $('#success').hide();
        $('#failure').show();
        


    }

})