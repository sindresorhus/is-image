import test from 'ava';
import m from './';

test(t => {
  m('unicorn.png').then(t.true)
  m('unicorn.PNG').then(t.true)
  m('https://upload.wikimedia.org/wikipedia/en/4/45/One_black_Pixel.png').then(t.true)
  m('unicorn.zip').then(t.false)
  m('unicornzip').then(t.false)
  m('unicorn.txt').then(t.false)
});
