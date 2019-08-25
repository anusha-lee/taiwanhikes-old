import "./sass/main.scss";

window.addEventListener("scroll", function() {
  const navFixed = document.querySelector("header");
  const fromTop = window.scrollY;

  if (fromTop > 550) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
    console.log("remove fixed");
  }
});

window.addEventListener("click", function() {
  const scrollUp = document.querySelector(".scroll-up");
  console.log(scrollUp);
});
