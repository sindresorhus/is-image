# is-image

> Check if a file path is an image

It just checks the extension. Use [`image-type`](https://github.com/sindresorhus/image-type) if you want to check the actual file.

## Install

```sh
npm install is-image
```

## Usage

```js
import isImage from 'is-image';

isImage('source/unicorn.png');
//=> true

isImage('source/unicorn.txt');
//=> false
```

## Related

- [image-extensions](https://github.com/arthurvr/image-extensions) - List of image extensions
- [image-type](https://github.com/sindresorhus/image-type) - Detect the image type of a Buffer/Uint8Array
- [is-text-path](https://github.com/sindresorhus/is-text-path) - Check if a filepath is a text file
- [is-binary-path](https://github.com/sindresorhus/is-binary-path) - Check if a filepath is a binary file
