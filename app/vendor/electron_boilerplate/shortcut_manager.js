'use strict';

var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var globalShortcut = electron.globalShortcut;

var shortcuts;

module.exports.applyShortcut = function(window, shortcuts){
    this.shortcuts = shortcuts;
    for(var i = 0 ; i < shortcuts.length; i ++) {
        var shortcut = shortcuts[i];
        globalShortcut.register(shortcut.accelerator, shortcut.callback.bind(null, electron, app, window));
    }
}

app.on('will-quit', function() {
    globalShortcut.unregisterAll();
});
