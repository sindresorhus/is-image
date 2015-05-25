'use strict';
var test = require('ava');
var isImage = require('./');

test(function (t) {
	t.assert(isImage('unicorn.jpg'));
	t.assert(isImage('unicorn.JPG'));
	t.assert(!isImage('unicorn.zip'));
	t.assert(!isImage('unicornzip'));
	t.assert(!isImage('unicorn.txt'));
	t.end();
});
