const sliderContainer = document.querySelector(".sliderContainer");
const sliders = document.querySelectorAll(".slider");
const nxtBtn = document.querySelector("#nxtBtn");
let counter = 1;
const size = 200;

sliderContainer.style.transform = `translateX(-${size * counter}px)`;

nxtBtn.addEventListener("click", () => {
  if (counter === 5) {
    return;
  }
  sliderContainer.style.transition = "transform 0.2s ease";
  counter++;
  sliderContainer.style.transform = `translateX(-${size * counter}px)`;
  console.log(counter);
});

sliderContainer.addEventListener("transitionend", () => {
  if (counter === 5) {
    sliderContainer.style.transition = "none";
    counter = 1;
    sliderContainer.style.transform = `translateX(-${size * counter}px)`;
  }
});
