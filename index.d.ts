/**
Check if a filepath is an image.

@example
```
const isImage = require('is-image');

isImage('src/unicorn.png');
//=> true

isImage('src/unicorn.txt');
//=> false
```
*/
declare function isImage(filePath: string): boolean;

export = isImage;
