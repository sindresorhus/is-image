import {expectType} from 'tsd';
import isImage = require('.');

expectType<boolean>(isImage('source/unicorn.png'));
