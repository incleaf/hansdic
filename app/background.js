// This is main process of Electron, started as first thing when your
// app starts. This script is running through entire life of your application.
// It doesn't have any windows which you can see on screen, but we can open
// window from here.

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var env = require('./vendor/electron_boilerplate/env_config');
var devHelper = require('./vendor/electron_boilerplate/dev_helper');
var windowStateKeeper = require('./vendor/electron_boilerplate/window_state');
var hansdic = require('./hansdic/main');

var mainWindow;

// Preserver of the window size and position between app launches.
var mainWindowState = windowStateKeeper('main', {
    width: 300,
    height: 600
});

app.dock.hide(); // hide dock in OS X

app.on('ready', function () {
    var electronScreen = electron.screen;

    mainWindow = new BrowserWindow({
        x: electronScreen.width - mainWindowState.width,
        y: electronScreen.height - mainWindowState.height,
        width: mainWindowState.width,
        height: mainWindowState.height,
        autoHideMenuBar: true,
        alwaysOnTop: true,
        frame: true
    });

    if (mainWindowState.isMaximized) {
        mainWindow.maximize();
    }

    mainWindow.on('close', function () {
        mainWindowState.saveState(mainWindow);
    });

    var dic = hansdic(electron, app, mainWindow);
    dic.init();
});

app.on('window-all-closed', function () {
    app.quit();
});
