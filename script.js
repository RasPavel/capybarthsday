let bg = document.querySelector("#bg");
document.addEventListener("scroll", function () {
  let value = window.scrollY;
  bg.style.backgroundSize = 100 + value + "px";
});
