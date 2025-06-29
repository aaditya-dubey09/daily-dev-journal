# 🖼️ Slide In on Scroll — Day 13 of 30-Day JavaScript Challenge

Welcome to **Day 13** of my self-paced **30-Day JavaScript Challenge**! 🚀
In this project, I created a beautiful animation effect where **images slide in smoothly** as you scroll down the page. The highlight of this challenge was understanding and implementing the **debounce technique** to optimize scroll event performance.

---

## 🌟 Features

* 🖱️ Listens to the scroll event
* 📸 Detects when an image enters the viewport
* ✨ Adds a class to slide in the image with a CSS transition
* 🧠 Uses a `debounce()` function to limit scroll handler calls and boost performance

---

## 📂 Folder Structure

```
13-Slide In on Scroll/
├── README.md          # Project description
├── index.html         # HTML, CSS and JS
```

---

## 🛠️ Technologies Used

* **HTML5** — Content layout and image placement
* **CSS3** — Smooth transitions with `transform` and `opacity`
* **JavaScript (ES6)** — Scroll detection and debounced event handling:

  * `scrollY`, `innerHeight`, `offsetTop`
  * Custom `debounce()` function
  * `addEventListener()` and `classList`

---

## 💡 What I Learned

* How to determine when an element is **partially visible** in the viewport
* Why frequent event calls (like scroll) can cause performance issues
* How `debounce()` controls the number of times a function gets called
* DOM manipulation with class toggling for animations
* Writing modular logic for reusability

---

## 🎯 How to Use

1. Clone or download this repository
2. Open `index.html` in a browser
3. Scroll the page slowly and watch the images slide into view
4. Open the console to explore any debug logs if added

---

## 🧠 Debounce Explanation

```js
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```

* This function makes sure your scroll event logic (`checkSlide`) doesn’t fire on **every single pixel scroll**, but rather after a short delay (default 20ms).
* `callNow` ensures the function is called immediately if there’s no recent activity.
* Helps **avoid performance lag** especially in long scroll-heavy pages.

---

## 📅 Challenge Progress

✅ **Day 1: Drum Kit** — _Completed_  
✅ **Day 2: Analog Clock** — _Completed_  
✅ **Day 3: CSS Variables Playground** — _Completed_  
✅ **Day 4: Array Cardio (Part 1)** — _Completed_  
✅ **Day 5: Flex Panels** — _Completed_  
✅ **Day 6: Type Ahead (Live Search)** — _Completed_  
✅ **Day 7: Array Cardio (Part 2)** — _Completed_  
✅ **Day 8: Canvas Rainbow Drawing** — _Completed_  
✅ **Day 9: Console Tricks** — _Completed_  
✅ **Day 10: Shift + Click Checkboxes** — _Completed_  
✅ **Day 11: Custom Video Player** — _Completed_  
✅ **Day 12: Key Sequence Detection** — _Completed_  
🔜 **Day 13: Slide In on Scroll** — _Completed_  
🔜 **Day 14: Coming soon...**

---

## 🧑‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use, remix, and build upon it!

---

> “When your code scrolls better, your users smile wider.”
> — Keep building, keep animating!
