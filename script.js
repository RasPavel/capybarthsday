// script.js

document.addEventListener("DOMContentLoaded", (event) => {
  const designImage = document.getElementById("designImage");
  const designCards = document.getElementById("designCards");
  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  let showDesignImage = localStorage.getItem("showDesignImage") === "true";

  if (showDesignImage) {
    designImage.style.display = "block";
    designCards.style.display = "none";
    htmlElement.style.height = "300%";
    bodyElement.style.height = "300%";
  } else {
    designImage.style.display = "none";
    designCards.style.display = "flex";
    htmlElement.style.height = "100%";
    bodyElement.style.height = "100%";
  }

  localStorage.setItem("showDesignImage", !showDesignImage);
});

let mask = document.querySelector("#mask");
let caption = document.querySelector("#captionForImage");

let cardContainer = document.querySelector("#cardContainer");

document.addEventListener("scroll", function () {
  let value = window.scrollY;
  let newSize = 100 + value * 2;
  mask.style.backgroundSize = newSize + "px";

  console.log(window.innerHeight);
  console.log(value);
  console.log(document.body.offsetHeight);

  let percentage = (window.innerHeight + window.scrollY) / document.body.offsetHeight;

  const bottomPercent = 70;

  if (percentage < 0.5) {
    caption.style.top = "300%";
  } else {
    caption.style.top = bottomPercent + "%";
    mask.style.backgroundSize = newSize * 2 + "px";
  }
});
