//1
var ul = document.querySelector("ul");
ul.style.listStyleType = "decimal";

//2
var info = document.querySelector(".info");
info.classList.add("hide");

//3
var body = document.querySelector("body");
var sviStilovi = window.getComputedStyle(body, null);
var stilMarginLeft = sviStilovi.getPropertyValue("margin-left");
console.log(stilMarginLeft);

//4
