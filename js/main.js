/* var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
} */
$(".owl-carousel").owlCarousel({
  stagePadding: 50,
  items: 4,
  loop: true,
  margin: 0,
  autoplay: true,
  autoplayhoverpause: true,
  autoplaytimeout: 0,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
      },
      600:{
          items:3,
      },
      1000:{
          items:5,
      }
  }
});

window.onload = function() {
  Particles.init({
// normal options
selector: '.background',
maxParticles: 200,
// options for breakpoints
responsive: [
{
breakpoint: 768,
options: {
  maxParticles: 100
}
}, {
breakpoint: 425,
options: {
  maxParticles: 50
}
}, {
breakpoint: 320,
options: {
  maxParticles: 0 // disables particles.js
}
}
]
});
};

