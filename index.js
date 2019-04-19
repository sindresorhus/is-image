'use strict';
const path = require('path');
const imageExtensions = require('image-extensions');

const extensions = new Set(imageExtensions);

module.exports = filePath => extensions.has(path.extname(filePath).slice(1).toLowerCase());
