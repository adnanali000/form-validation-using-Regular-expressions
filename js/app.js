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
    if (regex.test(str)) {
        name.classList.remove('is-invalid');
        validName = true;
    }
    else {
        name.classList.add('is-invalid');
        validName = false;

    }
})

//email validation

email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        email.classList.add('is-invalid');
        validEmail = false;

    }
})

//form validation

phone.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();
    //submit your form here
    if (validName && validEmail && validPhone) {
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.classList.add('show');
        //failure.classList.remove('show');
        //$('#failure').alert('close')
        $('#failure').hide();
        $('#success').show();


    } else {
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        //$('#success').alert('close');
        $('#success').hide();
        $('#failure').show();
        


    }

})