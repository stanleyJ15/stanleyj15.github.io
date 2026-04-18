// script.js — Night Screams

document.addEventListener('DOMContentLoaded', function() {

  let currentPage = window.location.pathname.split('/').pop();
  let links = document.querySelectorAll('nav a');

  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute('href') === currentPage) {
      links[i].classList.add('active');
    }
  }




  let slides = document.getElementsByClassName('mySlides');
  let dots   = document.getElementsByClassName('dot');
  let slideIndex = 0;

  function showSlide(n) {

    // si vamos después del último slide, ir al primero
    if (n >= slides.length) {
      slideIndex = 0;
    }

    // aqui si vamos antes del primer slide, ir al último
    if (n < 0) {
      slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove('active');
    }

    slides[slideIndex].style.display = 'block';
    dots[slideIndex].classList.add('active');
  }

  let prevBtn = document.querySelector('.prev');
  let nextBtn = document.querySelector('.next');

  prevBtn.addEventListener('click', function() {
    slideIndex = slideIndex - 1;
    showSlide(slideIndex);
  });

  nextBtn.addEventListener('click', function() {
    slideIndex = slideIndex + 1;
    showSlide(slideIndex);
  });

  for (let i = 0; i < dots.length; i++) {
    let index = i;
    dots[i].addEventListener('click', function() {
      slideIndex = index;
      showSlide(slideIndex);
    });
  }

  // cada 3.5 segundos
  setInterval(function() {
    slideIndex = slideIndex + 1;
    showSlide(slideIndex);
  }, 3500);

  showSlide(slideIndex);

});