function validasi(event){


    let error = 0
    event.preventDefault();
    document.getElementById("usernameError").textContent = ""
    document.getElementById("userEmailError").textContent = ""
    document.getElementById("userCountryError").textContent = ""
    document.getElementById("userMessageError").textContent = ""

    //panjang karakter
    var username = document.getElementById("username").value
    console.log(username);
    if(username.length < 6){
        error++
        document.getElementById("usernameError").textContent = "Minimum length must be at least 6 character"
    }

    var email = document.getElementById("useremail").value
    if(!email.endsWith(".com")){
        document.getElementById("userEmailError").textContent = "Must end with .com"
        error++
    }
    if(email.length < 1){
        document.getElementById("userEmailError").textContent = "This field is required"
        error++
    }

    var country = document.getElementById("usercountry").value
    if(usercountry.length < 1){
        document.getElementById("userCountryError").textContent = "This field is required"
        error++
    }

    var message = document.getElementById("usermessage").value
    if(usermessage.length < 1){
        document.getElementById("userMessageError").textContent = "This field is required"
        error++
    }
    if(usermessage.length > 200){
        document.getElementById("userMessageError").textContent = "Maximum characters reached"
        error++
    }

    if(error > 0){
        event.preventDefault();
    }

    console.log(error)

}

