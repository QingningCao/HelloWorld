console.log('connected');

let body = document.querySelector("body");

// select each circle
let yellowCircle = document.getElementById("yellowButton");
let blueCircle = document.getElementById("blueButton");
let whiteCircle = document.getElementById("whiteButton");
let grayCircle = document.getElementById("grayButton");

let circles = document.querySelectorAll("ul");
console.log(circles);

circles.addEventListener("click", changeBackgroundColor);

function changeBackgroundColor(event){
    console.log(event.target);
}

// get the body element
// let body = document.querySelector("body");

// add an event listener to each circle
yellowCircle.addEventListener("click", turnPageYellow);
blueCircle.addEventListener("click", turnPageBlue);
whiteCircle.addEventListener("click", turnPageWhite);
grayCircle.addEventListener("click", turnPageGray);

// write an evend handler to change the color of the page which each circle is pressed.
function turnPageYellow() {
    console.log("turn me yellow");
    let heading = document.querySelector("h1");
    heading.style.color = "blue";
    body.style.backgroundColor = "yellow";
}

function turnPageBlue() {
    let heading = document.querySelector("h1");
    heading.style.color = "white";
    console.log("turn me white");
    body.style.backgroundColor = "blue";
}

function turnPageWhite() {
    let heading = document.querySelector("h1");
    heading.style.color = "black";
    body.style.backgroundColor = "white";
}

function turnPageGray() {
    body.style.backgroundColor = "gray";
}