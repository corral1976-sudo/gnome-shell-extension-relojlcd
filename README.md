# 📟 Retro LCD 7-Segment Clock

<p align="center">
  <a href="https://ko-fi.com/retrolcdclock">
    <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="ko-fi" height="38" />
  </a>
</p>

### A vintage-style digital clock for your GNOME panel. High-fidelity 7-segment display with total customization.

---

# 🌟 Main Features

* **🕹️ Authentic LCD Styles:** Neon Green, Vintage Amber, and the classic **Retro Gray** (Casio-style).
* **✨ Realistic Glow:** Adjustable glow intensity for Neons and shadow depth for the **Gray LCD mode**.
* **🔔 Integrated Alarm:** Set custom alarms with a vintage beep sound and visual blinking notification.
* **🎵 Seamless Audio:** High-performance alarm looping powered by GStreamer for a smooth experience.
* **📍 Dynamic Positioning:** Place it on the **Left**, **Center**, or **Right** of your panel.
* **🖱️ Quick Settings:** Open the configuration panel with just one click on the clock.
* **📏 Full Scaling:** Adjust font size and 12h/24h formats in real-time.

---

# 📸 Preview

<p align="center">
  <img src="preview.png" alt="Retro LCD Clock Preview" width="800" style="border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
</p>

---

# 🚀 Installation

### 1. From GNOME Extensions
The easiest way is through the official [GNOME Extensions Store](https://extensions.gnome.org/extension/6910/relojlcd/).

### 2. Manual (For Developers)

```bash
# Clone the repo
git clone [https://github.com/corral1976-sudo/gnome-shell-extension-relojlcd.git](https://github.com/corral1976-sudo/gnome-shell-extension-relojlcd.git)

# Copy to extensions folder
cp -r gnome-shell-extension-relojlcd ~/.local/share/gnome-shell/extensions/relojlcd@carlos

# Compile the schema
glib-compile-schemas ~/.local/share/gnome-shell/extensions/relojlcd@carlos/schemas/
