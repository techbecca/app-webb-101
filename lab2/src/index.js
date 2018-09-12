import 'babel-polyfill';
import Promise from 'promise-polyfill';
import {search} from './search';
document.querySelector('#animal-search').addEventListener('keyup', search);
