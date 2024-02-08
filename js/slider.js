const images = document.querySelectorAll(".slider-img");
const controlls = document.querySelectorAll(".controlls");
const dots = document.querySelectorAll(".dot");
const count = images.length - 1;
let imageIndex = 0;
let interval;
let timeout;

const launchSlider = () => {
  if (count <= imageIndex) return show(0);
  return show(Number(imageIndex) + Number(1));
};

function handleIntervalSlider() {
  interval = setInterval(launchSlider, 2000);
}

function handleTimeoutSlider() {
  timeout = setTimeout(handleIntervalSlider, 4000);
}

function show(index) {
  images[imageIndex].classList.remove("images-active");
  dots[imageIndex].classList.remove("dot-active");

  images[index].classList.add("images-active");
  dots[index].classList.add("dot-active");

  imageIndex = index;
}

controlls.forEach((e) => {
  e.addEventListener("click", (event) => {
    clearTimeout(timeout);
    clearInterval(interval);
    handleTimeoutSlider();
    if (event.target.classList.contains("prev")) {
      let index = imageIndex - 1;

      if (index < 0) {
        index = images.length - 1;
      }
      show(index);
    } else if (event.target.classList.contains("next")) {
      let index = imageIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      show(index);
    }
  });
});

dots.forEach((e) => {
  e.addEventListener("click", (event) => {
    let index = event.target.id;
    show(index);
    clearTimeout(timeout);
    clearInterval(interval);
    handleTimeoutSlider();
  });
});
show(imageIndex);
