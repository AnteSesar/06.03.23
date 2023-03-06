//1
var h1 = document.querySelector("h1");
h1.innerText = "Karlovac";

//2
var divDesciption = document.querySelector(".description");
divDesciption.innerHTML = "Grad na <h3>5 rijeka</h3>";

//3
var info = document.querySelector(".info");
info.textContent = "Peta rijeka je piva.";


//4
var rijeke = ["Kupa", "Korana", "Dobra", "Mreznica", "Karlovačko pivo"];
var info = document.getElementById("footer");

for(let i = 0; i < rijeke.length; i++)
{
    footer.querySelectorAll("li")[i].innerText = rijeke[i];
}

//5
//var divElement = document.getElementById("element");
var myPageOffsetY = 1300;
var myScrollTop = 200;
var myKorisnikEkran = 730;

var visljivY = myPageOffsetY - myScrollTop - myKorisnikEkran
