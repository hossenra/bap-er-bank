// step-1: add click handeler with the submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step-2: get the email address inside the email input field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    // 3.1: set id on the html element
    // 3.2: get the element
    // 3.3: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // DANGER: do not verify email password on the client side
    // step-4: verify email and password and check wheather valid user or not
    if(email === 'sontan@bap.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('you are not able to access it!!!')
    }
})