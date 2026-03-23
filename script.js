window.addEventListener("scroll", reveal);

function reveal(){

let reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

let windowHeight = window.innerHeight;
let elementTop = reveals[i].getBoundingClientRect().top;

let elementVisible = 150;

if(elementTop < windowHeight - elementVisible){

reveals[i].classList.add("active");

}

}

}

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

counter.innerText = '0';

const updateCounter = () => {

const target = +counter.getAttribute('data-target') || +counter.innerText;
const increment = target / 100;

if(+counter.innerText < target){

counter.innerText = Math.ceil(+counter.innerText + increment);

setTimeout(updateCounter,20);

}

};

updateCounter();

});