# 📌 Sticky Navigation — Day 24 of 30-Day JavaScript Challenge

Welcome to **Day 24** of my 30-Day JavaScript Challenge!  
Today’s project demonstrates how to build a **sticky navigation bar** that locks to the top of the page as you scroll down.

---

## 🌟 Features

- 📌 Navigation bar sticks to the top once scrolled past
- 🎯 Dynamic class toggling based on scroll position
- 📱 Fully responsive layout with smooth style transitions
- ✨ Expanding logo when navigation becomes sticky

---

## 🗂️ Folder Structure
```
24-Sticky Nav/
├── index.html # Main HTML file with JS
├── style.css # Linked stylesheet for all UI styling
```

---

## 🧠 What I Learned

- How to get an element’s distance from the top using `offsetTop`
- Using `window.scrollY` to track scroll position
- Dynamically applying and removing classes with `classList`
- Adjusting layout with `paddingTop` to prevent jumpy UI
- Coordinating scroll-based events for UI transformation

---

## 🔧 How It Works

1. We detect the `offsetTop` of the `<nav>` element.
2. When the page is scrolled beyond that point:
   - A class `.fixed-nav` is added to the `<body>`.
   - This locks the nav to the top of the screen.
3. Simultaneously, `.site-wrap` scales back to full size and the logo expands smoothly using CSS transitions.

---

## 📅 Challenge Progress

✅ **Day 1–23** — _Completed_  
✅ **Day 24: Sticky Nav** — _Completed_  
🔜 **Day 25: Coming soon...**_

---

## 👨‍💻 Author

**Aaditya Dubey**    
📍 Varanasi, India    
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “Sticky ideas stick, and so does sticky nav!”  
> — Day 24, with scroll-powered navigation 🧭
