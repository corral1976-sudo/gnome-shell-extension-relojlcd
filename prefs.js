import { ExtensionPreferences } from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';
import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';

export default class RelojLCDPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        // CORRECCIÓN: Sin argumentos, toma el schema del metadata.json
        const settings = this.getSettings();
        
        const page = new Adw.PreferencesPage();
        const group = new Adw.PreferencesGroup({ title: 'LCD Display Settings' });
        page.add(group);
        window.add(page);

        // Size
        const fontRow = new Adw.ActionRow({ title: 'Font Size (em)' });
        const fontSpin = new Gtk.SpinButton({
            adjustment: new Gtk.Adjustment({ lower: 1.0, upper: 5.0, step_increment: 0.1, value: settings.get_double('font-size') }),
            digits: 1,
            valign: Gtk.Align.CENTER
        });
        fontSpin.connect('value-changed', (w) => settings.set_double('font-size', w.get_value()));
        fontRow.add_suffix(fontSpin);
        group.add(fontRow);

        // Glow
        const glowRow = new Adw.ActionRow({ title: 'Glow Intensity' });
        const glowSpin = new Gtk.SpinButton({
            adjustment: new Gtk.Adjustment({ lower: 0, upper: 20, step_increment: 1, value: settings.get_double('glow-intensity') }),
            valign: Gtk.Align.CENTER
        });
        glowSpin.connect('value-changed', (w) => settings.set_double('glow-intensity', w.get_value()));
        glowRow.add_suffix(glowSpin);
        group.add(glowRow);

        // Color
        const colorRow = new Adw.ActionRow({ title: 'Display Color' });
        const colorCombo = new Gtk.DropDown({
            model: Gtk.StringList.new(['Neon Green', 'Vintage Amber']),
            selected: settings.get_string('clock-color') === 'green' ? 0 : 1,
            valign: Gtk.Align.CENTER
        });
        colorCombo.connect('notify::selected', (w) => {
            settings.set_string('clock-color', w.selected === 0 ? 'green' : 'amber');
        });
        colorRow.add_suffix(colorCombo);
        group.add(colorRow);
    }
}
