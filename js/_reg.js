const btn = document.getElementById("reg-btn");
const chekbox = document.getElementById("reg-log");
const container = document.getElementById("reg-container");
const wrapper = document.getElementById("reg-wrapper");

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