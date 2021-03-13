'use strict';
// all of the code we write has to follow best practices

var moment = require('moment');

/**
 * Returns a div element with a footer and updating year
 * @param {string} name
 * @return {string}
 */
exports.footer = function (name) {
    return "Copyright " + moment().format('YYYY') + " " + name + " All rights reserved";
};
// calls exports package/object and calls footer attribute