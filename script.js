const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
let autoSlide;

function updateSlidePosition() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlidePosition();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlidePosition();
}

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoSlide();
});

startAutoSlide();