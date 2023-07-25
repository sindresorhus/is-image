import {expectType} from 'tsd';
import isImage from './index.js';

expectType<boolean>(isImage('source/unicorn.png'));
