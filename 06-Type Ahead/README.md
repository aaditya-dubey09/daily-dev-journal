# 🔎 Type Ahead (Live Search) — Day 6 of 30-Day JavaScript Challenge

Welcome to **Day 6** of my self-paced **30-Day JavaScript Challenge**! 🚀  
Today’s project was focused on building a **real-time search UI** using data fetched from an external API. As you type, matching **cities and states** are filtered and displayed dynamically with JavaScript — just like modern search bars!

![Demo](https://github.com/aaditya-dubey09/daily-dev-journal/blob/main/06-Type%20Ahead/assets/demo.png?raw=true)

---

## 🌟 Features

- 📦 Fetches data from a remote API (gist-hosted JSON)
- 🔎 Live search with regex-based filtering
- 💡 Highlights matching characters in real-time
- 💯 Displays formatted population counts with commas
- ✨ Fully interactive without page reload

---

## 📂 Folder Structure

```
Type-Ahead/
├── README.md # Project description
├── index.html # Input field and suggestions container
├── style.css # Basic styling and highlight class
├── script.js # API fetch, match filtering, DOM updates
```

---

## 🛠️ Technologies Used

- **HTML5** — Input and suggestions layout
- **CSS3** — Minimal styling with highlight support
- **JavaScript** — Fetch API, RegExp, `filter()`, `map()`, `join()`, event handling
- **External API** — City/state/population data via [gist](https://gist.github.com/Miserlou/c5cd8364bf9b2420bb29)

---

## 💡 What I Learned

- How to fetch and parse JSON data asynchronously using `fetch()`
- Using `RegExp` dynamically for case-insensitive, global matching
- Efficiently filtering arrays of objects with `filter()`
- Updating the DOM in real-time based on input (`keyup`, `change`)
- Replacing matched text dynamically using `String.replace()`
- Formatting numbers with thousands separators using RegEx

---

## 🎯 How to Use

1. Clone or download the repository
2. Open `index.html` in your browser
3. Start typing any U.S. city or state name
4. Watch the live-matching results and population update instantly
5. Try entering partial names or letters to test dynamic matching

---

## 📅 Challenge Progress

✅ **Day 1: Drum Kit** — _Completed_  
✅ **Day 2: Analog Clock** — _Completed_  
✅ **Day 3: CSS Variables Playground** — _Completed_  
✅ **Day 4: Array Cardio (Part 1)** — _Completed_  
✅ **Day 5: Flex Panels Gallery** — _Completed_  
✅ **Day 6: Type Ahead (Live Search)** — _Completed_  
🔜 **Day 7: Coming soon…**

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

> “Progress, not perfection — one project at a time.”  
> — Join me on my 30-day journey of frontend mastery!