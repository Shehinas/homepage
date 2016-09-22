function formValidation() {
        var userNameValue = document.getElementById("username").value,
        	passwordValue = document.getElementById("username").value,
        	userMsg = document.getElementById("user");
        
        if (userNameValue.trim().length>0 && passwordValue.trim().length>0 ) {
            userMsg.innerHTML = "Hi "+userNameValue;
        } else {
        	alert("Please enter Username/Password to login!");
        }
        
}