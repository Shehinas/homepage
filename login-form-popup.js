function formValidation() {
    var userNameValue = document.getElementById("username").value,
        passwordValue = document.getElementById("password").value,
        userMsg = document.getElementById("user"),
        logoutBtn = document.getElementById('logoutBtn'),
        loginBtn = document.getElementById('loginBtn');

    if (userNameValue.trim().length > 0 && passwordValue.trim().length > 0) {
        userMsg.innerHTML = "Hi " + userNameValue;
        window.location.hash = "";
        logoutBtn.classList.remove('hide');
        logoutBtn.classList.add('show_inline_block');
        if (loginBtn.classList.contains('show_inline_block')) {
        	loginBtn.classList.remove('show_inline_block');
        }        
        loginBtn.classList.add('hide');
    } else {
        alert("Please enter Username/Password to login!");
    }
}
