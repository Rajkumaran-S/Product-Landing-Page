const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateSlider() {
  sliderContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Optional: Automatic slider
setInterval(nextSlide, 5000); // Change slide every 5 seconds