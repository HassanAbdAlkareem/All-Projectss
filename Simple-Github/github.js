

// varibles

let myinput = document.querySelector(".get-repos input");
let mybutton = document.querySelector(".get-repos .get-button");
let mydata = document.querySelector(".data-show");

mybutton.onclick = function () {

   getrepos();

}

// function get repos
function getrepos() {

   if(myinput.value == "") {

      mydata.innerHTML = "<span> Please Write Github Username. </span>"

   } else {

      fetch("https://api.github.com/users//$(myinput.value)/repos")

      .then((res) => res.json())

      .then((repos) => {

        mydata.innerHTML = "";

        //loop for repso
        repos.forEach(repo => {

         // create main div 
         let maindiv = document.createElement("div")
         let textdiv = document.createTextNode(repo.name)
         maindiv.appendChild(textdiv)

         // create repo url or link
         let url = document.createElement("a")
         let texturl = document.createTextNode("Visit")
         url.appendChild(texturl)

         // add href
         url.href = 'https://github.com/$(myinput.value)/$(repo.name)';

         // set attribute _blank
         url.setAttribute("target" , "_blank")

         // append url to main div 
         maindiv.appendChild(url)

         // craete Stars Count Span  
         let starspan = document.createElement("span")
         let startext = document.createTextNode(' Stars $(repo.stargazers_count)');
         starspan.appendChild(startext)
         maindiv.appendChild(starspan);

         // add class on main div 
         maindiv.className = "repo-box";
         // append main div to my data ( Html )
         mydata.appendChild(maindiv)
         

        });

      });
   }
}
