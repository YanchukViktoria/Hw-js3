let arr = document.getElementById("arr");

let btn = document.getElementById("rangeBtn");

btn.addEventListener("click", countNumbers);

function countNumbers(){
    let numFirst = document.getElementById("range-input-first").value;
    let numSec = document.getElementById("range-input-sec").value;

    if(Number(numFirst) + Number(numSec) <=25){
        arr.style.transform = "rotate(15deg)"
        arr.style.transition = "all 600ms ease-out"
    } 
    if(Number(numFirst) + Number(numSec) <=50 && Number(numFirst) + Number(numSec) >= 25){
        arr.style.transform = "rotate(65deg)"
        arr.style.transition = "all 600ms ease-out"
    } 
    if(Number(numFirst) + Number(numSec) <=75 && Number(numFirst) + Number(numSec) >= 50){
        arr.style.transform = "rotate(117deg)"
        arr.style.transition = "all 600ms ease-out"
    } 
    if(Number(numFirst) + Number(numSec) <=100 && Number(numFirst) + Number(numSec) >= 75){
        arr.style.transform = "rotate(165deg)"
        arr.style.transition = "all 600ms ease-out"
    } 
}