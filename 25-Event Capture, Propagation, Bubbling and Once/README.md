# 🧠 Event Capture & Bubbling — Day 25 of 30-Day JavaScript Challenge

Welcome to **Day 25** of my 30-Day JavaScript Challenge!  
Today's project is a hands-on dive into how **event propagation** works in JavaScript — specifically the concepts of **capturing**, **bubbling**, and `once`.

---

## 🌟 Features

- 🔁 Demonstrates event bubbling vs capturing
- ✅ Uses `{ once: true }` to auto-remove event listeners
- 🧱 Simple nested `div` structure for clarity
- 🖱 Logs the click order visually via console

---

## 🗂️ Folder Structure
```
25-Event Capture, Bubbling, Propagation/
└── index.html # Single HTML file containing markup, CSS, and JS
```

---

## 🧠 What I Learned

- How event propagation flows:
  - **Capturing phase** (top → target)
  - **Bubbling phase** (target → top)
- How to use the `{ capture: true }` and `{ once: true }` options in `addEventListener`
- Importance of `e.stopPropagation()` to prevent further bubbling
- Visualizing the event order using console logs in nested elements

---

## 🧪 How It Works

1. There are three nested `<div>` elements: `.one` → `.two` → `.three`
2. Each has a `click` event listener with `{ capture: false, once: true }`
3. Clicking logs the div’s class and then removes the event handler
4. The button also uses `{ once: true }`, logging `click` only once

📌 Try toggling `capture: true` to observe **capturing** vs **bubbling** in action!

---

## 📅 Challenge Progress

✅ **Day 1–24** — _Completed_  
✅ **Day 25: Event Capture & Bubbling** — _Completed_  
🔜 **Day 26: Coming up next...**_

---

## 🧑‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “Mastering propagation is like knowing where the ripple starts.”  
> — Day 25, with click clarity 🧩
