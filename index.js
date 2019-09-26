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


let tripsBox = document.getElementById("test");
const url = "https://api.myjson.com/bins/ckfdx";
let tripsJson;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        tripsJson = data.trips;

        data retrieval testing 
        console.log(trips[3].社團Hiking_Club);
     
    tripsJson.map(function(trip) {
        let tripTitle = trip.活動Event;
        let tripDate = trip.日期Date;
        let tripClub = trip.社團Hiking_Club;
        
        console.log(`Event: ${tripTitle}, Date: ${tripDate}, Club: ${tripClub}`);
   })  
    
    })
    .catch(err => alert("Something went wrong.", err));


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


test.innerHTML = newHTMLContentFree;

*****************************************/

let trips = [];
// just one trip
let url = "https://api.myjson.com/bins/13q8up"; 
// multiple trips
//let url = "https://api.myjson.com/bins/ckfdx";

fetch(url)
    .then(res => res.json())
    .then(loadedTrip => {
        let event = loadedTrip.trips.活動Event;
        let date = loadedTrip.trips.日期Date;
        let time = loadedTrip.trips.集合Meetup_Info.Time;
    
        let manyTrips = loadedTrip;
        //console.log(loadedTrip.trips.活動Event, loadedTrip.trips.集合Meetup_Info.Time);
        
        let newHTML = document.getElementById("test");
//        loadedTrip.map( trip => {
//            newHTML.innerHTML = `<div>Trail: ${event}, Date: ${date}, Time: ${time}</div>`;
//        })
        
    newHTML.innerHTML = `<div class="test">Trail: ${event}</div><div class="test">Date: ${date}</div><div class="test">Time: ${time}</div><div class="test">${manyTrips}</div>`;    
    })
    .catch( err => console.error("Something went wrong!", err));

/**********************************************************
multiple trips
https://stackoverflow.com/questions/8430336/get-keys-of-json-object-in-javascript
let url2 = "https://api.myjson.com/bins/ckfdx";
let url3 = "https://jsonplaceholder.typicode.com/todos";

https://stackoverflow.com/questions/8430336/get-keys-of-json-object-in-javascript
let url2 = "https://api.myjson.com/bins/ckfdx";
let url3 = "https://jsonplaceholder.typicode.com/todos";
**********************************************************/

let url2trips = "https://api.myjson.com/bins/r6k4l";
let newHTML2 = document.getElementById("test2");

fetch(url2trips)
    .then(res3 => res3.json())
    .then(arr => {       
        
        let eleKey = Object.keys(arr);
        let eleVal = Object.values(arr);
        let elePair = Object.entries(arr);
   
   // loop through eleVal array to get inside those objects
        function createNode(element) {
             return document.createElement(element);
        }           
        function append(parent, ele) {
             return parent.appendChild(ele);
        }
        /*
        eleVal.map(val => {
            let div = createNode('div');
            div.innerHTML = `
                <div class="mul"><strong>活動Event:</strong> ${val.活動Event}</div>
                <div class="mul"><strong>日期Date:</strong> ${val.日期Date}</div>
                <div class="mul"><strong>集合時間Meetup Time:</strong> ${val.集合時間Meetup_Time}</div>
                <div class="mul"><strong>集合地點Meetup Point:</strong> ${val.集合地點Meetup_Point}</div>
                <div class="mul"><strong>交通Transportation:</strong> ${val.交通Transportation}</div>
                <div class="mul"><strong>里程Distance:</strong> ${val.里程Distance}</div>
                <div class="mul"><strong>難度Difficulty Level:</strong> ${val.難度Difficulty_Level}</div>
                <div class="mul"><strong>社團Hiking Club:</strong> <a href="#">${val.社團Hiking_Club}</a></div>
                <div class="mul"><strong>領隊Guide:</strong> ${val.響導Guide}</div>
                <div class="mul"><strong>路線簡介About the trail: <br></strong> ${val.路線簡介About_the_trail}</div>
            `;
        })
    */
        if (eleVal.length >= 1) {
          for (let val of eleVal) {

            // Create and append the li's to the ul or divs to the parent div
             newHTML2.innerHTML += `
                <div class="events__oneDayFree--trip freeTrip">
                    <h3 id="freeTrip1">活動Event:${val.活動Event}</h3>
                    <div class="freeTrip__date"><strong>日期Date:</strong> ${val.日期Date}</div>
                    
                    <div class="mul"><strong>集合時間Meetup Time:</strong> ${val.集合時間Meetup_Time}</div>
                    <div class="mul"><strong>集合地點Meetup Point:</strong> ${val.集合地點Meetup_Point}</div>
                    <div class="mul"><strong>交通Transportation:</strong> ${val.交通Transportation}</div>
                    <div class="mul"><strong>里程Distance:</strong> ${val.里程Distance}</div>
                    <div class="mul"><strong>難度Difficulty Level:</strong> ${val.難度Difficulty_Level}</div>
                    <div class="mul"><strong>社團Hiking Club:</strong> <a href="#">${val.社團Hiking_Club}</a></div>
                    <div class="mul"><strong>領隊Guide:</strong> ${val.響導Guide}</div>
                    <div class="mul"><strong>路線簡介About the trail: <br></strong> ${val.路線簡介About_the_trail}</div>
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
