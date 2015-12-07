var env = require('../vendor/electron_boilerplate/env_config');
var devHelper = require('../vendor/electron_boilerplate/dev_helper');
var windowStateKeeper = require('../vendor/electron_boilerplate/window_state');

module.exports = function (mainWindow) {
    if (env.name === 'test') {
        // mainWindow.loadURL('file://' + __dirname + '/spec.html');
        mainWindow.loadUrl("http://m.endic.naver.com");
    } else {
        // mainWindow.loadURL('file://' + __dirname + '/app.html');
        mainWindow.loadUrl("http://m.endic.naver.com");
    }

    if (env.name !== 'production') {
        // devHelper.setDevMenu();
        // mainWindow.openDevTools();
    }
};
