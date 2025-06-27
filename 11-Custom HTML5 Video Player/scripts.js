// Get Our Elements

const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const playButton = player.querySelector('.player__button.toggle');
const fullscreenToggle = player.querySelector('.player__button.fullscreen-toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Build out the functions

function togglePlay() {
    video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
    playButton.textContent = this.paused ? '►' : '❚❚';
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value;
}

function handleProgress() {
    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`;
}

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
    player.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

// Hook up the event listeners

video.addEventListener('click', togglePlay);
playButton.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
let mousedown = false;
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
fullscreenToggle.addEventListener('click', toggleFullscreen);