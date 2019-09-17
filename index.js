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

/****************************************
Trips api
*****************************************/

let chiJSON = {
  復興坑三貂嶺山猴硐神社: {
    日期Date: '2019/10/06',
    集合Meetup: {
      集合時間Time: '08:30',
      '集合地點Meetup Point': '侯硐火車站',
      交通Transportation: {
        '交通工具Type of Transportation': '火車4148車次',
        '下車地點Starting Point': '侯硐火車站',
      },
    },
    難度Level: {
      里程Distance: '9KM',
      難度: 'A+',
    },
    費用Fee: '自理',
    '社團Hiking Group': '台北市新興登山會',
    響導Guides: ['謝長宏', '林清祥', '吳文和'],
    其他Other:
      '猴硐是宜蘭線鐵路終點站，旅客多會在猴硐車站附近的旅社過夜休息後，沿後凹溪上行山 路，過金字碑，至牡丹坑、頂雙溪、遠望坑，再越過草嶺古道，進入宜蘭, 陡坡需拉繩。',
  },
  茅草埔山四分里山: {
    日期Date: '2019/10/13',
    集合Meetup: {
      集合時間Time: '08:30',
      '集合地點Meetup Point': '中華科技大學站',
      交通Transportation: {
        '交通工具Type of Transportation': '公車205, 270, 620, 306',
        '下車地點Starting Point': '中華科技大學站',
      },
    },
    難度Level: {
      里程Distance: '7KM',
      難度: 'A',
    },
    費用Fee: '自理',
    '社團Hiking Group': '台北市新興登山會',
    響導Guides: ['劉盛雄', '游秋煌', '何仲江'],
    其他Other:
      '中華科技大學→軍人公墓→茅草埔山(140m)→四分里山(250M)→土地公廟→山神廟→復興園→松山慈惠堂 →公車站。',
  },
};

/*
for (let [key, value] of Object.entries(tripsJSON)) {
  console.log(`${key}: ${value}`);
}
*/

/*
let tripsBox = document.querySelector(".trips__box--trail");
let tripJson = fetch("https://api.myjson.com/bins/fwk01");

tripJson
  .then(res => res.json())
  .then(data => {
    console.log(data[3]);
    // tripsBox.textContent = data;
  })
  .catch(err => alert("Something went wrong.", err));
*/
// Make JSON file: http://myjson.com/fwk01
/*
let trans = require("translate-json-object")();

trans.init({
  googleApiKey: "api_key"
});

chiJSON
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => alert("Cannot translate.", err)); */

// https://github.com/KhaledMohamedP/translate-json-object

var TJO = require('translate-json-object')();

// Choose the service to use google/yandex,
// if you provide both yandex will be used as the default
TJO.init({
  googleApiKey: 'api_key',
  yandexApiKey: 'api_key',
});

// An example scenario (json) object
var example = {
  name: 'Please enter your name',
  list: ['translate', 'object', 'made', 'easy'],
  nested: {
    hello: 'hello',
    world: 'world',
  },
};

// Translate method takes (source object, and language code)
TJO.translate(example, 'es')
  .then(function(data) {
    console.log(data);
  })
  .catch(function(err) {
    console.log('error ', err);
  });

/**********************************
 * Can I write JavaScript functions to sort out the Chinese JSON file?
 * like automatically change certain names or word in the file?
 * For example: function 找到"嘟嘟登山隊", 自動換成對應的英文名字?
 * The 2nd example: 找到日期或同義字, 自動換成對應的Date?
 *
 * *******************************/
