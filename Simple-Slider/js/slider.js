
// this is information about what i need  
var sliderimg = Array.from(document.querySelectorAll(".slider-container img"));

var slidercount = sliderimg.length;

var currentslide = 1;

var slidernumnber = document.getElementById("slider-number");

// this is my button next and prev 
var nextbutton = document.getElementById("next");
var prevbutton = document.getElementById("prev"); 

// working function for ny button 
nextbutton.onclick = nextslid; 
prevbutton.onclick = prevslid;

// created ul and id and value al id for ul
var ul = document.createElement("ul"); 
ul.setAttribute("id" , "this-ul");

// now created li for ul === slider count array of images 
for (var i = 1 ; i<= slidercount; i++) {

//created li and set value text 1,2,3,4 ... to end 

   var li = document.createElement("li")
   li.setAttribute("data-index" , i);
   li.appendChild(document.createTextNode(i));

// append child li to ul || child to parent 
   ul.appendChild(li);  

}

// Add the elemnt created al ul to page 
document.getElementById("indi").appendChild(ul);

var ulid = document.getElementById("this-ul");

var Arrayul = Array.from(document.querySelectorAll("#this-ul li"));

for (i=0; i<Arrayul.length; i++) {

   Arrayul[i].onclick = function () {

      currentslide = parseInt(this.getAttribute("data-index"));

      chek();
   }
}
 
// on the function 

chek();

function nextslid() {

   if(nextbutton.classList.contains("dis")) {
      return false;
   }
   else {
currentslide ++;
chek(); }

} 

function prevslid() {

   if(prevbutton.classList.contains("dis")) {
      return false;
   }
   else {
currentslide--;
chek(); }

}
function chek() {

   slidernumnber.textContent = " Slide #" + (currentslide) + " Of " + (slidercount);

   //function for remove all active 
   removeallactive();
   
   // set active class on curren side or img
   sliderimg[currentslide-1].classList.add("active")

   // set active class on ul 
  ulid.children[currentslide-1].classList.add("active");

   // check if current is first add class dis
   if (currentslide === 1) {
      prevbutton.classList.add("dis")
   } 
   else {
      prevbutton.classList.remove("dis")
   }

   // check if current is last  add class dis
   if (currentslide == slidercount) {

      nextbutton.classList.add("dis")
   } 
   else {
     nextbutton.classList.remove("dis")
   }
 
}

function removeallactive() {

   sliderimg.forEach(function (img) {

      img.classList.remove("active")
   })

      Arrayul.forEach (function (ul) {
         ul.classList.remove("active")
      })
}

   
