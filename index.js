'use strict';
var path = require('path');
var imageExtensions = require('image-extensions');
var isUrl = require('is-url');
var fileType = require('file-type');
var readChunk = require('read-chunk');
var fetch = require('node-fetch');

function checkFileType(data, exts) { return fileType(data).ext in exts; }

function generateExtensions() {
  var exts = Object.create(null);
  imageExtensions.forEach(function(el) { exts[el] = true; });
  return exts;
}

module.exports = function(filepath) {
  var exts = generateExtensions();

  if (isUrl(filepath)) {
    return fetch(filepath)
        .then(function(res) { return res.buffer(); })
        .then(function(buffer) { return checkFileType(buffer, exts) })
        .catch(function(error) { return false; })
  }
  return readChunk(filepath.toLowerCase(), 0, 4100)
      .then(function(buffer) { return checkFileType(buffer, exts) })
      .catch(function(error) { return false; });
};
