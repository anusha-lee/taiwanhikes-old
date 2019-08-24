import './sass/main.scss'

let navFixed = document.querySelectorAll('header');

window.addEventListener("scroll", function(e) {
    //console.log("you scroll");
    let fromTop = window.scrollY;
    if (fromTop > 500) {
        console.log(fromTop, "You scroll down");
    } else if (fromTop < 0) {
        console.log("You scroll up");
    }
    
})

