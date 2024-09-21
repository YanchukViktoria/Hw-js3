let section = document.getElementById("section-range");

let arr = document.getElementById("arr");

let btn = document.getElementById("rangeBtn");

btn.addEventListener("click", countNumbers);

function countNumbers(){
    let numFirst = document.getElementById("range-input-first").value;
    let numSec = document.getElementById("range-input-sec").value;

    if(Number(numFirst) + Number(numSec) <=25){
        arr.style.transform = "rotate(15deg)"
        arr.style.transition = "all 600ms ease-out"
        section.style.background = "radial-gradient(circle, rgba(253,132,105,1) 3%, rgba(255,255,255,1) 27%)";
    } 
    if(Number(numFirst) + Number(numSec) <=50 && Number(numFirst) + Number(numSec) >= 25){
        arr.style.transform = "rotate(65deg)"
        arr.style.transition = "all 600ms ease-out"
        section.style.background = "radial-gradient(circle, rgba(253,210,159,1) 3%, rgba(255,255,255,1) 27%)";
    } 
    if(Number(numFirst) + Number(numSec) <=75 && Number(numFirst) + Number(numSec) >= 50){
        arr.style.transform = "rotate(117deg)"
        arr.style.transition = "all 600ms ease-out"
        section.style.background = "radial-gradient(circle, rgba(160, 218, 255) 3%, rgba(255,255,255,1) 27%)";
    } 
    if(Number(numFirst) + Number(numSec) <=100 && Number(numFirst) + Number(numSec) >= 75){
        arr.style.transform = "rotate(165deg)"
        arr.style.transition = "all 600ms ease-out"
        section.style.background = "radial-gradient(circle, rgba(195, 208, 191) 3%, rgba(255,255,255,1) 27%)";
    } 
}