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
