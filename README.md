
# Retro LCD 7-Segment Clock for GNOME Shell

A GNOME Shell extension that adds a vintage-style digital clock to your panel. It features a high-fidelity 7-segment font (Digital-7), customizable colors (Neon Green or Amber), and an adjustable glow effect.

## Preview
![Extension Preview](preview.png)

## Features

- **Realistic LCD Look:** Uses the `Digital-7` font with a custom glow effect.
- **Customizable:** Change font size, choose between Green/Amber colors, and adjust glow intensity.
- **Dynamic Date:** Click the clock to see the full date.
- **Preferences:** Integrated with GNOME Extensions preferences window (LibAdwaita).

## Installation

### From GNOME Extensions
The easiest way to install is via the [GNOME Extensions website](https://extensions.gnome.org/).

### Manual Installation
1. Clone this repository.
2. Copy the folder to `~/.local/share/gnome-shell/extensions/relojlcd@carlos`.
3. Compile the schema (optional but recommended for manual install):
   ```bash
   glib-compile-schemas ~/.local/share/gnome-shell/extensions/relojlcd@carlos/schemas/
