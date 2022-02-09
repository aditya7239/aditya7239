function validate() {
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="password111") {
        window.open("/mainpage.html")
        alert("Login Successful")
    
    }
    else{
        alert("invalid credentials")
    }
}