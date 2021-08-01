const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          `navLinkFade 0.5s ease forwards ` + index / 7 + `s`;
      }
    });
  });
};

const feature1 = () => {
  const smallImg1 = document.getElementById("small-img-1");
  const bigImg = document.getElementById("big-img");
  smallImg1.addEventListener("click", function () {
    imgSrc = smallImg1.src;
    bigImg.src = imgSrc;
  });
  const smallImg2 = document.getElementById("small-img-2");
  smallImg2.addEventListener("click", function () {
    imgSrc = smallImg2.src;
    bigImg.src = imgSrc;
  });
  const smallImg3 = document.getElementById("small-img-3");
  smallImg3.addEventListener("click", function () {
    imgSrc = smallImg3.src;
    bigImg.src = imgSrc;
  });
  const smallImg4 = document.getElementById("small-img-4");
  smallImg4.addEventListener("click", function () {
    imgSrc = smallImg4.src;
    bigImg.src = imgSrc;
  });
};
const feature2 = () => {
  const smallImg1 = document.getElementById("small-img-21");
  const bigImg = document.getElementById("big-img-2");
  smallImg1.addEventListener("click", function () {
    imgSrc = smallImg1.src;
    bigImg.src = imgSrc;
  });
  const smallImg2 = document.getElementById("small-img-22");
  smallImg2.addEventListener("click", function () {
    imgSrc = smallImg2.src;
    bigImg.src = imgSrc;
  });
  const smallImg3 = document.getElementById("small-img-23");
  smallImg3.addEventListener("click", function () {
    imgSrc = smallImg3.src;
    bigImg.src = imgSrc;
  });
  const smallImg4 = document.getElementById("small-img-24");
  smallImg4.addEventListener("click", function () {
    imgSrc = smallImg4.src;
    bigImg.src = imgSrc;
  });
};
const feature3 = () => {
  const smallImg1 = document.getElementById("small-img-31");
  const bigImg = document.getElementById("big-img-3");
  smallImg1.addEventListener("click", function () {
    imgSrc = smallImg1.src;
    bigImg.src = imgSrc;
  });
  const smallImg2 = document.getElementById("small-img-32");
  smallImg2.addEventListener("click", function () {
    imgSrc = smallImg2.src;
    bigImg.src = imgSrc;
  });
  const smallImg3 = document.getElementById("small-img-33");
  smallImg3.addEventListener("click", function () {
    imgSrc = smallImg3.src;
    bigImg.src = imgSrc;
  });
  const smallImg4 = document.getElementById("small-img-34");
  smallImg4.addEventListener("click", function () {
    imgSrc = smallImg4.src;
    bigImg.src = imgSrc;
  });
};
const feature4 = () => {
  const smallImg1 = document.getElementById("small-img-41");
  const bigImg = document.getElementById("big-img-4");
  smallImg1.addEventListener("click", function () {
    imgSrc = smallImg1.src;
    bigImg.src = imgSrc;
  });
  const smallImg2 = document.getElementById("small-img-42");
  smallImg2.addEventListener("click", function () {
    imgSrc = smallImg2.src;
    bigImg.src = imgSrc;
  });
  const smallImg3 = document.getElementById("small-img-43");
  smallImg3.addEventListener("click", function () {
    imgSrc = smallImg3.src;
    bigImg.src = imgSrc;
  });
  const smallImg4 = document.getElementById("small-img-44");
  smallImg4.addEventListener("click", function () {
    imgSrc = smallImg4.src;
    bigImg.src = imgSrc;
  });
};

function app() {
  navSlide();
  feature1();
  feature2();
  feature3();
  feature4();
}

app();
