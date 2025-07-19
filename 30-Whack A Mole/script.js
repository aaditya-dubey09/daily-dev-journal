class WhackAMoleGame {
    constructor() {
        this.holes = document.querySelectorAll('.hole');
        this.moles = document.querySelectorAll('.mole');
        this.scoreDisplay = document.querySelector('.score');
        this.highScoreDisplay = document.querySelector('.high-score');
        this.timeDisplay = document.querySelector('.time-left');
        this.hitRateDisplay = document.querySelector('.hit-rate');
        this.startBtn = document.querySelector('.start-btn');
        this.pauseBtn = document.querySelector('.pause-btn');
        this.gameOverScreen = document.querySelector('.game-over');
        this.finalScoreDisplay = document.querySelector('.final-score');
        this.finalAccuracyDisplay = document.querySelector('.final-accuracy');
        this.playAgainBtn = document.querySelector('.play-again-btn');
        this.progressBar = document.querySelector('.progress-fill');
        this.difficultyBtns = document.querySelectorAll('.difficulty-btn');

        this.score = 0;
        this.highScore = parseInt(localStorage.getItem('whack-high-score') || '0');
        this.timeLeft = 30;
        this.gameActive = false;
        this.isPaused = false;
        this.lastHole = null;
        this.gameTimer = null;
        this.moleTimer = null;
        this.hits = 0;
        this.attempts = 0;
        this.difficulty = 'normal';

        this.difficultySettings = {
            easy: { minTime: 800, maxTime: 2000, gameTime: 45 },
            normal: { minTime: 500, maxTime: 1500, gameTime: 30 },
            hard: { minTime: 300, maxTime: 1000, gameTime: 25 },
            insane: { minTime: 200, maxTime: 700, gameTime: 20 }
        };

        this.init();
    }

    init() {
        this.highScoreDisplay.textContent = this.highScore;
        this.bindEvents();
        this.updateDisplay();
    }

    bindEvents() {
        this.startBtn.addEventListener('click', () => this.startGame());
        this.pauseBtn.addEventListener('click', () => this.togglePause());
        this.playAgainBtn.addEventListener('click', () => this.startGame());

        this.moles.forEach(mole => {
            mole.addEventListener('click', (e) => this.whackMole(e));
        });

        this.difficultyBtns.forEach(btn => {
            btn.addEventListener('click', () => this.setDifficulty(btn.dataset.difficulty));
        });

        // Prevent right-click cheating
        document.addEventListener('contextmenu', e => e.preventDefault());
    }

    setDifficulty(difficulty) {
        if (this.gameActive) return;

        this.difficulty = difficulty;
        this.timeLeft = this.difficultySettings[difficulty].gameTime;
        this.updateDisplay();

        this.difficultyBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.difficulty === difficulty);
        });
    }

    startGame() {
        this.gameActive = true;
        this.isPaused = false;
        this.score = 0;
        this.hits = 0;
        this.attempts = 0;
        this.timeLeft = this.difficultySettings[this.difficulty].gameTime;

        this.gameOverScreen.classList.remove('show');
        this.startBtn.disabled = true;
        this.pauseBtn.disabled = false;
        this.startBtn.textContent = 'Playing...';

        this.updateDisplay();
        this.startGameTimer();
        this.peepMole();
    }

    startGameTimer() {
        this.gameTimer = setInterval(() => {
            if (!this.isPaused) {
                this.timeLeft--;
                this.updateDisplay();

                if (this.timeLeft <= 0) {
                    this.endGame();
                }
            }
        }, 1000);
    }

    peepMole() {
        if (!this.gameActive || this.isPaused) return;

        const settings = this.difficultySettings[this.difficulty];
        const time = this.randomTime(settings.minTime, settings.maxTime);
        const hole = this.randomHole();

        hole.classList.add('up');

        this.moleTimer = setTimeout(() => {
            hole.classList.remove('up');
            if (this.gameActive && !this.isPaused) {
                this.peepMole();
            }
        }, time);
    }

    whackMole(e) {
        if (!e.isTrusted || !this.gameActive || this.isPaused) return;

        const hole = e.target.closest('.hole');
        if (!hole.classList.contains('up')) return;

        this.score += 10;
        this.hits++;
        this.attempts++;

        hole.classList.remove('up');
        this.showHitEffect(hole);
        this.updateDisplay();

        // Haptic feedback on mobile
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    }

    showHitEffect(hole) {
        const effect = document.createElement('div');
        effect.className = 'hit-effect';
        effect.textContent = '+10';
        hole.appendChild(effect);

        setTimeout(() => {
            if (effect.parentNode) {
                effect.parentNode.removeChild(effect);
            }
        }, 800);
    }

    togglePause() {
        this.isPaused = !this.isPaused;
        this.pauseBtn.textContent = this.isPaused ? 'Resume' : 'Pause';

        if (!this.isPaused) {
            this.peepMole();
        }
    }

    endGame() {
        this.gameActive = false;
        clearInterval(this.gameTimer);
        clearTimeout(this.moleTimer);

        // Hide all moles
        this.holes.forEach(hole => hole.classList.remove('up'));

        // Update high score
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.highScoreDisplay.textContent = this.highScore;
            localStorage.setItem('whack-high-score', this.highScore.toString());
        }

        // Show game over screen
        this.finalScoreDisplay.textContent = this.score;
        this.finalAccuracyDisplay.textContent = this.attempts > 0 ?
            Math.round((this.hits / this.attempts) * 100) + '%' : '0%';
        this.gameOverScreen.classList.add('show');

        // Reset controls
        this.startBtn.disabled = false;
        this.pauseBtn.disabled = true;
        this.startBtn.textContent = 'Start Game';
        this.pauseBtn.textContent = 'Pause';
    }

    updateDisplay() {
        this.scoreDisplay.textContent = this.score;
        this.timeDisplay.textContent = this.timeLeft;

        const accuracy = this.attempts > 0 ? (this.hits / this.attempts) * 100 : 0;
        this.hitRateDisplay.textContent = Math.round(accuracy) + '%';

        const progress = ((this.difficultySettings[this.difficulty].gameTime - this.timeLeft) /
            this.difficultySettings[this.difficulty].gameTime) * 100;
        this.progressBar.style.width = progress + '%';
    }

    randomTime(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    randomHole() {
        const idx = Math.floor(Math.random() * this.holes.length);
        const hole = this.holes[idx];

        if (hole === this.lastHole && this.holes.length > 1) {
            return this.randomHole();
        }

        this.lastHole = hole;
        return hole;
    }
}

// Initialize the game
new WhackAMoleGame();