# 🧠 JS Reference vs Copy — Day 14 of 30-Day JavaScript Challenge

Welcome to **Day 14** of my self-paced **30-Day JavaScript Challenge**! 🚀  
In today’s exercise, I explored a foundational concept in JavaScript — the **difference between copying by reference vs copying by value**. This is critical when working with **arrays and objects**, as it affects how data is stored and manipulated.

---

## 🌟 Features

- 🧪 Demonstrates behavior of **primitive values (numbers, strings)** vs **reference types (arrays, objects)**
- 📋 Shows **how direct assignments affect original data**
- 🔄 Explains different techniques to **create shallow copies** of arrays and objects
- 📦 Introduces ES6 methods like `slice()`, `concat()`, `[...spread]`, and `Object.assign()`
- ⚠️ Highlights **limitations** of shallow copy and suggests use of `JSON.parse(JSON.stringify())` for deep copying

---

## 📂 Folder Structure
```
14-JS Reference vs Copy/
├── README.md # Project description
├── index.html # HTML + embedded JS logic demonstration
```

---

## 🛠️ Technologies Used

- **HTML5** — Basic structure
- **JavaScript (ES6)**:
  - `slice()`, `concat()`, `spread (...)` — to copy arrays
  - `Object.assign()`, spread operator — to copy objects
  - `JSON.parse(JSON.stringify())` — for deep cloning
  - `console.clear()`, `console.log()` — for debugging insights

---

## 💡 What I Learned

- ⚙️ Primitive types (like strings or numbers) are copied **by value**, so changes don’t affect the original.
- 🧩 Arrays and objects are copied **by reference**, meaning changes affect all variables pointing to them.
- 🛠️ Copying techniques:
  - Arrays: `slice()`, `concat()`, `[...spread]`, `Array.from()`
  - Objects: `Object.assign({}, obj)`, `{...obj}`
- 🧬 Deep copying nested structures requires additional care. One simple method is using `JSON.parse(JSON.stringify(obj))`, though it has limitations (e.g., loses functions, `undefined`, `Date`, etc.)

---

## 🎯 How to Use

1. Open `index.html` in your browser
2. Check the browser **console** to observe behavior and logs
3. Follow the flow of:
   - Variable assignment
   - Copying attempts
   - Correct techniques
   - Deep copy with JSON methods

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
✅ **Day 13: Slide-In Images on Scroll** — _Completed_  
✅ **Day 14: JS Reference vs Copy** — _Completed_  
🔜 **Day 15: Coming soon…**

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

> “Understanding reference and value is like gaining superpowers in JavaScript.”  
> — Keep experimenting, keep learning!
