


const gap = 20;

const carouselPortrets = document.getElementById("carousel-portrets"),
  contentPortrets = document.getElementById("content-portrets"),
  nextPortrets = document.getElementById("next-portrets"),
  prevPortrets = document.getElementById("prev-portrets");

nextPortrets.addEventListener("click", () => {
  carouselPortrets.scrollBy(widthPortrets + gap, 0);
  // create statement to set carousel back to start point
  if (carouselPortrets.scrollWidth !== 0) {
    prevPortrets.style.display = "flex";
  }
  if (contentPortrets.scrollWidth - widthPortrets - gap <= carouselPortrets.scrollLeft + widthPortrets) {
    nextPortrets.style.display = "none";
  }
});
prevPortrets.addEventListener("click", () => {
  carouselPortrets.scrollBy(-(widthPortrets + gap), 0);
  // create statement to set carousel back to end point
  if (carouselPortrets.scrollLeft - widthPortrets - gap <= 0) {
    prevPortrets.style.display = "none";
  }
  if (!contentPortrets.scrollWidth - widthPortrets - gap <= carouselPortrets.scrollLeft + widthPortrets) {
    nextPortrets.style.display = "flex";
  }
});

let widthPortrets = carouselPortrets.offsetWidth;
window.addEventListener("resize", e => (widthPortrets = carouselPortrets.offsetWidth));

const carouselOther = document.getElementById("carousel-other"),
  contentOther = document.getElementById("content-other"),
  nextOther = document.getElementById("next-other"),
  prevOther = document.getElementById("prev-other");

nextOther.addEventListener("click", () => {
  carouselOther.scrollBy(widthOther + gap, 0);
  // create statement to set carousel back to start point
  if (carouselOther.scrollWidth !== 0) {
    prevOther.style.display = "flex";
  }
  if (contentOther.scrollWidth - widthOther - gap <= carouselOther.scrollLeft + widthOther) {
    nextOther.style.display = "none";
  }
});
prevOther.addEventListener("click", () => {
  console.log('test');
  carouselOther.scrollBy(-(widthOther + gap), 0);
  // create statement to set carousel back to end point
  if (carouselOther.scrollLeft - widthOther - gap <= 0) {
    prevOther.style.display = "none";
  }
  if (!contentOther.scrollWidth - widthOther - gap <= carouselOther.scrollLeft + widthOther) {
    nextOther.style.display = "flex";
  }
});

let widthOther = carouselOther.offsetWidth;
window.addEventListener("resize", e => (widthOther = carouselOther.offsetWidth));
