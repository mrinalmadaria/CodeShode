function checkPassword(){
    const password = document.getElementById('password').value;

    //password validation criteria
    const length = document.getElementById('length');
    const uppercase = document.getElementById('uppercase');
    const lowercase = document.getElementById('lowercase');
    const special = document.getElementById('special');
    const number = document.getElementById('number');

    //length checker
    if(password.length >= 8){
        length.classList.remove('invalid');
        length.classList.add('valid');
    }else{
        length.classList.remove('valid');
        length.classList.add('invalid');
    }

    //uppercase checker
    if(/[A-Z]/.test(password)){
        uppercase.classList.remove('invalid');
        uppercase.classList.add('valid');
    }else{
        uppercase.classList.remove('valid');
        uppercase.classList.add('invalid');
    }

    //lowercase checker
    if(/[a-z]/.test(password)){
        lowercase.classList.remove('invalid');
        lowercase.classList.add('valid');
    }else{
        lowercase.classList.remove('valid');
        lowercase.classList.add('invalid');
    }

    //special character checker
    if(/[\W_]/.test(password)){
        special.classList.remove('invalid');
        special.classList.add('valid');
    }else{
        special.classList.remove('valid');
        special.classList.add('invalid');
    }

    //number checker
    if(/[0-9]/.test(password)){
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');
    }
}

function validateForm(){
    const password = document.getElementById('password').value;

    const length = document.getElementById('length').classList.contains('valid');
    const uppercase = document.getElementById('uppercase').classList.contains('valid');
    const lowercase = document.getElementById('lowercase').classList.contains('valid');
    const special = document.getElementById('special').classList.contains('valid');
    const number = document.getElementById('number').classList.contains('valid');

    if(length && uppercase && lowercase && special && number){
        return true;
    }else{
        alert('Please ensure that your password meets all the specified criterias');
        return false;
    }
}