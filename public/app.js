const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");



function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}
//default hidden
closeIcon.style.display = "none";
hamburger.addEventListener("click", toggleMenu);
/* console.log(toggleMenu); */



menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
)



let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to(".poppop", 3 ,{y:-600})
.fromTo(".grid",{y:0, duration:3} )
.to(".test_glass", 3, {top:"0%"}, "-=3")
.fromTo(".ccontainer-fluid",{opacity:0}, {opacity:1, duration:3})
.fromTo(".text",{opacity:0}, {opacity:1, duration:3})

//scrollMagic
let scene = new ScrollMagic.Scene({//we create a new scene, an animation
  triggerElement:"section",//when do we want it to start? meaning here immediatly in this case
  duration:"300%",//at what speed you want the animations to be activated
  triggerHook:0 //where do you want to start hooking on the html, we want it to start in the first element, meaning zero
  //if we wanted it to start once  we hit the second element, then we should put value 1, and so on for whole the elements html, can have 0.5
})

.setTween(timeline)//hook up the animation to scene
.addTo(controller)
//now we want to pin page
.setPin("section")

//code copied from plantchi
/* const hoverImage = document.querySelector('.accordionContainer');
const hoverImageOpen = document.querySelector('__1');
/* const hoverImageOpen = document.getElementsByTagName('div'); */
/* hoverImage.addEventListener('hover',function(e){
    hoverImageOpen.hidden = true;
  });  */
  //like this the block ".choose-your-plant" will be hidden!


//carrousel Nisrine

let slidePosition = 0;

const slides = document.getElementsByClassName('carousel__item');

const totalSlides = slides.length;

// console.log(slides);

document.getElementById('carousel-next').addEventListener("click", function(){

moveToNextSlide();

});


document.getElementById('carousel-prev').addEventListener("click", function(){

moveToPrevSlide();

});

//move the slides

function updateSlidePosition(){

for (let slide of slides){

slide.classList.remove('carousel__item--visible');

slide.classList.add('carousel__item--hidden');

};

slides[slidePosition].classList.add('carousel__item--visible');

};

function moveToNextSlide(){

if(slidePosition === totalSlides -1){

slidePosition = 0;

} else{

slidePosition++;

};

updateSlidePosition();

};

function moveToPrevSlide(){

if(slidePosition === 0 ){

slidePosition = totalSlides -1;

} else{

slidePosition--;

};

updateSlidePosition();

};



//using materiallibrary
/* const mdcFoo = require('@material/foo');
const MDCFoo = mdcFoo.MDCFoo;
const MDCFooFoundation = mdcFoo.MDCFooFoundation;

const foo = new MDCFoo(document.querySelector('.mdc-foo')); */







