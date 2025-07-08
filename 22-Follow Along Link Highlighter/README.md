# 🔥 Follow Along Nav — Day 22 of 30-Day JavaScript Challenge

Welcome to **Day 22** of my 30-Day JavaScript Challenge!  
Today’s project adds interactive flair to web navigation by animating a highlight effect that **follows your mouse** across links — both in the nav bar and within the page body.

---

## 🌟 Features

- ✨ Dynamic underline/highlight effect on anchor (`<a>`) tags
- 🔁 The highlight span resizes and moves based on hovered link
- 📜 Works on both **navigation bar** and **inline page links**
- 🖱️ Smooth experience using `getBoundingClientRect()` and `transform`

---

## 🗂️ Folder Structure
```
22-Follow Along Nav/
├── index.html # Main HTML file
├── style.css # Separate CSS file for styling
└── (internal JS) # JS embedded directly in HTML file
```

---

## 🧠 What I Learned

- How to use `getBoundingClientRect()` to get size and position of elements
- Creating a `span` element dynamically with JavaScript
- Using `transform: translate()` to move the highlight effect
- Combining **scroll position** with coordinates for accurate placement
- Efficient use of **event delegation** via `mouseenter` on multiple links

---

## 🧪 How It Works

1. **Setup**:  
   A `<span>` with class `.highlight` is created dynamically and appended to the body.

2. **Highlighting**:  
   When the mouse enters an anchor tag (`<a>`), `getBoundingClientRect()` fetches that link’s position and size.

3. **Animation**:  
   Using CSS `transform`, the highlight span is resized and moved to align with the hovered link.

4. **Cross-page Links**:  
   By using `window.scrollY` and `scrollX`, it ensures accurate positioning even if the page is scrolled.

---

## 📅 Challenge Progress   
✅ **Day 1–21** — _Completed_   
✅ **Day 22: Follow Along Nav** — _Completed_    
🔜 **Day 23:** _Coming soon…_    

---

## 👨‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “It’s not just about where the mouse goes — it’s how beautifully the page responds.” 🖱️    
> — Day 22, done with flair!
