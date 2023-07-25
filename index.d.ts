/**
Check if a file path is an image.

@example
```
import isImage from 'is-image';

isImage('source/unicorn.png');
//=> true

isImage('source/unicorn.txt');
//=> false
```
*/
export default function isImage(filePath: string): boolean;
