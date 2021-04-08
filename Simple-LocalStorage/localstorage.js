
// select varabiles

let allspan = document.querySelectorAll(".buttons span");
let result = document.querySelector(".result span");
let myinput = document.getElementById("input");

allspan.forEach (span => {

   span.addEventListener("click" , (e) => {

      if (e.target.className == "check-item") {

        checkitem()

      }
      
      if (e.target.className == "add-item") {

         additem()
 
       }
       
      if (e.target.className == "delete-item") {

         deleteitem()
 
       }
       
      if (e.target.className == "show-item") {

         showitem()
 
       }

   })
});

function checkinput() {

      result.innerHTML = " Sorry Input Cant Be Empty " 

}

function checkitem() {

   if(myinput.value !== "") {

      if (localStorage.getItem(myinput.value)) {

         result.innerHTML = "Found Local Item Called " + "<span>" + myinput.value + "</span>"

      } else {

         result.innerHTML = " No Local Storge with the Name " + "<span>" + myinput.value + "</span>"
      }

   } else {

     checkinput()

   }
}

function additem() {

   if(myinput.value !== "") {

      localStorage.setItem(myinput.value , "test")

      result.innerHTML = " Local Storge Item " + " <span>" + myinput.value +  "</span> " +  " Added " 

      myinput.value = "" 

      myinput.focus()
   
   } else {

     checkinput()

   }
}    

function deleteitem() {

   if(myinput.value !== "") {

      if (localStorage.getItem(myinput.value)) {

         localStorage.removeItem(myinput.value)

         result.innerHTML = " Local  Storage Item " + "<span>" + myinput.value + "</span> " + " Deleted";

         myinput.value = ""

      } else {

         result.innerHTML = " No Local Storge with the Name " + "<span>" + myinput.value + "</span>"
      }
   
   } else {

     checkinput()

   }
}

function showitem() {

   if(localStorage.length) {

      result.innerHTML = ""

      for (let [key , value] of Object.entries(localStorage)) {

         result.innerHTML += "<span class='key'>"  + key  + "</span>"
      }

   }
}

  