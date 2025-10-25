let loginbtn = document.getElementById("loginBtn");
let regBtn = document.getElementById("registerBtn");
let loginform = document.getElementById("login");
let regform = document.getElementById("register");


function login(){
    loginform.style.left = "4px";
    regform.style.right = "-520px";
    regform.style.marginRight = "0px";
}

function register(){
    loginform.style.left = "-510px";
    regform.style.right = "5px";
    regform.style.marginRight = "200px";
}