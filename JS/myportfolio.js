let home = document.querySelectorAll(".navigation__link");
let check = document.getElementById("nav-toggle");
console.log(check);

home.forEach(element => {
  element.addEventListener("click", e => {
    check.checked = false;
  });
});
var i = 1;

function changeBackground() {
  i = i + 1;
  if (i == 3) {
    i = 1;
  }
  if (i == 2) {
    document.querySelector(".header__hero-image").style.background =
      "url('../img/hero-img-2.png') no-repeat center";
    document.querySelector(".header__hero-image").style.backgroundSize =
      "contain";
  }
  if (i == 1) {
    document.querySelector(".header__hero-image").style.background =
      "url('../img/hero-img-1.png') no-repeat center";
    document.querySelector(".header__hero-image").style.backgroundSize =
      "contain";
  }
}

setInterval(changeBackground, 10000);
