/* ================= SCROLL REVEAL ================= */

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

/* ================= COUNTER ================= */

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

const target = +counter.getAttribute('data-target') || 0;
let count = 0;

const updateCounter = () => {

const increment = target / 100;

if(count < target){
count += increment;
counter.innerText = Math.ceil(count);
setTimeout(updateCounter, 20);
} else {
counter.innerText = target;
}

};

updateCounter();

});

/* ================= TYPING EFFECT ================= */

const text = "BML Quantum Solutions";
let index = 0;

function typing(){

const element = document.getElementById("typing-text");

if(!element){
console.log("Typing element not found ❌");
return;
}

/* DO NOT CLEAR TEXT */
function type(){

if(index < text.length){
element.innerHTML += text.charAt(index);
index++;
setTimeout(type, 60);
}

}

type();
}

/* ================= PARTICLES ================= */

function initParticles(){

const canvas = document.getElementById("particles");
if(!canvas) return;

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i = 0; i < 100; i++){
particles.push({
x: Math.random() * canvas.width,
y: Math.random() * canvas.height,
vx: (Math.random()-0.5),
vy: (Math.random()-0.5),
size: 2
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p => {

p.x += p.vx;
p.y += p.vy;

if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
if(p.y < 0 || p.y > canvas.height) p.vy *= -1;

/* DOT */
ctx.beginPath();
ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
ctx.fillStyle = "#00c3ff";
ctx.fill();

});

/* LINES */
for(let a=0; a<particles.length; a++){
for(let b=a; b<particles.length; b++){

let dx = particles[a].x - particles[b].x;
let dy = particles[a].y - particles[b].y;

let dist = Math.sqrt(dx*dx + dy*dy);

if(dist < 120){

ctx.strokeStyle = "rgba(0,195,255,"+(1 - dist/120)+")";
ctx.lineWidth = 0.5;

ctx.beginPath();
ctx.moveTo(particles[a].x, particles[a].y);
ctx.lineTo(particles[b].x, particles[b].y);
ctx.stroke();

}

}
}

requestAnimationFrame(draw);

}

draw();

/* MOUSE INTERACTION */

window.addEventListener("mousemove", e => {

particles.forEach(p => {

let dx = p.x - e.x;
let dy = p.y - e.y;

let dist = Math.sqrt(dx*dx + dy*dy);

if(dist < 100){
p.x += dx * 0.02;
p.y += dy * 0.02;
}

});

});

}

/* ================= INIT ================= */

window.addEventListener("load", () => {

/* Start typing */
typing();

/* Start particles */
initParticles();

/* Remove intro */
setTimeout(() => {
const intro = document.getElementById("intro");
if(intro){
intro.style.display = "none";
}
}, 6000);

});

console.log("JS LOADED ✅");