let btn = document.getElementById("inspect-btn");

btn.addEventListener("click",inspect)

function inspect() {
    let text = document.getElementById("textarea").value.toLowerCase().split(' ');
    text.some((el) => el == "javascript") ? alert('text includes "JavaScript"'): alert('text doesnt includes "JavaScript');
}