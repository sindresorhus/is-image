/**
Check if a file path is an image.

@example
```
const isImage = require('is-image');

isImage('source/unicorn.png');
//=> true

isImage('source/unicorn.txt');
//=> false
```
*/
declare function isImage(filePath: string): boolean;

export = isImage;
