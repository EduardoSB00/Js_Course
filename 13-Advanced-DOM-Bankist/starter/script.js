'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => {btn.addEventListener('click', openModal)})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


btnScrollTo.addEventListener('click', (e)=> {
  /*const s1Coords = section1.getBoundingClientRect();
  console.log(s1Coords);
  console.log(window.scrollX);
  console.log(window.scrollY);

  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(document.documentElement.clientWidth);
  console.log(document.documentElement.clientHeight);
  */
  //window.scrollTo(s1Coords.left, s1Coords.top + window.scrollY);
  /*window.scrollTo({
    left: s1Coords.left, 
    top: s1Coords.top + window.scrollY,
    behavior: "smooth"
  });*/

  section1.scrollIntoView({behavior:'smooth'})
})

//Page Navigation -------------------------------------------------------
/*
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(e){
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  })
})
*/

document.querySelector('.nav__links').addEventListener('click',function(event){
  event.preventDefault();

  if(event.target.classList.contains('nav__link')) {
    const id = event.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
})

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
  const clicked = e.target.closest('.operations__tab');

  if(!clicked) return;

  tabs.forEach((tab) => {
    tab.classList.remove('operations__tab--active');
  })

  clicked.classList.add('operations__tab--active');

  tabsContent.forEach((content) => {
    content.classList.remove('operations__content--active')
  })

  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');

});

const nav = document.querySelector('.nav');

nav.addEventListener('mouseover', function(e){
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el)=>{
      if(el !== link) el.style.opacity = 0.5;
    })

    logo.style.opacity = 0.5;
  }
})


nav.addEventListener('mouseout', function(e){
  const link = e.target;
  const siblings = link.closest('.nav').querySelectorAll('.nav__link');
  const logo = link.closest('.nav').querySelector('img');

  
  siblings.forEach((el)=>{
    if(el !== link) el.style.opacity = 1;
  })

  logo.style.opacity = 1;

})

const initialCoords = section1.getBoundingClientRect()
/*
window.addEventListener('scroll', function(e){
  console.log(window.scrollY);

  if(this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }


})*/

const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height;
const observerOptions = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
}

const observerCallback = function(entries, observer){
   const [entry] = entries;

  if(!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}

const headerObserver = new IntersectionObserver(observerCallback, observerOptions);
headerObserver.observe(header);


const revealSection = function(entries,observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  observer.unobserve(entry.target)
  entry.target.classList.remove('section--hidden')

};

const allSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15
});

allSections.forEach(function(section){
  sectionObserver.observe(section);
})

const loadImg = function(entries,observer){
  const [entry] = entries;

  if(!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove("lazy-img")
  })

  observer.unobserve(entry.target)
}

const imgTargets = document.querySelectorAll('img[data-src]');

const imgObserver = new IntersectionObserver(loadImg, {
  root:null,
  threshold:  0
});

imgTargets.forEach(function(img){
  imgObserver.observe(img);
});

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let currentSlide = 0
const maxSlide = slides.length;

const goToSlide = function(slide) {
    slides.forEach((s,i)=>{
      s.style.transform = `translateX(${100 * (i-slide)}%)`
    })
}

btnRight.addEventListener('click', function(){
  if(currentSlide === maxSlide -1){
    currentSlide = 0;
  } else {
    currentSlide++;
    
  }
    slides.forEach((s,i) => {
      s.style.transform =   `translateX(${100*(i-currentSlide)}%)`
    })
    activateDot(currentSlide);
})

slides.forEach((s,i) => {
  s.style.transform =   `translateX(${100*i}%)`
})

btnLeft.addEventListener('click', function(){
  if(currentSlide === 0){
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--; 
  }

  slides.forEach((s,i) => {
    s.style.transform =   `translateX(${100*(i-currentSlide)}%)`
  })
  activateDot(currentSlide);
});

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft') {
    if(currentSlide === 0){
      currentSlide = maxSlide - 1;
    } else {
      currentSlide--; 
    }
  
    slides.forEach((s,i) => {
      s.style.transform =   `translateX(${100*(i-currentSlide)}%)`
    })
    activateDot(currentSlide);

  }
});

document.addEventListener('keydown', function(e) {
  if(e.key === 'ArrowRight') {
    if(currentSlide === maxSlide -1){
      currentSlide = 0;
    } else {
      currentSlide++;
      
    }
      slides.forEach((s,i) => {
        s.style.transform =   `translateX(${100*(i-currentSlide)}%)`
      })
    activateDot(currentSlide);

  }
})

const dotContainer = document.querySelector('.dots');

const createDots = function() {
  slides.forEach((_,i) => {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide=${i}></button>`)
  })
}

createDots();

const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach((dot)=> {
      dot.classList.remove('dots__dot--active');
  })
  
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}


dotContainer.addEventListener('click', function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset;
    goToSlide(slide);
    activateDot(slide);
    currentSlide = slide-1;
  }
})

activateDot(currentSlide);

/*
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

console.log(document.querySelector('.header'));
const allSections = document.querySelectorAll('.section')
console.log(allSections);

console.log(document.getElementById('section--1'));
console.log(document.getElementsByTagName('button'));

console.log(document.getElementsByClassName('btn'));

const header = document.querySelector('.header')

const message = document.createElement('div');
message.classList.add('cookie-message');
message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = ' We use cookies for improved functionality and analytics<button class="btn btn--close-cookie">GOT IT!</button>'

header.prepend(message);*/
/*//header.append(message.cloneNode(true));
header.append(message);
header.before(message);
header.after(message);

document.querySelector('.btn--close-cookie').addEventListener('click', ()=>{
  message.remove()
})*/

/*
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height);

console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

console.log(getComputedStyle(message).height);

document.documentElement.style.setProperty('--color-primary', 'orangered');

const logo = document.querySelector('.nav__logo');
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist');

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'))

logo.classList.add('');
logo.classList.remove('');
logo.classList.toggle('');
logo.classList.contains('c');
logo.className = 'Jonas'; //Overides all classes
*/
/*
const alertH1 = function(){
  alert('addEventListener: Great You Are Reading The Header');
  h1.removeEventListener('mouseenter', alertH1)
}

const h1 = document.querySelector('h1');

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1)
}, 3000)*/
/*
h1.onmouseenter = function() {
  alert('addEventListener: Great You Are Reading The Header')
}*/
/*
const randomInt = (min,max) => Math.floor(Math.random() * (max - min + 1) + min)

const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;

document.querySelector('.nav__link').addEventListener('click', function(e){
  e.preventDefault()
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
  e.stopPropagation();
  return false;
})

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
})

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor();
  console.log(e.target, e.currentTarget);
})

*/
/*
const h1 = document.querySelector('h1');

console.log(h1.querySelector('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';

console.log(h1.parentNode);
h1.closest('.header').style.background = 'var(--gradient-secondary)';

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)'
})*/

