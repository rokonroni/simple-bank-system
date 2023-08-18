// Login js
document.getElementById('submit_btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user_email');
    const userPassword = document.getElementById('user_password');

    const emailValue = userEmail.value ;
    const passwordValue = userPassword.value;
    if (emailValue === 'testbank@gmail.com' && passwordValue === 'test123') {
        window.location.href('bank.html')       
    }
    else {
        alert ('Invalid User. Please check your email and password')
    }
})
