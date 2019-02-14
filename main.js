/////////////Sticky Header/////////////
window.onscroll = function() {dropDown()};
let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;

function dropDown() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove('absolute');
    navbar.classList.add('sticky');
    //top methods remove the absolute property allowing the sticky class to takeover after the scrolling offset
  } else {
    navbar.classList.remove('sticky');
    navbar.classList.add('absolute');
  }
}


/////////////Hamburger Menu Dropdown/////////////
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
//simply toggles class on and off on a click
navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});


/////////////Carousel/////////////
//carousel with buttons
let slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 5000);

function nextSlide() {
    goToSlide(currentSlide+1);
}

function previousSlide() {
    goToSlide(currentSlide-1);
}

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    currentSlide = (n+slides.length)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

var next = document.getElementById('next');
var previous = document.getElementById('previous');

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};

//testimonial slider///////////////
let slides2 = document.querySelectorAll('#slides2 .slide2');
let currentSlide2 = 0;
let slideInterval2 = setInterval(nextSlide2, 4000);


// slideInterval.addEventListener('click', nextSlide);

// function for showing the next slide
function nextSlide2(){
  // changing the current slides class so it is not showing
  slides2[currentSlide2].className = 'slide2';
  // This cycles like a clock, it adds 1 to each slide then the modulo of the slides length switching on to the next one and next one....
  currentSlide2 = (currentSlide2 + 1) % slides2.length;
  // simply adds the showing class to intervall the slides
  slides2[currentSlide2].className = 'slide2 showing';
};
