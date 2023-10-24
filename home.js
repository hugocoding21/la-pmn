let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-slide");

function showSlide(index) {
  slides[currentSlide].style.display = "none";
  currentSlide = (index + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

showSlide(0);
