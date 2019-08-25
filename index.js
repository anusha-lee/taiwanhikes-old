import "./sass/main.scss";

window.addEventListener("scroll", function() {
  const navFixed = document.querySelector("header");
  const fromTop = window.scrollY;
  if (fromTop > 550) {
    navFixed.classList.add("fixedNav");
  } else {
    navFixed.classList.remove("fixedNav");
  }
});

/********************************************
1) Create an empty div on HTML on the page's bottom 

2) Write an addScrollUp function, inside this function:
    a) Create a div with document.createElement('div')
    b) Add content with document.createTextNode(``)
    c) Append the content with appendChild()
    d) Insert the div and its content to DOM

3) Add CSS style to this scroll-up button/div

4) Write a click/ scroll up function

5) Write an addEventListernr (use scroll or click, or both)
    a) scroll-up button will show up (enable addScrollUp function) 
       when the empty div is scrolled down to certain height (window.scrollY)
    b) When the scroll-up button/div is clicked, call click/scroll up function

*******************************************/

function addScrollUp() {
  // Creat a div element
  let currentDiv = document.querySelector(".scroll-box");
  let insertScrollUpDiv = document.createElement("div");

  // Add content
  let scrollUpContent = document.createTextNode(`
    <div class="scroll-up">              
      <ion-icon name="arrow-round-up" class="scroll-up__arrow"></ion-icon>
    </div>
  `);
  insertScrollUpDiv.appendChild(scrollUpContent);

  // Add .insertScrollUpDiv and its content into the DOM
  document.body.insertBefore(currentDiv, scrollUpContent);

  // Add class scroll-up to the new div
}

window.addEventListener("scroll", addScrollUp);

// (.scroll-up) when users scroll down the page
// to certain height
//const scrollHeight = window.scrollY;
//   if (scrollHeight > 550) {
//     addScrollUp.classList.add("scroll-up");
//   }
//console.log(scrollHeight);
// Set up .scroll-up block function
// When users click it, it will go to the top of the page
//   const scrollUp = document.querySelector(".scroll-up");
//   console.log(scrollUp);
