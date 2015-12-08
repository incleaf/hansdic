
var env = require('./vendor/electron_boilerplate/env_config');
var devHelper = require('./vendor/electron_boilerplate/dev_helper');
var windowStateKeeper = require('./vendor/electron_boilerplate/window_state');
var hansdic = require('./hansdic/main');
var os = /^win/.test(process.platform) ? "WINDOWS" : "OSX";
var electron = require('electron');

var Tray = electron.Tray;
var Menu = electron.Menu;
var BrowserWindow = electron.BrowserWindow;
var app = electron.app;

var mainWindow;
var appIcon = null;

// Preserver of the window size and position between app launches.
var mainWindowState = windowStateKeeper('main', {
    width: 400,
    height: 600
});

if(os === "OSX") {
    app.dock.hide(); // hide dock in OS X
}

app.on('ready', function () {


    var screen = electron.screen.getPrimaryDisplay().workAreaSize;
    mainWindow = new BrowserWindow({
        x: screen.width - mainWindowState.width,
        y: screen.height - mainWindowState.height,
        width: mainWindowState.width,
        height: mainWindowState.height,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        frame: true,
        title: "HasnDic"
    });

    var tr = new Tray("resources/dic.png");

    mainWindow.on('close', function(e) {
        mainWindowState.saveState(mainWindow);
        if(os === "WINDOWS") {
            e.preventDefault();
            mainWindow.hide();
            return false;
        }
    }).on('page-title-updated', function(e){
        e.preventDefault();
    });

    var dic = hansdic(mainWindow);
    dic.init();
});

app.on('window-all-closed', function () {
    app.quit();
});
