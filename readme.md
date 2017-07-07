# is-image [![Build Status](https://travis-ci.org/sindresorhus/is-image.svg?branch=master)](https://travis-ci.org/sindresorhus/is-image)

> Check if a filepath is an image

It just checks the extension. Use [`image-type`](https://github.com/sindresorhus/image-type) if you want to check the actual file.


## Install

```
$ npm install --save is-image
```


## Usage

```js
var isImage = require('is-image');

isImage('src/unicorn.png');
//=> true

isImage('src/unicorn.txt');
//=> false
```


## Related

- [image-extensions](https://github.com/arthurvr/image-extensions) - List of image extensions


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
