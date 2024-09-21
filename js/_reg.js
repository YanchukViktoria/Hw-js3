const btn = document.getElementById("reg-btn");
const btnReg = document.getElementById("regist-btn");
const btnLog = document.getElementById("login-btn");
const chekbox = document.getElementById("reg-log");
let nameReg = document.getElementById("reg-input-name-reg");
let mailLog = document.getElementById("reg-input-mail-log");
let passwordLog = document.getElementById("reg-input-password-log");
let mailReg = document.getElementById("reg-input-mail-reg");
let passwordReg = document.getElementById("reg-input-password-reg");
const container = document.getElementById("reg-container");
const wrapper = document.getElementById("reg-wrapper");

btnReg.addEventListener("click", function () {
    if (!mailReg.value.includes("@")) {
        alert("Invalid email format");
    } else if (passwordReg.value.length < 6) {
        alert("Password must be at least 6 characters long");
    } else if (nameReg.value.length < 3) {
        alert("Username must be at least 3 characters long");
    }
});

btnLog.addEventListener("click", function () {
    if (!mailLog.value.includes("@")) {
        alert("Invalid email format");
    } else if (passwordLog.value.length < 6) {
        alert("Password must be at least 6 characters long");
    }
});

let isRotated = false;

btn.addEventListener("click", rotation);

function rotation() {
    if (isRotated) {
        wrapper.style.transform = "rotateY(0deg)";
    } else {
        container.style.transform = "rotateY(180deg)";
        wrapper.style.transform = "rotateY(180deg)";
    }
    
    isRotated = !isRotated
}