const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM\n Is\n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street\n Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItem = document.querySelectorAll('a');
/*navItem[0].textContent = siteContent['nav']['nav-item-1'];
navItem[1].textContent = siteContent['nav']['nav-item-2'];
navItem[2].textContent = siteContent['nav']['nav-item-3'];
navItem[3].textContent = siteContent['nav']['nav-item-4'];
navItem[4].textContent = siteContent['nav']['nav-item-5'];
navItem[5].textContent = siteContent['nav']['nav-item-6'];*/

navItem.forEach((item, i) => item.textContent = siteContent['nav'][`nav-item-${i + 1}`]);


let hOne = document.querySelector('.cta h1');
hOne.textContent = siteContent['cta']['h1'];
hOne.style.whiteSpace = 'pre-wrap';



let midImage = document.getElementById('cta-img');
midImage.setAttribute('src', siteContent['cta']['img-src']);

let lastImage = document.getElementById('middle-img');
lastImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

let buttonSelector = document.querySelector('button');
buttonSelector.textContent = siteContent['cta']['button'];



let topHeadSelector = document.querySelectorAll('.top-content h4')
topHeadSelector[0].textContent = siteContent['main-content']['features-h4']; 
topHeadSelector[1].textContent = siteContent['main-content']['about-h4']; 


let topParaSelector = document.querySelectorAll('.top-content p');
topParaSelector[0].textContent = siteContent['main-content']['features-content']; 
topParaSelector[1].textContent = siteContent['main-content']['about-content']; 



let bottomHeadSelector = document.querySelectorAll('.bottom-content h4');
bottomHeadSelector[0].textContent = siteContent['main-content']['services-h4'];
bottomHeadSelector[1].textContent = siteContent['main-content']['product-h4'];
bottomHeadSelector[2].textContent = siteContent['main-content']['vision-h4'];

let bottomParaSelector = document.querySelectorAll('.bottom-content p');
bottomParaSelector[0].textContent = siteContent['main-content']['services-content'];
bottomParaSelector[1].textContent = siteContent['main-content']['product-content'];
bottomParaSelector[2].textContent = siteContent['main-content']['vision-content'];

let contactHeadSelector = document.querySelector('.contact h4');
contactHeadSelector.textContent = siteContent['contact']['contact-h4'];

let contactParaSelector = document.querySelectorAll('.contact p');
contactParaSelector[0].textContent = siteContent['contact']['address'];
contactParaSelector[1].textContent = siteContent['contact']['phone'];
contactParaSelector[2].textContent = siteContent['contact']['email'];
contactParaSelector[0].style.whiteSpace = 'pre-wrap';

footerPSelector = document.querySelector('footer p');
footerPSelector.textContent = siteContent['footer']['copyright'];

navItem.forEach(item => item.style.color = 'green');
 
let newABefore = document.createElement('a');
newABefore.textContent = 'Home';
newABefore.style.color = 'green';
navA = document.querySelector('nav');
navA.prepend(newABefore);

let newAAfter = document.createElement('a');
newAAfter.textContent = 'Pay';
newAAfter.style.color = 'green';
navA.appendChild(newAAfter);


newAAfter.style.border = '2px solid blue';
newABefore.style.border = '2px solid blue';

let topStyleFunk = document.querySelector('.cta');
topStyleFunk.style.backgroundColor = 'blue';

let midStyleFunk = document.querySelector('.bottom-content');
midStyleFunk.style.backgroundColor = 'green';

let contactStyleFunk = document.getElementsByClassName('contact');
contactStyleFunk.style.backgroundColor = 'blue';

/*const _$ = {

  bySelector: (selector, cb = false) => {
 
    const node = document.querySelector(selector);
 
    return cb ? cb(node) : node;
 
  },
 
  bySelectorAll: (selector, cb = false) => {
 
    const nodeList = document.querySelectorAll(selector);
 
    return cb ? cb(nodeList) : nodeList;
 
  },
 
  mapAll: (selector, cb) => {
 
    const nodeArr = Array.from(document.querySelectorAll(selector));
 
    return nodeArr.map(cb);
 
  },
 
 };
const topContentSelector = '.top-content .text-content >';

const {

 'about-content': aboutContent,

 'about-h4': aboutH4,

 'features-content': featuresContent,

 'features-h4': featuresH4,

} = siteContent['main-content'];



const topHeaders = _$.bySelectorAll(`${topContentSelector} h4`);

const topParagraphs = _$.bySelectorAll(`${topContentSelector} p`);



topHeaders[0].innerText = featuresH4;

topParagraphs[0].innerText = featuresContent;



topHeaders[1].innerText = aboutH4;

topParagraphs[1].innerText = aboutContent;

*/






