import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import St from 'gi://St';
import * as PanelMenu from 'resource:///org/gnome/shell/ui/panelMenu.js';
import * as PopupMenu from 'resource:///org/gnome/shell/ui/popupMenu.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';
import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';

export default class RelojLCDExtension extends Extension {
    enable() {
        this._settings = this.getSettings();
        this._indicator = new PanelMenu.Button(0.5, 'Retro LCD Clock', false);

        this._dateItem = new PopupMenu.PopupMenuItem('', { reactive: false });
        this._indicator.menu.addMenuItem(this._dateItem);
        this._indicator.menu.addMenuItem(new PopupMenu.PopupSeparatorMenuItem());
        
        let settingsItem = new PopupMenu.PopupMenuItem('Settings');
        settingsItem.connect('activate', () => this.openPreferences());
        this._indicator.menu.addMenuItem(settingsItem);

        this._indicator.menu.connect('open-state-changed', (menu, open) => {
            if (open) {
                const now = GLib.DateTime.new_now_local();
                this._dateItem.label.set_text(now.format('%A, %B %d, %Y'));
            }
        });

        this._showColon = true;
        this._clockLabel = new St.Label({
            text: '00:00:00',
            style_class: 'reloj-lcd-label',
            y_align: Clutter.ActorAlign.CENTER,
        });

        const updateStyle = () => {
            const fontSize = this._settings.get_double('font-size');
            const glow = this._settings.get_double('glow-intensity');
            const colorType = this._settings.get_string('clock-color');
            
            const theme = colorType === 'amber' 
                ? { main: '#ffb000', bg: 'rgba(255, 176, 0, 0.15)' } 
                : { main: '#00ff00', bg: 'rgba(0, 255, 0, 0.15)' };

            this._clockLabel.set_style(`
                color: ${theme.main} !important;
                background-color: ${theme.bg};
                border: 1px solid ${theme.main};
                border-radius: 8px; 
                font-family: 'Digital-7', monospace;
                font-size: ${fontSize.toFixed(1)}em; 
                font-weight: 200; 
                padding: 2px 16px;
                text-shadow: 0 0 ${glow.toFixed(0)}px ${theme.main};
            `);
        };

        this._settings.connect('changed::font-size', updateStyle);
        this._settings.connect('changed::clock-color', updateStyle);
        this._settings.connect('changed::glow-intensity', updateStyle);
        
        updateStyle(); 
        this._indicator.add_child(this._clockLabel);
        Main.panel.addToStatusArea(this.uuid, this._indicator);

        this._updateClock();
        this._timeout = GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 1, () => {
            this._updateClock();
            return GLib.SOURCE_CONTINUE;
        });
    }

    _updateClock() {
        if (!this._clockLabel) return;
        const now = GLib.DateTime.new_now_local();
        this._showColon = !this._showColon; 
        this._clockLabel.set_text(now.format(this._showColon ? "%H:%M:%S" : "%H %M %S"));
    }

    disable() {
        if (this._timeout) {
            GLib.source_remove(this._timeout);
            this._timeout = null;
        }
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
        }
        this._settings = null;
        this._clockLabel = null;
        this._dateItem = null;
    }
}
