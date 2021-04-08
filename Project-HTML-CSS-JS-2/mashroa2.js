
// check if there's local storage color option

let maincolors = localStorage.getItem("color-option");

if (maincolors !== null) {
    document.documentElement.style.setProperty("--main--color", localStorage.getItem("color-option"))

}


// start opend and show icon //
document.querySelector(".icon").onclick = function () {

    document.querySelector(".setting-box").classList.toggle("open")
}
// end opend icon //


// switch color 
const colorsli = document.querySelectorAll(".colors-list li")

//loop on All list (li) items 
colorsli.forEach(li => {

    //click on Every list(li) item . 
    li.addEventListener("click", (e) => {

        //set color on root (--main--color)
        document.documentElement.style.setProperty("--main--color", e.target.dataset.colors)

        //set color on local storage 
        let maincolors = localStorage.setItem("color-option", e.target.dataset.colors);

        handelactive(e);
    });
});


// start change background-image //
let landingpage = document.querySelector(".landing-page")

let images = ["desing1.jpeg", "black2.jpg", "black3.jpg", "black4.jpg", "desing2.jpg"];


setInterval( () => {

    let randomnumber = Math.floor(Math.random() * images.length);

    landingpage.style.backgroundImage = 'url("../img/' + images[randomnumber] + ' ")';
    landingpage.style.transition = "all 4s ease-in-out";

}, 5000)
// end change background-image //



// selector skills 
let ourskills = document.querySelector(".skills");

window.onscroll = function () {

    //skills offset top 
    let skillsoffsettop = ourskills.offsetTop;

    // skills outer height 
    let skillsouterheight = ourskills.offsetHeight;

    //window height

    let windowheight = this.innerHeight;

    //windos scrolltop 
    let windowscrolltop = this.pageYOffset;

    if (windowscrolltop < (skillsoffsettop + skillsouterheight - windowheight)) {

        let allskills = document.querySelectorAll(".skills-box .skills-pro span")

        allskills.forEach(skill => {

            skill.style.width = skill.dataset.pro;
        });

    }
}

// عرفنه العناصر الي نريد نوصللها 
let ourger = document.querySelectorAll(".ger .images-box img")

// نسوي فور على جميع الصور
ourger.forEach(img => {

    // من ندوس على الصوره يصير حدث معين
    img.addEventListener("click", (e) => {

        // الحدث هوة راح نضيف دف جديد مع الكلاس  //
        let overlay = document.createElement("div");
        overlay.className = "popup-overlay";

        // راح نضيف الكلاس ب البدي
        document.body.appendChild(overlay)

        //ندخل على المرحله الجديده نسوي البوب اب بوكس 
        let popupbox = document.createElement("div");
        popupbox.className = "popup-box";


        if (img.alt !== null) {

            //وضيف بي النص مال الات h3 الالت ادا ما فارغ  سويلي 
            let imgheading = document.createElement("h3");
            let imgtext = document.createTextNode(img.alt);

            imgheading.appendChild(imgtext);

            popupbox.appendChild(imgheading)

            // راح نسوي علامه اكس حتى نخرج من الصوره 
            let closebutton = document.createElement("span")
            closebutton.className = "closebutton"

            let closebuttontext = document.createTextNode("X")

            closebutton.appendChild(closebuttontext)
            popupbox.appendChild(closebutton)
        }

        // ندخل على المرحله الجديده ننشا الصوره
        let popupimg = document.createElement("img");

        // راح نغيير سورس الصوره
        popupimg.src = img.src;

        // نضيف الصوره تحت البوب اب بوكس
        popupbox.appendChild(popupimg)

        // نضيف البوب اب بوكس تحت البدي
        document.body.appendChild(popupbox);

    });
});

document.addEventListener("click", function (e) {

    if (e.target.className == 'closebutton') {

        e.target.parentNode.remove();

        document.querySelector(".popup-overlay").remove();
    }
})


// select all bullets

var alllinks = document.querySelectorAll(".links a");

var allbullets = document.querySelectorAll(".nav-bullets .bullets");

function somewhere(element) {

    element.forEach(ele => {

        ele.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelectorAll(e.target.dataset.scetion).scrollIntoView({

                behavior: 'smooth'

            })
        })
    })
}

// handel active 

function handelactive(ev) {

    ev.target.parentElemnt.querySelectorAll(".active").forEach(elemnt => {

        // remove to class active
        elemnt.classList.remove("active")

    })
    // add to class active
    ev.target.add("active");
}

somewhere(alllinks);
somewhere(allbullets);


document.querySelectorAll(".reset-option").onclick = function () {

    localStorage.clear();

    //realod window
    window.location.reload()
}


var mybutton = document.querySelector(".my-button");

window.onscroll = function () {

    if(window.pageYOffset >= 2500 ) {

    mybutton.style.display = "block"
 } 
  
 else {

    mybutton.style.display = "none"
 }
}

mybutton.onclick = function () {

    window.scrollTo(0,0);
}