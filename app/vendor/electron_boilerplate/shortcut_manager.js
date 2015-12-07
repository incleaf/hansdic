'use strict';

var electron = require('electron');
var app = electron.app;
var Menu = electron.Menu;
var globalShortcut = electron.globalShortcut;

module.exports.applyShortcut = function(window, shortcuts){
    for(var i = 0 ; i < shortcuts.length; i ++) {
        var shortcut = shortcuts[i];
        globalShortcut.register(shortcut.accelerator, shortcut.callback.bind(null, electron, app, window));
    }
}

app.on('will-quit', function() {
    // 단축키의 등록을 해제합니다.
    // globalShortcut.unregister(SHORTCUT);
    //
    // // 모든 단축키의 등록을 해제합니다.
    // globalShortcut.unregisterAll();
});
