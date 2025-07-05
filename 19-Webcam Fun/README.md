# 📸 Webcam Fun — Day 19 of 30-Day JavaScript Challenge

Welcome to **Day 19** of my 30-Day JavaScript Challenge!  
Today’s project taps into the **power of your webcam** to take photos and apply live visual effects using the **HTML5 Canvas API**. You can even **snap a photo with a click** and download it instantly.

---

## 🌟 Features

- 📷 Accesses webcam using `getUserMedia()`
- 🖌️ Real-time video painting on `<canvas>`
- 🎨 Apply cool pixel effects:
  - Red tint
  - RGB split
  - Green screen (chroma key)
- 🔊 Shutter sound effect using `snap.mp3`
- 🖼️ Snap photos and auto-download with a styled preview

---

## 🗂️ Folder Structure
```
19-Webcam Fun/
├── index.html # Markup and webcam structure
├── style.css # Basic styling for layout
├── scripts.js # All JavaScript logic
├── snap.mp3 # Camera shutter sound
└── package.json # Optional (not used here)
```

---

## 🧠 What I Learned

- Using `navigator.mediaDevices.getUserMedia()` to access webcam stream
- Drawing live video onto a canvas with `drawImage()`
- Manipulating image data with `getImageData()` and `putImageData()`
- How to play audio using `.play()` for UX feedback
- Creating downloadable image links using `canvas.toDataURL()`

---

## 🔍 How It Works

1. **`getVideo()`**  
   → Requests webcam access, streams it to a video tag using `video.srcObject`.

2. **`paintToCanvas()`**  
   → Continuously draws current video frames on the `<canvas>` every 16ms (≈60fps) and applies visual effects on pixel data.

3. **Pixel Effects Functions**
   - `redEffect()` – Boosts red, reduces green & blue.
   - `rgbSplit()` – Separates RGB into glitch-like visuals.
   - `greenScreen()` – Removes selected color ranges for chroma key effects.

4. **`takePhoto()`**  
   → Takes the current canvas image, plays a sound, generates a JPEG URL, and inserts it into the strip with a download link.

---

## 🎯 How to Use

1. Open `index.html` in a browser (must allow webcam access).
2. See yourself on the screen with a funky effect applied.
3. Click to snap a photo — it gets saved in the strip below!
4. Click on any preview to download it.

---

## 🛠️ Tech Used

- HTML5: `<video>`, `<canvas>`, `<audio>`
- JavaScript ES6:
  - `getUserMedia()`, `srcObject`, `drawImage()`
  - `getImageData()`, pixel array manipulation
  - Dynamic image generation + downloading
- CSS Flexbox for layout

---

## ⚠️ Notes

- For **privacy and security**, browsers block webcam access without HTTPS or localhost.
- `createObjectURL()` is **deprecated** — use `srcObject` for video stream.

---

## 📅 Challenge Progress

✅ **Day 1–18** — _Completed_  
✅ **Day 19: Webcam Fun** — _Completed_  
🔜 **Day 20: Coming up next…**

---

## 👨‍🚀 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “Coding with pixels is like painting — one RGB value at a time.” 🎨  
> — Let's keep building!
