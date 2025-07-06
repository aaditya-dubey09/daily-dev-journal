# 🗣️ Speech Detection — Day 20 of 30-Day JavaScript Challenge

Welcome to **Day 20** of my 30-Day JavaScript Challenge!  
Today’s project explores the **Web Speech API** to create a **live voice-to-text app** right inside the browser. It listens to your voice in real-time and displays what you're saying as editable paragraphs!

---

## 🌟 Features

- 🎙️ Live speech recognition using `SpeechRecognition`
- ✍️ Dynamically creates paragraphs as you speak
- 📝 Text appears in a lined notebook-like UI
- 🔁 Automatically restarts listening after finishing a sentence
- 🌐 Uses `en-US` language model by default

---

## 🗂️ Folder Structure

```
20-Speech Detection/
├── index.html       # Main HTML with inline JS and CSS
└── package.json     # Setup for local server using browser-sync
```

---

## 🧠 What I Learned

- How to use the **Web Speech API** for speech recognition
- Setting up **interim results** for real-time feedback
- Creating new DOM elements dynamically (`<p>`) with JS
- How to continuously listen using `recognition.start()` inside `end` event
- Styling with `contenteditable` divs for live editing
- Using `browser-sync` as a simple development server

---

## 🔍 How It Works

1. **SpeechRecognition Setup**

   ```js
   window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
   const recognition = new SpeechRecognition();
   recognition.interimResults = true;
   recognition.lang = 'en-US';
   ```

2. **On Speech Result**
   - Converts results to an array
   - Maps and joins transcripts
   - Displays them live inside a `<p>` tag

3. **Final Sentence?**
   - If the sentence is finalized (`isFinal`), a new paragraph is created for the next one.

4. **Restart on End**
   - Listens forever by calling `recognition.start()` on `end` event.

---

## 🛠️ Tech Used

- HTML5 with `contenteditable` divs
- CSS for a beautiful lined notebook layout
- JavaScript
- SpeechRecognition API
- DOM manipulation (`createElement`, `appendChild`)
- Event listeners (`result`, `end`)

---

## ⚠️ Notes

- This only works on Chrome and Edge (WebKit-based browsers).
- You must have a microphone and grant browser permission.
- You can easily customize or censor speech using `.replace()` with regex.

---

## 📅 Challenge Progress

- ✅ **Day 1–19** — _Completed_  
- ✅ **Day 20: Speech Detection** — _Completed_  
- 🔜 **Day 21: Coming up next…**

---

## 👨‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> “Let the browser hear your voice, and turn thoughts into text — one word at a time.” 📝  
> — Let’s keep speaking and coding!
