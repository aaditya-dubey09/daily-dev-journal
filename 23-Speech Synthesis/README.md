# ✅ The Voiceinator 5000 — Day 23 of 30-Day JavaScript Challenge

Welcome to **Day 23** of my 30-Day JavaScript Challenge!  
Today I built a **text-to-speech web app** using the `SpeechSynthesis API` — a fun, interactive tool that turns typed text into spoken words using different voices and accents.

---

## 🌟 Features

- 🎤 Speak any typed message aloud with just one click
- 🗣️ Choose from available English voices
- 🎚️ Adjust **pitch** and **rate** of speech
- ⏹️ Stop the speech at any time
- 📦 Uses **SpeechSynthesisUtterance** and `speechSynthesis` APIs

---

## 🗂️ Folder Structure
```
23-Speech Synthesis/
├── index.html # Main HTML file with logic embedded
├── style.css # Separate stylesheet for styling
```

---

## 🧠 What I Learned

- How to use the `SpeechSynthesisUtterance()` object in JavaScript
- Dynamically populating the list of available voices from the browser
- How to:
  - Start and stop speech
  - Change pitch and rate on-the-fly
  - Bind form inputs (`range`, `textarea`, `select`) to object properties
- Event handling with:
  - `voiceschanged`
  - `change` events for form inputs

---

## 🧪 How It Works

1. **Initialization**:  
   A `SpeechSynthesisUtterance` object is created and used to store the spoken message.

2. **Voice Population**:  
   When `voiceschanged` is fired, the dropdown is filled with English-language voices using `speechSynthesis.getVoices()`.

3. **Dynamic Settings**:  
   Input sliders let the user adjust `rate` and `pitch` in real-time. Selecting a voice updates the `voice` property on the message object.

4. **Actions**:  
   - `Speak` button: Calls `speechSynthesis.speak()`
   - `Stop` button: Calls `speechSynthesis.cancel()`

---

## 📅 Challenge Progress 

✅ **Day 1–22** — _Completed_  
✅ **Day 23: The Voiceinator 5000** — _Completed_  
🔜 **Day 24:** _Coming soon..._  

---

## 👨‍💻 Author

**Aaditya Dubey**  
📍 Varanasi, India  
<a href="https://linkedin.com/in/aadityadubey" target="_blank" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; color: inherit; color: aquamarine;">
  <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn Icon" style="width: 20px; height: 20px;" />
  LinkedIn Profile
</a>

---

> "Let your code speak for itself — literally!"  
> — Day 23, with voice-powered JavaScript 🚀
