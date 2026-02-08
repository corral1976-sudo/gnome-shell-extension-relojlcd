# Retro LCD 7-Segment Clock (v12)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/retrolcdclock)

A GNOME Shell extension that adds a vintage-style digital clock to your panel. It features a high-fidelity 7-segment font (Digital-7), customizable colors (Neon Green or Amber), and an adjustable glow effect.

## Preview
![Extension Preview](preview.png)

## Features

- **Realistic LCD Look:** Uses the `Digital-7` font with a custom glow effect.
- **Customizable:** Change font size, choose between Green/Amber colors, and adjust glow intensity.
- **Dynamic Date:** Click the clock to see the full date.
- **Preferences:** Integrated with GNOME Extensions preferences window (LibAdwaita). Updated in v12 to correctly display the version number.

## Installation

### From GNOME Extensions
The easiest way to install is via the [GNOME Extensions website](https://extensions.gnome.org/).

### Manual Installation
1. Clone this repository.
2. Copy the folder to `~/.local/share/gnome-shell/extensions/relojlcd@carlos`.
3. Compile the schema (optional but recommended for manual install):
```bash
glib-compile-schemas ~/.local/share/gnome-shell/extensions/relojlcd@carlos/schemas/

Credits

    Developed by Carlos Corral.

    Uses the Digital-7 font by Sizenko Alexander (Style-7).

License

GPL-3.0
