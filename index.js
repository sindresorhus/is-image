'use strict';
const path = require('path');
const imageExtensions = require('image-extensions');

const exts = new Set(imageExtensions);

module.exports = function (filepath) {
	return exts.has(path.extname(filepath).slice(1).toLowerCase());
};
