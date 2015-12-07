var shortcutManager = require('../vendor/electron_boilerplate/shortcut_manager');

module.exports = function(window){
    var shortcuts = [
        {
            accelerator: 'ctrl+alt+z',
            callback: function(electron, app, window) {
                var webContents = window.webContents;
                if (window.isVisible()) {
                    window.hide();
                } else {
                    window.show();
                    webContents.executeJavaScript("document.getElementById('main_input').focus()");
                }
            }
        }
    ];
    
    shortcutManager.applyShortcut(window, shortcuts);
}
