const numberHours = document.querySelectorAll(".number-hours");
const barSeconds = document.querySelectorAll(".bar-seconds");
const numberElement = [];
const barElement = [];

for (let i = 1; i <= 12; i++) {
    numberElement.push(`<span style="--index:${i};"><p>${i}</p></span>`);    
}
numberHours.forEach((element) => {
    element.insertAdjacentHTML("afterbegin", numberElement.join(""));
})

for (let i = 1; i < 60; i++) {
    barElement.push(`<span style="--index:${i};"><p></p></span>`);    
}
barSeconds.forEach((element) => {
    element.insertAdjacentHTML("afterbegin", barElement.join(""));
})

const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.minutes");
const handSeconds = document.querySelector(".hand.seconds");

function getCurrentTime() {
    let now = new Date();
    let currentHours = now.getHours();
    let currentMinutes = now.getMinutes();
    let currentSeconds = now.getSeconds();

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6 + currentSeconds / 10}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}
getCurrentTime();

setInterval(() => {
    getCurrentTime();
}, 1000);