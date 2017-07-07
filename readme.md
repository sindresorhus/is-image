# is-image [![Build Status](https://travis-ci.org/sindresorhus/is-image.svg?branch=master)](https://travis-ci.org/sindresorhus/is-image)

> Check if a filepath is an image

It just checks the extension. Use [`image-type`](https://github.com/sindresorhus/image-type) if you want to check the actual file.


## Install

```
$ npm install is-image
```


## Usage

```js
const isImage = require('is-image');

isImage('src/unicorn.png');
//=> true

isImage('src/unicorn.txt');
//=> false
```


## Related

- [image-extensions](https://github.com/arthurvr/image-extensions) - List of image extensions
- [image-type](https://github.com/sindresorhus/image-type) - Detect the image type of a Buffer/Uint8Array
- [is-text-path](https://github.com/sindresorhus/is-text-path) - Check if a filepath is a text file
- [is-binary-path](https://github.com/sindresorhus/is-binary-path) - Check if a filepath is a binary file


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
