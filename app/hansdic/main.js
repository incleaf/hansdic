'use strict';

var init = require('./init');
var shortcut = require('./shortcut');

module.exports = function (electron, app, mainWindow) {
    var electron = electron;
    var app = app;
    var mainWindow = mainWindow;

    return {
        init: function() {
            init(mainWindow);
            shortcut(mainWindow);
        }
    };
};
