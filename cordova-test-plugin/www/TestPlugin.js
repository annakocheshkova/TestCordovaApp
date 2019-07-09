
// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

var exec = require('cordova/exec');

var TestPlugin = {
    getSomething: function (success, error) {
        success();
    }
};

module.exports = TestPlugin;
