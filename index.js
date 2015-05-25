'use strict';
var path = require('path');
var imageExtensions = require('image-extensions');
var exts = Object.create(null);

imageExtensions.forEach(function (el) {
	exts[el] = true;
});

module.exports = function (filepath) {
	var ext = path.extname(filepath).slice(1).toLowerCase();

	if (ext === '') {
		return false;
	}

	return ext in exts;
};
