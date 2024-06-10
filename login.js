// step-1 add event handler with submit button 

document.getElementById('btn-submit').addEventListener('click', function () {
    // console.log('submit button clicked');
    // step-2 get the email address inside the email input field 
    //always remember to use .value to get text from an input field

    const emailfield = document.getElementById('user-email');
    const email = emailfield.value;

    // console.log(email);
    // step - 3: get password
    //set id on the html element
    // get the element
    //get the value from the element

    const passwordfield = document.getElementById('user-password');
    const password = passwordfield.value;

    // console.log(email, password);
    // Danger: do not verify email password on the client side 
    // step-4: verify email and password

    if (email === 'lima@gmail.com' && password === 'rahat') {
        // console.log('valid user')
        window.location.href = 'bank.html';
    }
    else {
        // console.log('invalid user')
        alert('Entre Correct Password');
    }



});




