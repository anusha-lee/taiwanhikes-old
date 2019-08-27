import "./sass/main.scss";

// Sticky navigation while scrolling down
window.addEventListener("scroll", function() {
  const navFixed = document.querySelector("header");
  const fromTop = window.scrollY;
  if (fromTop > 550) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});

/******************************************
 * Add Scroll top button: *
 * 1) When users scroll down the page to certain height,
 *    .scroll-up div display => block
 * 2) When users click the scroll up button,
 *    the page goes up
 *
 * Reference:
 * https://zellwk.com/blog/js-in-dom/
 * https://codepen.io/lump/pen/GbdzwK?editors=0010
 ******************************************/

window.addEventListener("scroll", function scrollUp() {
  const scrollDown = document.body.scrollTop;
  const scrollButton = document.querySelector(".scroll-up");
  if (scrollDown > 100) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
});

// Make a function to check scrollTop position
// If scrollTop > 20, change style.display = “block”
// else style.display = “none”

window.addEventListener("scroll", function showScroll() {
  const top = window.scrollY;
  if (top > 100) {
    document.querySelector(".scroll-up").style.display = "block";
  } else {
    document.querySelector(".scroll-up").style.display = "none";
  }
});

const click = document.querySelector(".scroll-up");
const container = document.querySelector(".container");
click.addEventListener("click", function() {
  container.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

/*
function addScrollUp() {
  // 2) Write an insertScrollUpDiv function, inside this function:
  // Create a new div element
  let insertScrollUpDiv = document.createElement("button");
  // Create a text
  let content = "Scroll Up";
  // Add content text to the new div
  let scrollUpContent = document.createTextNode(content);
  // Add the text node to the newly created div
  insertScrollUpDiv.appendChild(scrollUpContent);

  // Add .insertScrollUpDiv and its content into the DOM
  let scrollUp = document.querySelector(".scroll-box");
  document.body.insertBefore(insertScrollUpDiv, scrollUp);
}
addScrollUp();
*/
