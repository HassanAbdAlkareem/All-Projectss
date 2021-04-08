


let allheight = window.innerHeight;
let navbarheight = document.querySelector(".navbarr").clientHeight;
let carouselitem = document.querySelectorAll(".carousel-item")

document.querySelector(".slider").style.height = (allheight - navbarheight) + "px";

for(let i=0; i<carouselitem.length; i++) {
   
   carouselitem[i].style.height = (allheight - navbarheight) + "px";
} 

// for add active and remove active on about me

$(function (){

   $(".info-list li").click(function () {
      $(this).addClass("active").siblings("li").removeClass("active")
      $(".information div").hide();
      $("." + $(this).data("class")).show();
   })
})

let buttonSeeMore = document.querySelector(".see-more .button-see-more");
let twosection = document.querySelector(".see-more .two");
let threesection = document.querySelector(".see-more .three");
let foursection = document.querySelector(".see-more .four");

buttonSeeMore.onclick = function () {

   twosection.style.display = "block";
   threesection.style.display = "block";
   foursection.style.display = "block";

   buttonSeeMore.style.display = "none"
}

// start opend and show icon //
document.querySelector(".icon-side i").onclick = function () {

   document.querySelector(".slider-side").classList.toggle("open")
}
window.onscroll = function () {

if(window.pageYOffset > 800) {
   document.querySelector(".up").style.display = "block"

} else {
   document.querySelector(".up").style.display = "none";
  }
}
 document.querySelector(".up").onclick = function () {

    window.scrollTo(0,0)
 }



