let loginBtn = document.getElementById("loginBtn");
let regBtn = document.getElementById("registerBtn");
let loginForm = document.getElementById("login");
let regForm = document.getElementById("register");

// Initially show login, hide register
loginForm.style.left = "4px";
loginForm.style.opacity = "1";
loginForm.style.zIndex = "2";

regForm.style.right = "-520px";
regForm.style.opacity = "0";
regForm.style.zIndex = "1";

function login() {
    // Slide login into view
    loginForm.style.left = "4px";
    loginForm.style.opacity = "1";
    loginForm.style.zIndex = "2";

    // Slide register out
    regForm.style.right = "-520px";
    regForm.style.opacity = "0";
    regForm.style.zIndex = "1";
}

function register() {
    // Slide register into view
    regForm.style.right = "5px";
    regForm.style.opacity = "1";
    regForm.style.zIndex = "2";

    // Slide login out
    loginForm.style.left = "-510px";
    loginForm.style.opacity = "0";
    loginForm.style.zIndex = "1";
}
