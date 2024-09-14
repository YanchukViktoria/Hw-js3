
let btn = document.getElementById("palindromeBtn")

let strFirstReversed;
let strSecReversed;

btn.addEventListener("click", checkPalindrome);


function checkPalindrome(){
    let strFirst = document.getElementById("palinfromeFirst");
    let strSec = document.getElementById("palinfromeSec");

    let srtfirstValue = strFirst.value;
    let srtSecValue = strSec.value;
    
    if(strFirst.value === strSec.value){
        for(let i = 0; i< srtfirstValue.length;i++){
            strFirstReversed = srtfirstValue.toLocaleLowerCase().split("").reverse("").join("");
        }
    }
    if(strFirst.value === strSec.value){
        for(let i = 0; i< srtSecValue.length;i++){
            strSecReversed = srtSecValue.toLocaleLowerCase().split("").reverse("").join("");
        }
    }
    if(strFirst.value === strFirstReversed){}else{
        alert("This is not the palindromes!")
        return;
    }
    if(strSec.value === strSecReversed){}else{
        alert("This is not the palindromes!")
        return;
    }
    if(strFirstReversed === strSecReversed){
        alert("This is the palindromes!")
    }
}