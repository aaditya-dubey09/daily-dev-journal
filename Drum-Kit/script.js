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

const loadingBar = document.getElementById('loading-bar');

function setProgress(percent) {
  loadingBar.style.width = percent + '%';
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
}, 3000)

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById("particles");
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.width = Math.random() * 4 + 2 + "px";
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 3 + 3 + "s";
        particlesContainer.appendChild(particle);
    }
}

// Enhanced playSound function
const playSound = (e) => {
    const keyCode =
        e.type === "keydown" ? e.keyCode : e.target.getAttribute("data-key");
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);

    if (!audio) return;

    key.classList.remove("playing");
    void key.offsetWidth; // Force reflow
    key.classList.add("playing");

    createRipple(key);

    audio.currentTime = 0;
    audio.play();
};

// Cool ripple effect
const createRipple = (element) => {
    const ripple = document.createElement("div");
    ripple.style.position = "absolute";
    ripple.style.borderRadius = "50%";
    ripple.style.background = "rgb(255, 136, 0)";
    ripple.style.transform = "scale(0)";
    ripple.style.animation = "ripple 0.6s linear";
    ripple.style.left = "50%";
    ripple.style.top = "50%";
    ripple.style.width = "20px";
    ripple.style.height = "20px";
    ripple.style.marginLeft = "-10px";
    ripple.style.marginTop = "-10px";
    ripple.style.pointerEvents = "none";

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
};

// Add ripple animation to CSS
const style = document.createElement("style");
style.textContent = `
          @keyframes ripple {
              to {
                  transform: scale(4);
                  opacity: 0;
              }
          }
      `;
document.head.appendChild(style);

function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("click", playSound);
});

window.addEventListener("keydown", playSound);
createParticles();
