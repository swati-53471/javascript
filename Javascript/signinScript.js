function SignInValidation(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log(email);
    console.log(password.length);
     
    if (email == "") {
        document.getElementById('emailid').innerHTML = " ** Please fill the email id field";
        return false;
    }
    
    if (email.indexOf('@') <= 0) {
        document.getElementById('emailid').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('emailid').innerHTML = " ** . Invalid Position";
        return false;
    }

    if (password == "") {
        document.getElementById('passwrd').innerHTML = " ** Please fill the password field";
        return false;
    }
    if ((password.length <= 5) || (pass.length > 20)) {
        document.getElementById('passwrd').innerHTML = " ** Passwords lenght must be between  5 and 20";
        return false;
    }

}