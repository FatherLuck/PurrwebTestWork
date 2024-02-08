const headerTop = document.getElementById("header-top");
const headerScroll = document.getElementById("header-scroll");
const headerScrollHeight = headerScroll.offsetHeight;
const headerTopHeight = headerTop.offsetHeight;

window.addEventListener("scroll", () => {
  let scrollDistance = window.scrollY;
  if (scrollDistance >= headerTopHeight) {
    headerScroll.classList.add("header-fixed");
  } else {
    headerScroll.classList.remove("header-fixed");
  }
});
