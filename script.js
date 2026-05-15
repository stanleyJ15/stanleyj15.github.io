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


// Trivias
const trivia = [
  "The shower scene in Psycho (1960) took 7 days to film using 70 camera setups — yet Hitchcock never showed the knife touching skin.",
  "The word 'zombie' comes from Haitian folklore and wasn't used in horror films until the 1930s.",
  "In The Exorcist (1973), the set was kept so cold that the actors' breath was visible — no special effects needed.",
  "Wes Craven based Freddy Krueger's name on a kid who bullied him in school.",
  "The original Halloween (1978) was filmed in just 20 days on a budget of $300,000 — it grossed over $70 million worldwide.",
  "The famous 'Here's Johnny!' line in The Shining was improvised by Jack Nicholson.",
  "Jaws (1975) caused a real-world drop in beach attendance across the United States after its release.",
  "The Blair Witch Project (1999) was one of the first films to use the internet for marketing, convincing many viewers it was real footage.",
  "Anthony Perkins was so typecast after Psycho that he struggled to get non-horror parts for years.",
  "The killer in Scream (1996) is called Ghostface — a name taken from a rubber Halloween mask found at the filming location.",
  "The chainsaw in The Texas Chain Saw Massacre (1974) was a real, running chainsaw on set — actors' fear was genuine.",
  "Stanley Kubrick had the Overlook Hotel's hedge maze built as a full-scale set for The Shining — cast members actually got lost in it."
];

function newTrivia() {
  const el = document.getElementById('trivia-text');
  if (!el) return;
  const current = el.innerText;
  let next;
  do { next = trivia[Math.floor(Math.random() * trivia.length)]; }
  while (next === current && trivia.length > 1);
  el.style.transition = 'opacity 0.3s';
  el.style.opacity = 0;
  setTimeout(() => { el.innerText = next; el.style.opacity = 1; }, 200);
}

document.addEventListener('DOMContentLoaded', function() {
  newTrivia();
});