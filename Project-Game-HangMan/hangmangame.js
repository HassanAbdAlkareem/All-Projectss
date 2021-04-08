


// letters 
const letters = "abcdefghijklmnopqrstuvwxyz";

// get array from letters
let arrayletters = Array.from(letters)

// select letters container
let containerletters = document.querySelector(".letters")

// genrator letters
arrayletters.forEach( letter => {

   //create span
   let span = document.createElement("span");

   // crate letter text node
   let textletter = document.createTextNode(letter);

   // appen span to textletter
   span.appendChild(textletter);

   // add class to span
   span.className = "letter-box"

   containerletters.appendChild(span);
      
  });

// object of words 

const words = {
   programing : ["php","javascript","go","scale","python","c++" , "html" , "java"],
   movies :["parasite" , "prestige" , "inception","memento","coco","invisible guest" , "la casa"],
   people : ["ronaldo" , "messi" , "bill geats","alexandra", "albert einastein"],
   countries : ["iraq","egypt","syria","iran","lobnan","yamen" , "qatar"]
}


let allkeys = Object.keys(words); // all keys = programing and movies and people and  countries

// random for all keys : number(index)
let randompropnumber = Math.floor(Math.random() * allkeys.length) // index 0,1,2,3


// for category

let randompropname = allkeys[randompropnumber] // get just one words for example programing or people .. end 
let randompropvalue = words[randompropname] // get all value words and add to one array 

let randomvaluenumber = Math.floor(Math.random() * randompropvalue.length) // get all index one array

let randomvaluevalue = randompropvalue[randomvaluenumber] // finally get value one words and show 

// set info category
document.querySelector(".info-game .category span").innerHTML = randompropname;

let lettersguss = document.querySelector(".letters-guss")

 // convert word to array
 let letterandspace = Array.from(randomvaluevalue);


 letterandspace.forEach(letter => {

   // create empty span
   let emptyspin = document.createElement("span")

   if (letter === " ") {

      emptyspin.className = "with-space";
   }

   // append spqn to letter gues
   lettersguss.appendChild(emptyspin)

 });

 // select guess span
 let guessspan = document.querySelectorAll(".letters-guss span")

 let worngtrie = 0;

 let hangmandraw = document.querySelector(".hangman-draw")

 document.addEventListener("click" , (e) => {

   let status = false;
    
   if (e.target.className == "letter-box") {

      e.target.classList.add("clicked");  

      let clickletter = e.target.innerHTML.toLowerCase();

      let choceword = Array.from(randomvaluevalue.toLowerCase())

choceword.forEach((wordletter , wordindex) => {
   
   // if click letter equal to letter and space 
   if (clickletter === wordletter ) {

      status = true;
      // loop on guees span 
      guessspan.forEach((span , spanindex) => {

         if (wordindex === spanindex) {
            
         span.innerHTML = clickletter; }
      
     });
   }
});

   // if letter is wrong 
   if (status !== true) {

      // ++ wrong trie
      worngtrie++;

      // add class worng to draw elemnt
      hangmandraw.classList.add("worng-"+worngtrie)

      if(worngtrie === 8) {

         endgame()

         containerletters.classList.add("finish")
      }

      
   }
 }


});

// end game function 

function endgame() {

   // create popup div
   let div = document.createElement("div");
   let divtext = document.createTextNode("Game Over The word is -> " + randomvaluevalue )

   div.appendChild(divtext)
   div.className = "popup";
   document.body.appendChild(div);
}
