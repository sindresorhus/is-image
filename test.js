import test from 'ava';
import isImage from '.';

test('main', t => {
	t.true(isImage('unicorn.jpg'));
	t.true(isImage('unicorn.JPG'));
	t.false(isImage('unicorn.zip'));
	t.false(isImage('unicornzip'));
	t.false(isImage('unicorn.txt'));
});
