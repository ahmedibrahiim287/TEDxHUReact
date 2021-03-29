const slideContainer = document.querySelector('.container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const interval = 3000;

let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true); //clones the first slide
const lastClone = slides[slides.length - 1].cloneNode(true); //clones the second slide

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone); //puts the first slide clone forward 
slide.prepend(lastClone); //puts the second slide clone backward

//returns the viewable width of an element in px
const slideWidth = slides[index].clientWidth; 

//CSS property that moves the slides depending on the slide width 
slide.style.transform = `translateX(${-slideWidth * index}px)`; 

console.log(slides);


//Arrow function "=()=>" allows us to write less syntax
const startSlide = () => {

//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).
//The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
  slideId = setInterval(
    () => {
      //function created to move slides
    moveToNextSlide();
  }, interval //the time set previously
  );
};


//The querySelectorAll() method returns all elements in the document that matches a specified CSS selector(s), as a static NodeList object.
const getSlides = () => document.querySelectorAll('.slide');

//The document.addEventListener() method attaches an event handler to the document
//transitioned checks if a transition happens or not, then call a function
slide.addEventListener('transitionend', () => {
  slides = getSlides();
  if (slides[index].id === firstClone.id) {
    slide.style.transition = 'none';
    index = 1;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }

  if (slides[index].id === lastClone.id) {
    slide.style.transition = 'none';
    index = slides.length - 2;
    slide.style.transform = `translateX(${-slideWidth * index}px)`;
  }
});

const moveToNextSlide = () => {
  slides = getSlides();
  if (index >= slides.length - 1) return;
  index++;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-(slideWidth-12.2) * index}px)`;
};

const moveToPreviousSlide = () => {
  if (index <= 0) return;
  index--;
  slide.style.transition = '.7s ease-out';
  slide.style.transform = `translateX(${-slideWidth * index}px)`;
};

slideContainer.addEventListener('mouseenter', () => {
  //The clearInterval() method clears a timer set with the setInterval() method.
  clearInterval(slideId);
});

slideContainer.addEventListener('mouseleave', startSlide);
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPreviousSlide);

startSlide();
