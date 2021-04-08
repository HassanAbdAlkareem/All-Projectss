

let mybackground = document.querySelector(".slider");

let myimages = ["desing1.jpeg", "1.webp" , "black3.jpg", "black4.jpg", "desing2.jpg"];

setInterval (changeimg , 5000);

function changeimg() {

  let myrandom = Math.floor(Math.random() * myimages.length);

   mybackground.style.backgroundImage = 'url("../img/' + myimages[myrandom] +  ' " )';
   mybackground.style.transition = " 2s";

}


let myicon = document.querySelector(".icon");
let mybox = document.querySelector(".setting-box");

myicon.onclick = function () {

  mybox.classList.toggle("open")
}

