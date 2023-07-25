import test from 'ava';
import isImage from './index.js';

test('main', t => {
	t.true(isImage('unicorn.jpg'));
	t.true(isImage('unicorn.JPG'));
	t.true(isImage('unicorn.HEIC'));
	t.false(isImage('unicorn.zip'));
	t.false(isImage('unicornzip'));
	t.false(isImage('unicorn.txt'));
});
