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
Trips api:
JSON file: https://api.myjson.com/bins/ckfdx
*****************************************/

let tripsBox = document.getElementById("test");
const url = "https://api.myjson.com/bins/ckfdx";
let tripsJson;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        tripsJson = data.trips;

        // data retrieval testing 
        //    console.log(trips[3].社團Hiking_Club);
     
    tripsJson.map(function(trip) {
        let tripTitle = trip.活動Event;
        let tripDate = trip.日期Date;
        let tripClub = trip.社團Hiking_Club;
        // document.getElementById('test').innerHTML = tripTitle;
        
        console.log(`Event: ${tripTitle}, Date: ${tripDate}, Club: ${tripClub}`);
   })  
    
    })
    .catch(err => alert("Something went wrong.", err));

/*
const newHTMLContentFree = `
    <div class="events__oneDayFree--trip freeTrip">           
                <h3><a href="#"></a>${tripTitle}</h3>
                <div class="freeTrip__date"></div>
                <div class="freeTrip__meetupInfo">
                    <div class="freeTrip__meetupInfo--time">Test</div>
                    <div class="freeTrip__meetupInfo--meetingPoint"></div>
                    <div class="freeTrip__meetupInfo--transport"></div>
                </div>
                <div class="freeTrip__difficulty">
                    <div class="freeTrip__difficulty--distance"></div>
                    <div class="freeTrip__difficulty--level"></div>
                </div>
                <div class="freeTrip__club">
                    <div class="freeTrip__club--name"><a href="#"></a></div>
                    <div class="freeTrip__club--guide"></div>
                </div>
                <div class="freeTrip__about"><a href="#"></a></div>
            </div>
`;
*/

test.innerHTML = newHTMLContentFree;






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
