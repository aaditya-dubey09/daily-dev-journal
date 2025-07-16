# 🖱️ Click & Drag — Day 27 of 30-Day JavaScript Challenge

Welcome to **Day 27** of my 30-Day JavaScript Challenge!  
Today’s project introduces a natural **click-and-drag scrolling experience**, just like you’d find in modern image sliders or product carousels.

---

## 🌟 Features

- 👆 Horizontal click-and-drag to scroll the container
- ✨ Smooth scrolling effect using mouse events
- 🚫 Prevents accidental text selection during dragging
- ✅ Enhanced control with custom `drag` speed multiplier

---

## 🗂️ Folder Structure
```
27-Click and Drag/
├── index.html # Main HTML file with internal JS
├── style.css # Separate CSS file for styles
```

---

## 🧠 What I Learned

- How to track mouse position with `mousedown`, `mousemove`, `mouseup`, `mouseleave`
- Using `scrollLeft` and `offsetLeft` to calculate scroll movement
- Implementing **state flags** (`isDown`) for controlled behavior
- Preventing default behavior for smooth UX

---

## 🧪 How It Works

1. **Mouse Down**:  
   Enables scroll state, records starting mouse position and scroll offset.

2. **Mouse Move**:  
   As the mouse moves, calculates the distance moved and scrolls the container accordingly using `scrollLeft`.

3. **Mouse Up / Leave**:  
   Ends the drag interaction and resets the active state.

---

## 📅 Challenge Progress

✅ **Day 1–26** — _Completed_
✅ **Day 27: Click & Drag** — _Completed_
🔜 **Day 28:** _Coming soon…_

---

## 👨‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “Click. Drag. Scroll. Simplicity can feel magical when done right.” 🔥  
> — Day 27, wrapped with elegance!
