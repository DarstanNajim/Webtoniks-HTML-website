console.log('hello!')

const header = document.querySelector('.header');

window.onscroll = function (){
    var top = window.scrollY;
    console.log(top);
    if (top >= 100){
        header.classList.add('active')
    }else{
        header.classList.remove('active');
    }
}

//*Typerwriter animation //

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Grow", "Build", "Enhance", "Boost"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; 
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { 
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

const hamburger = document.getElementById ('hamburger');
const navUL = document.getElementById ('nav-ul');

hamburger.addEventListener ('click', () => {
    navUL.classList.toggle ('show');
});

/* Smooth scroll */
const scroll = new SmoothScroll('.header a[href*="#"]');