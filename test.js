import test from 'ava';
import m from '.';

test(t => {
	t.true(m('unicorn.jpg'));
	t.true(m('unicorn.JPG'));
	t.false(m('unicorn.zip'));
	t.false(m('unicornzip'));
	t.false(m('unicorn.txt'));
});
