

let allheight = window.innerHeight;
let upperheight = document.querySelector(".upper-bar").clientHeight;
let navbarheight = document.querySelector(".navbar").clientHeight;
let carouselitem = document.querySelectorAll(".carousel-item")

document.querySelector(".slider").style.height = (allheight -(upperheight + navbarheight)) + "px";

for(let i=0; i<carouselitem.length; i++) {
   
   carouselitem[i].style.height = (allheight -(upperheight + navbarheight)) + "px";
} 


// featured work shuffle

$(".featured-work ul li").on("click", function () {

   $(this).addClass("active").siblings().removeClass("active")

   if ($(this).data("class") === ".all") {

      $(".all-img-box .col-sm").css("opacity", 1)

    } else {

      $(".all-img-box .col-sm").css("opacity", "0.2")
      $($(this).data("class")).parent().css("opacity", 1)
    }
  })


let toup = document.querySelector(".to-up")

window.onscroll = function () {

  if(pageYOffset > 1200) {

    toup.style.opacity = "1"
  }

  else {
    toup.style.opacity = "0"

  }

}

toup.onclick = function () {

  window.scrollTo(0,0)

}

