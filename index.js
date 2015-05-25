'use strict';
var path = require('path');
var imageExtensions = require('image-extensions');
var exts = Object.create(null);

imageExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	return path.extname(filepath).slice(1).toLowerCase() in exts;
};
