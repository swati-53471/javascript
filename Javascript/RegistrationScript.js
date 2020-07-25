function RegistrationValidation() {
   
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('confirmPassword').value;
 
    if (username.trim() == "") {
        document.getElementById('checkUser').innerHTML = " ** Please fill the user name";
        return false;
    }


    if (name.trim() == "") {
        document.getElementById('checkName').innerHTML = " ** Please fill the full name";
        return false;
    }
    if (!isNaN(name)) {
        document.getElementById('checkName').innerHTML = " ** You must write only characters";
        return false;
    }

    if (phone.trim() == "") {
        document.getElementById('checkPhone').innerHTML = " ** Please fill the mobile number";
        return false;
    }
    if (isNaN(phone)) {
        document.getElementById('checkPhone').innerHTML = " ** user must write digits only not characters";
        return false;
    }
    if (phone.length != 10) {
        document.getElementById('checkPhone').innerHTML = " ** Mobile Number must be 10 digits only";
        return false;
    }


    if (email.trim() == "") {
        document.getElementById('emailid').innerHTML = " ** Please fill the email id field";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('emailid').innerHTML = " ** @ Invalid Position";
        return false;
    }

    if ((email.charAt(email.length - 4) != '.') && (emails.charAt(emails.length - 3) != '.')) {
        document.getElementById('emailid').innerHTML = " ** . Invalid Position";
        return false;
    }

    if (password.trim() == "") {
        document.getElementById('passwrd').innerHTML = " ** Please fill the password field";
        return false;
    }
    if ((password.length <= 5) || (password.length > 20)) {
        document.getElementById('passwrd').innerHTML = " ** Passwords lenght must be between  5 and 20";
        return false;
    }

    if (cpassword.trim() == "") {
        document.getElementById('checkConfirmPass').innerHTML = " ** Please fill the confirm password field";
        return false;
    }
    if (password != cpassword) {
        document.getElementById('checkConfirmPass').innerHTML = " ** Password does not match the confirm password";
        return false;
    }



   

}