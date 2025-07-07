# 🧭 Geolocation Compass — Day 21 of 30-Day JavaScript Challenge

Welcome to **Day 21** of my 30-Day JavaScript Challenge!  
Today’s build explores the **Geolocation API** to create a **real-time compass** that reacts to your movement and heading. The SVG-based arrow rotates according to your direction, while your speed is displayed live — all within a sleek, animated UI.

---

## 🌟 Features

- 🛰️ Fetches live speed and heading via `navigator.geolocation.watchPosition`
- 🧭 Rotates an SVG arrow to match current device heading
- 💨 Displays real-time speed in KM/H
- 🎨 Retro-inspired grid background using radial gradients
- ✨ Smooth UI transitions and minimal typography

---

## 🗂️ Folder Structure

```
21-Geolocation Compass/ 
    ├── index.html # Main HTML file with inline styles and script 
    ├── package.json # Local server config via browser-sync 
    └── README.md # Project documentation
```

---

## 🧠 What I Learned

- Using `watchPosition()` for persistent location tracking
- Accessing `speed` and `heading` from `coords`
- Rotating SVG elements dynamically with JavaScript
- Creating a responsive UI with radial gradient patterns
- Setting up a dev server using `browser-sync`

---

## 🔍 How It Works

1. **Geolocation Listener**

   ```js
   navigator.geolocation.watchPosition((data) => {
     speed.textContent = data.coords.speed;
     arrow.style.transform = `rotate(${data.coords.heading}deg)`;
   });
    ```

2. **UI Display**

- Speed is updated in .speed-value
- SVG arrow rotates with transform: rotate(deg)
- Arrow marker overlays to point forward

3. **Fallback**

- If permission is denied, user gets an alert prompting them to allow location access

---

## 🛠️ Tech Used    

- HTML5
- CSS3 with responsive layout + gradients
- Vanilla JavaScript
- Geolocation API
- SVG manipulation
- browser-sync for local hosting

---

## ⚠️ Notes

- Works best on mobile devices with GPS and magnetometer
- Location access is essential; must be granted by the user
- Values like heading and speed may vary based on device support

---

## 📅 Challenge Progress

✅ **Day 1–20** — _Completed_   
✅ **Day 21: Geolocation Compass** — _Completed_     
🔜 **Day 22: Coming tomorrow…**

---

## 👨‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---  

> “Let your movement guide the pixels — the browser compass points wherever you go.” 
>       — Keep navigating and building ✨
