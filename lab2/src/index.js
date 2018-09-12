import 'babel-polyfill';
import 'promise-polyfill/src/polyfill';
import {search} from './search';
document.querySelector('#animal-search').addEventListener('keyup', search);
