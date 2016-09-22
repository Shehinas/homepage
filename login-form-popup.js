function formValidation() {
    var userNameValue = document.getElementById("username").value,
        passwordValue = document.getElementById("password").value,
        userMsg = document.getElementById("user"),
        logoutBtn = document.getElementById('logout-btn'),
        loginBtn = document.getElementById('login-btn');

    if (userNameValue.trim().length > 0 && passwordValue.trim().length > 0) {
        userMsg.innerHTML = "Hi " + userNameValue;
        window.location.hash = "";
        logoutBtn.classList.remove('hide');
        logoutBtn.classList.add('show-inline-block');
        if (loginBtn.classList.contains('show-inline-block')) {
        	loginBtn.classList.remove('show-inline-block');
        }        
        loginBtn.classList.add('hide');
    } else {
        alert("Please enter Username/Password to login!");
    }
}
