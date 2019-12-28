var h1 = document.querySelector("h1");
var h2 = document.querySelector("h2");
var h3 = document.querySelector("h3");
var css = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

h3.textContent = "initial color gradient : " + "linear-gradient(to right, "+ color1.value + " ,"+ color2.value + ")" ; 

function colorGradient() {

	body.style.background = "linear-gradient(to right, "+ color1.value + " ,"+ color2.value + ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorGradient);
color2.addEventListener("input", colorGradient);