function formValidation() {
    var userNameValue = document.getElementById("username").value,
        passwordValue = document.getElementById("password").value,
        userMsg = document.getElementById("user"),
        logoutBtn = document.getElementById('logoutBtn'),
        loginBtn = document.getElementById('loginBtn'),
        loginBtnClass = loginBtn.classList,
        logoutBtnClass = logoutBtn.classList;

    if (userNameValue.trim().length > 0 && passwordValue.trim().length > 0) {
        userMsg.innerHTML = "Hi " + userNameValue;
        window.location.hash = "";

        logoutBtn.remove('hide');
        logoutBtnClass.add('show_inline_block');
        if (loginBtnClass.contains('show_inline_block')) {
            loginBtnClass.remove('show_inline_block');
        }
        loginBtnClass.add('hide');
    } else {
        alert("Please enter Username/Password to login!");
    }
}
