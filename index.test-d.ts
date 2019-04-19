import {expectType} from 'tsd';
import isImage = require('.');

expectType<boolean>(isImage('/path/to/img.png'));
