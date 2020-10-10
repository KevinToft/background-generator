var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var btnRandom = document.getElementById("random")

console.log(btnRandom);

function updateBackground() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

function randomBackground(){
    console.log("hi");
    var temp1 = Math.floor(Math.random()*16777215).toString(16);
    var temp2 = Math.floor(Math.random()*16777215).toString(16);
    var t1L = temp1.toString().length;
    var t2L = temp2.toString().length;

    if ((t1L < 6) || (t2L < 6)) {
        randomBackground();
        return;
    } else {
        color1.value = "#" + temp1;
        color2.value = "#" + temp2;
        updateBackground(); 
        return;
    }
}

updateBackground();
btnRandom.addEventListener("click", randomBackground);
color1.addEventListener("input", updateBackground);
color2.addEventListener("input",  updateBackground);