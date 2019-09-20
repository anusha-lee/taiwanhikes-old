import './sass/main.scss';
import { defaultCoreCipherList } from 'constants';

// Sticky navigation while scrolling down
window.addEventListener('scroll', function() {
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
click.addEventListener('click', function() {
  container.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Form input validation
const name = document.getElementById('form-name');
const email = document.getElementById('form-email');
const form = document.querySelector('.form__box');

form.addEventListener('submit', function(e) {
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

https://api.myjson.com/bins/yks2t
https://api.myjson.com/bins/bxfgd  (oldest one)
https://api.myjson.com/bins/19v4xp  (not so good one)
*****************************************/

//let tripsBox = document.querySelector(".trips__box--trail");
let url = "https://api.myjson.com/bins/ckfdx";

//function createTripName(ele) {
//    let eventTitle = document.getElementById('freeTrip1');
//    return eventTitle.innerHTML(ele);
//}

fetch(url)
  .then(res => res.json())
  .then(data => {
   // let trips = data.trips;
    console.log(data.trips);
    console.log(data.trips[2].集合Meetup_Info.交通Transportation);
    console.log(data.trips[3].社團Hiking_Club);
    
//    trips.map(function(trip) {
//         
//        console.log(trips[1]);
//        //console.log(data.trips["社團Hiking Club"]);
//   })
  })
  .catch(err => alert("Something went wrong.", err));






/**********************************
 * Can I write JavaScript functions to sort out the Chinese JSON file?
 * like automatically change certain names or word in the file?
 * For example: function 找到"嘟嘟登山隊", 自動換成對應的英文名字?
 * The 2nd example: 找到日期或同義字, 自動換成對應的Date?
 *
 * *******************************/



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



