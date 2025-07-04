# ⏱️ Video Time Calculator — Day 18 of 30-Day JavaScript Challenge

Welcome to **Day 18** of my self-paced **30-Day JavaScript Challenge**! 🚀  
Today, I created a **video time calculator** using JavaScript to sum up the total time of multiple videos on a page using their `data-time` attributes. The result is displayed in a clean **HH:MM:SS** format!

---

## 🌟 Features

- ⏳ Extracts and sums up all durations stored in `data-time` attributes
- 🧮 Converts **minutes + seconds → total seconds → HH:MM:SS format**
- 📊 Works dynamically on any list of videos with `data-time` tags
- 🧠 Demonstrates **array transformation, mapping, and reduction**

---

## 📂 Folder Structure
```
18-Adding Time with Reduce/
├── README.md # Project description
├── index.html # All code in a single file
```

---

## 🛠️ Technologies Used

- **HTML5** — Contains a `<ul>` with `<li>` elements for each video
- **JavaScript (ES6)**:
  - `Array.from()` to convert NodeList to an array
  - `map()` to extract and convert time strings
  - `reduce()` to sum up total seconds
  - `Math.floor()` and `%` for hour/min/sec conversion

---

## 💡 What I Learned

- Parsing `data-*` attributes from HTML
- Transforming `MM:SS` format into **total seconds**
- Chaining `map()` and `reduce()` for concise logic
- Converting seconds into a human-readable **HH:MM:SS**
- Building logic without UI — just data manipulation!

---

## 🎯 How to Use

1. Open `index.html` in your browser
2. Open the console (DevTools → Console)
3. The total video duration will be printed as `HH:MM:SS`

---

## 📅 Challenge Progress

✅ **Day 1–17** — _Completed_  
✅ **Day 18: Adding Time with Reduce** — _Completed_  
🔜 **Day 19: Coming soon…**

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

> “Every second counts — especially when you know how to count them.”  
> — Keep experimenting, keep learning!
