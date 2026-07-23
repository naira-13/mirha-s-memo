 // ======================================
// LOADER
// ======================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 2500);

});

// ======================================
// ENTER BUTTON
// ======================================

const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const website = document.getElementById("website");

website.style.display = "none";

enterBtn.addEventListener("click", () => {

    welcome.style.opacity = "0";

    setTimeout(() => {

        welcome.style.display = "none";
        website.style.display = "block";

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    }, 800);

});

// ======================================
// MUSIC
// ======================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-pause"></i>';

        playing = true;

    }

    else {

        music.pause();

        musicBtn.innerHTML =
            '<i class="fa-solid fa-music"></i>';

        playing = false;

    }

});

// ======================================
// PROGRESS BAR
// ======================================

window.addEventListener("scroll", () => {

    let winScroll =
        document.documentElement.scrollTop;

    let height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    let scrolled =
        (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});

// ======================================
// TOP BUTTON
// ======================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ======================================
// GALLERY LIGHTBOX
// ======================================

const images = document.querySelectorAll(".memory-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeLightbox");


images.forEach(img => {

    img.addEventListener("click",()=>{

        lightbox.style.display="flex";
        lightboxImg.src = img.src;

    });

});


if(closeBtn){

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

}


// ======================================
// SCROLL REVEAL ANIMATION
// ======================================

const revealElements =
document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


revealElements.forEach(element=>{


let windowHeight =
window.innerHeight;


let elementTop =
element.getBoundingClientRect().top;


if(elementTop < windowHeight - 100){

    element.classList.add("active");

}


});


});


// ======================================
// FALLING PETALS EFFECT
// ======================================

function createPetal(){

const petal =
document.createElement("div");


petal.classList.add("petal");


petal.innerHTML="🌸";


petal.style.left =
Math.random()*100+"vw";


petal.style.animationDuration =
(Math.random()*3+3)+"s";


document.body.appendChild(petal);


setTimeout(()=>{

petal.remove();

},6000);


}


setInterval(createPetal,500);


// ======================================
// RANDOM HEARTS
// ======================================

function createHeart(){

const heart =
document.createElement("div");


heart.classList.add("heart");


heart.innerHTML="❤️";


heart.style.left =
Math.random()*100+"vw";


heart.style.animationDuration =
(Math.random()*4+3)+"s";


document.body.appendChild(heart);


setTimeout(()=>{

heart.remove();

},7000);


}


setInterval(createHeart,800);


// ======================================
// CLICK SPARKLES
// ======================================

document.addEventListener("click",(e)=>{


const sparkle =
document.createElement("span");


sparkle.className="sparkle";

sparkle.innerHTML="✨";


sparkle.style.left =
e.pageX+"px";


sparkle.style.top =
e.pageY+"px";


document.body.appendChild(sparkle);


setTimeout(()=>{

sparkle.remove();

},1000);


});
// ======================================
// TIMELINE ACTIVE YEAR
// ======================================

const timelineItems =
document.querySelectorAll(".timeline-item");


window.addEventListener("scroll",()=>{


timelineItems.forEach(item=>{


let position =
item.getBoundingClientRect().top;


if(position < window.innerHeight - 150){

    item.classList.add("show");

}


});


});


// ======================================
// TYPEWRITER EFFECT
// ======================================

const textElement =
document.getElementById("typingText");


if(textElement){

const text =
textElement.innerHTML;


textElement.innerHTML="";


let index=0;


function type(){

if(index < text.length){

textElement.innerHTML += text.charAt(index);

index++;

setTimeout(type,80);

}

}


type();

}


// ======================================
// DATE COUNTER (MEMORIES)
// ======================================

const startDate =
new Date("2025-11-26");


const counter =
document.getElementById("daysCounter");


function updateCounter(){


if(counter){


const today =
new Date();


const difference =
today - startDate;


const days =
Math.floor(
difference / (1000*60*60*24)
);


counter.innerHTML =
days + " Days of Love ❤️";


}


}


updateCounter();


// ======================================
// SMOOTH SECTION SCROLL
// ======================================

document.querySelectorAll("a[href^='#']")
.forEach(link=>{


link.addEventListener("click",function(e){


e.preventDefault();


document.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});


});


});


// ======================================
// WEBSITE READY MESSAGE
// ======================================

console.log(
"Mirha Imaan Memories Website Loaded Successfully 💚"
);
