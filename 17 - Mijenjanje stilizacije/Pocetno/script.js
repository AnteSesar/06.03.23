// //1
// var ul = document.querySelector("ul");
// ul.style.listStyleType = "decimal";

// //2
// var info = document.querySelector(".info");
// info.classList.add("hide");

// //3
// var body = document.querySelector("body");
// var sviStilovi = window.getComputedStyle(body, null);
// var stilMarginLeft = sviStilovi.getPropertyValue("margin-left");
// console.log(stilMarginLeft);

//4
var pocetnaMargina = sviStilovi.getPropertyValue("margin");
console.log(pocetnaMargina);
var marginaBroj = parseInt(pocetnaMargina);
console.log(marginaBroj);

var animacija = setInterval(funcFrame, 1000);
var unazad = false;

function funcFrame(){
    if (unazad == true){
        marginaBroj--;
    } else {
        marginaBroj++;
    }
    console.log(marginaBroj);
    if (marginaBroj == 30) {
        unazad = true;
        console.log("<<<<<<")
    }
    if (marginaBroj == 0) {
        unazad = false;
        console.log(">>>>>>")
    }
    body.style.margin = marginaBroj + "px";
}