const loginBtn = document.querySelector(".sign-in");
const signupBtn = document.querySelector(".sign-up");

const aside = document.querySelector(".user-action")
const popup = document.querySelector(".popup");
const closePopup = document.querySelectorAll(".close");

const forgotPasswordPopup = document.querySelector(".popup-forgot-password");
const forgotPassword = document.querySelector(".forgot-password");

const registerPopup = document.querySelector(".popup-register");
const login = document.querySelector(".popup-login");
const loginButton = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const btnForLogin = document.querySelector(".btn-for-login")
const btnForRegister = document.querySelector(".btn-for-register")

const spanError = document.querySelector(".error-message")


//>>>Pop script
loginButton.addEventListener("click", () => {
    login.classList.remove("hide");
    forgotPasswordPopup.classList.add("hide")
    registerPopup.classList.add("hide")
    registerPopup.classList.add("hide")
});
signupBtn.addEventListener("click", () => {
    login.classList.add("hide")
    aside.classList.remove("hide")
    popup.classList.remove("hide")
    forgotPasswordPopup.classList.add("hide")
    popup.classList.add("pop-show")
    registerPopup.classList.remove("hide")
});

registerBtn.addEventListener("click", () => {
    registerPopup.classList.remove("hide");
    login.classList.add("hide")
});
loginBtn.addEventListener("click", () => {
    popup.classList.remove("hide");
    registerPopup.classList.add("hide");
    popup.classList.add("pop-show")
    aside.classList.remove("hide")
    login.classList.remove("hide");

});
for (let i = 0; i < closePopup.length; i++) {
    closePopup[i].addEventListener("click", () => {
        popup.classList.remove("pop-show")
        popup.classList.add("hide")
        forgotPasswordPopup.classList.add("hide")
        aside.classList.add("hide")
        login.classList.remove("hide");
    })
}
forgotPassword.addEventListener("click", () => {
    forgotPasswordPopup.classList.remove("hide")
    login.classList.add("hide")
    registerPopup.classList.add("hide")
})
//>>>>End popup script

//>>>>save username and password
const checkBox = document.querySelector("#check-box");
checkBox.addEventListener("click", () => {
    if (checkBox.checked == true) {
        const inputUsername = document.querySelector(".popup-username").value;
        const inputPassword = document.querySelector(".popup-password").value;
        if (inputUsername === "") {
            return
        } else {
            localStorage.setItem("username", inputUsername);
            localStorage.setItem("password", inputPassword);
            console.log("cheked")
        }
    } else if (checkBox.checked == false) {
        console.log("unceked")
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }
});
//>>>>>>Button for login<<<<<<<<<
btnForRegister.addEventListener("click", () => {
    var a = document.querySelector(".popup-email").value;
    var b = document.querySelector(".reg-username").value;
    var c = document.querySelector(".reg-popup-password").value;
    var d = document.querySelector(".popup-repeat-password").value;

    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
        spanError.innerHTML = 'Please Fill All Required Field';
        event.preventDefault()
    }
    else if (c == d) {

    } else {
        event.preventDefault()
        spanError.innerHTML = 'Passwords do not match';
    }
});


//>>>>>>Checking local storage if username and password exist
window.addEventListener('load', () => {
    const inputUsername = document.querySelector(".popup-username");
    const inputPassword = document.querySelector(".popup-password");

    if (localStorage.hasOwnProperty("username") || localStorage.hasOwnProperty("password")) {
        const recivedUsername = localStorage.getItem("username");
        const recivedPassword = localStorage.getItem("password");
        inputUsername.setAttribute("value", recivedUsername);
        inputPassword.setAttribute("value", recivedPassword);
        checkBox.checked = true;
    } else {
        checkBox.checked = false;
    }
});


