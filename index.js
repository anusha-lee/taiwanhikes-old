import './sass/main.scss';
import {
    defaultCoreCipherList
} from 'constants';

// Sticky navigation while scrolling down
window.addEventListener('scroll', function () {
    const navFixed = document.querySelector('header');
    const fromTop = window.scrollY;
    if (fromTop > 450) {
        navFixed.classList.add('fixedNav');
    } else {
        navFixed.classList.remove('fixedNav');
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

window.addEventListener('scroll', function scrollUp() {
    const scrollDown = document.body.scrollTop;
    const scrollButton = document.querySelector('.scroll-up');
    if (scrollDown > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Make a function to check scrollTop position
// If scrollTop > 20, change style.display = “block”
// else style.display = “none”

window.addEventListener('scroll', function showScroll() {
    const top = window.scrollY;
    if (top > 100) {
        document.querySelector('.scroll-up').style.display = 'block';
    } else {
        document.querySelector('.scroll-up').style.display = 'none';
    }
});

const click = document.querySelector('.scroll-up');
const container = document.querySelector('.container');
click.addEventListener('click', function () {
    container.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
});

// Form input validation
const name = document.getElementById('form-name');
const email = document.getElementById('form-email');
const form = document.querySelector('.form__box');

form.addEventListener('submit', function (e) {
    let message = [];
    if (name.value === '' || name.value === null) {
        e.preventDefault();
        alert('Name is required.');
    }
    if (email.value === '' || email.value === null) {
        e.preventDefault();
        alert('Please enter your valid email.');
    }
});

/****************************************
Trips api
*********************************************/

let url2trips = "https://api.myjson.com/bins/r6k4l";
let newHTML2 = document.getElementById("oneDayFree");

fetch(url2trips)
    .then(res3 => res3.json())
    .then(arr => {       
        
        let eleKey = Object.keys(arr);
        let eleVal = Object.values(arr);
        let elePair = Object.entries(arr);
        
        if (eleVal.length >= 1) {
          for (let val of eleVal) {

            // Create and append the li's to the ul or divs to the parent div
             newHTML2.innerHTML += `
                <div class="events__oneDayFree--trip freeTrip">
                    <h3 id="freeTrip1">活動Event:${val.活動Event}</h3>
                    <div class="freeTrip__date"><strong>日期Date:</strong> ${val.日期Date}</div>
                    <div class="freeTrip__meetup-time"><strong>集合時間Meetup Time:</strong> ${val.集合時間Meetup_Time}</div>
                    <div class="freeTrip__meetup-point"><strong>集合地點Meetup Point:</strong> ${val.集合地點Meetup_Point}</div>
                    <div class="freeTrip__transport"><strong>交通Transportation:</strong> ${val.交通Transportation}</div>
                    <div class="freeTrip__distance"><strong>里程Distance:</strong> ${val.里程Distance}</div>
                    <div class="freeTrip__difficulty-level"><strong>難度Difficulty Level:</strong> ${val.難度Difficulty_Level}</div>
                    <div class="freeTrip__club"><a href="#"><strong>社團Hiking Club:</strong> <a href="#">${val.社團Hiking_Club}</a></div>
                    <div class="freeTrip__guide"><strong>領隊Guide:</strong> ${val.響導Guide}</div>
                    <div class="freeTrip__about-Trail"><strong>路線簡介About the trail: <br></strong> ${val.路線簡介About_the_trail}</div>
            `;
           }
        }
            
   })
    .catch( err => console.error("Something went wrong!", err));




/***************** Weather App *****************
This app is for users to check the local weather in Taiwan
There is a dropdown option for users to 
select the location's weather they want to know.

1) Dropdown options on HTML
2) Style the app

3) JavaScript structure
    a) Fetch weather data from websites, preferably Weather Forecast Bureau in Taiwan
    b) Receive input from users and connect that to data 

***********************************************/
