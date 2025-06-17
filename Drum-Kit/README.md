# 🥁 Drum Kit — Day 1 of 30-Day JavaScript Challenge

Welcome to **Day 1** of my self-paced **30-Day JavaScript Challenge**! 🚀  
This project is a custom interactive **Drum Kit** built using HTML, CSS, and Vanilla JavaScript. It responds to both **keyboard and click/tap events** — so it works smoothly on desktop and mobile.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://jsdrum-beats.netlify.app)

![Drum Kit Demo](https://github.com/aaditya-dubey09/Drum-Kit/blob/main/assets/demo.gif?raw=true)

---

## 🌟 Features

- 🎹 Keyboard key triggers for drum sounds  
- 📱 Click/tap support for mobile and touchscreen users  
- 🔊 Audio replay on rapid interactions without delay  
- 🎬 Animated visual feedback on key press or click  
- 💎 Glassmorphism + Neon UI  
- ✨ Custom cursor and background particles  
- 🧩 Custom styled scrollbars for consistent UI  
- 📏 Fully responsive layout with mobile-first enhancements

---

## 📂 Folder Structure

```
drum-kit/
├── index.html            # HTML structure
├── style.css             # UI styling and animations
├── script.js             # Drum kit logic
└── assets/
    ├── *.mp3             # Drum sounds
    └── cursor.png        # Custom pointer image
```

---

## 🛠️ Technologies Used

- HTML5 + Semantic Elements  
- CSS3 with Transitions, Keyframes, and Media Queries  
- JavaScript (ES6+ features)  
- Google Fonts — [Orbitron](https://fonts.google.com/specimen/Orbitron)

---

## 📱 Mobile Friendly

✅ Fully responsive layout  
✅ Click/tap support for mobile users  
✅ Adaptive grid layout for smaller screens

---

## 💡 What I Learned

- Handling multiple event types (`keydown`, `click`) in JS  
- Selecting elements dynamically with `data-*` attributes  
- Resetting and replaying audio with `.currentTime = 0`  
- Managing animations with `transitionend`  
- Avoiding bugs like:
  - Key getting stuck in `.playing` state
  - Audio lag on rapid replays
  - Mobile click compatibility
  - Cursor image not showing due to path or size
  - Scrollbar leaving white gap on the right
  - Footer shrinking due to flex rules

---

## 🎯 How to Use

1. Clone this repository  
2. Make sure audio files are correctly linked in `index.html`  
3. Open `index.html` in a browser  
4. Press corresponding keys or tap boxes to play drum sounds  
5. Enjoy the visuals and sound ✨

---

## 📌 Future Improvements

- Add volume slider or mute toggle  
- Visualize beats with canvas animation  
- Support drag-and-drop custom sound uploads  
- Save user preferences with localStorage  

---

## 📅 Challenge Progress

✅ **Day 1: Drum Kit** — *Completed*  
🔜 Day 2: Coming soon…

---

## 🧑‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
🌐 [GitHub Profile](https://github.com/aaditya-dubey09)

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use, remix, and build upon it!

---

> "One day or day one. You decide."  
> — Let’s build 30 projects in 30 days!