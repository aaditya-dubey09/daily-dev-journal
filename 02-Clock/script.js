const showLoader = () => {
    const loader = document.getElementById("loader");
    const body = document.getElementById("body-content");

    if (loader && body) {
        loader.classList.remove("hidden");
        body.classList.add("hidden");

        setTimeout(() => {
            loader.classList.add("hidden");
            body.classList.remove("hidden");
        }, 3000);
    } else {
        console.warn("Loader or body content not found.");
    }
};

window.addEventListener("DOMContentLoaded", showLoader);

const loadingBar = document.getElementById("loading-bar");

function setProgress(percent) {
    loadingBar.style.width = percent + "%";
}

setProgress(20);
setProgress(30);
setProgress(40);
setProgress(50);
setProgress(55);
setProgress(60);
setProgress(70);
setProgress(75);
setProgress(80);
setProgress(90);
setProgress(95);
setProgress(100);

setTimeout(() => {
    loadingBar.classList.add("hidden");
}, 3000);

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const time = document.querySelector(".time");
const dateInfo = document.getElementById("date-info");

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    if (seconds === 0) {
        secondHand.style.transition = "none";
    } else {
        secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
    }
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const minute = now.getMinutes();
    const minuteDegrees = ((minute + seconds / 60) / 60) * 360 + 90;
    minHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    // Format time with leading zeros
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");
    const formattedSecond = seconds.toString().padStart(2, "0");

    time.textContent = `${formattedHour}:${formattedMinute}:${formattedSecond}`;
    // Update date info
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    dateInfo.textContent = now.toLocaleDateString("en-US", options);
}

setInterval(setDate, 1000);