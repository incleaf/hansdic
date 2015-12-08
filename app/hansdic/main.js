'use strict';

var init = require('./init');
var shortcut = require('./shortcut');

module.exports = function (mainWindow) {
    var mainWindow = mainWindow;

    return {
        init: function() {
            init(mainWindow);
            shortcut(mainWindow);
        }
    };
};
