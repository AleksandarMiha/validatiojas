function check() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    

    if(username === "" || password === "") {
        alert("Please fill in all fields");
        return false;
    }else {
        return true;
    }
}