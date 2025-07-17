# 🎥 Day 28/30 - Video Speed Controller

Welcome to **Day 28** of my 30-Day JavaScript Challenge!  
Today’s challenge was to build a **Video Speed Controller** — a simple yet powerful UI component that lets you control the playback speed of a video by hovering or dragging along a custom vertical scrub bar.

---

### 🌟 Features

- A video player with a **custom speed control bar** that dynamically adjusts playback speed based on cursor position.
- Used `mousemove` and `touchmove` events to track user interaction with the `.speed` container.
- Calculated the speed using a range between `0.4x` to `4x`, and visually updated the `.speed-bar` height and text to reflect the current speed.
- Live updates are smooth and visually clear, making the speed control feel interactive and intuitive.

---

### 📁 File Structure
```
| Day28_VideoSpeedScrubber
├── index.html
├── style.css
```

---

### 🧠 What I Learned

- Working with **event listeners** like `mousemove` and `touchmove` to track user interaction.
- Calculating dynamic values using simple **math operations** and applying them to video playback.
- Using `.offsetTop`, `.offsetHeight`, and `e.pageY` to determine mouse position relative to an element.
- Real-time DOM updates for both visual (bar height) and functional (playback rate) feedback.

---

### 🧪 How It Works

1. Hover or slide over the vertical bar next to the video.  

2. The vertical position (`y`) determines the percentage height.  

3. The height percentage is used to calculate the corresponding playback speed (`0.4x - 4x`).

4. The video’s `playbackRate` is updated instantly.  

---

## 📅 Challenge Progress

✅ **Day 1–27** — _Completed_  
✅ **Day 28: Video Speed Controller** — _Completed_  
🔜 **Day 29:** _Coming soon…_  

---

## 👨‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “Move mouse & Scroll. Simplicity can feel magical when done right.” 🔥  
> — Day 28, wrapped with elegance!
