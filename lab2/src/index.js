import 'babel-polyfill';
import {search} from './search';
document.querySelector('#animal-search').addEventListener('keyup', search);
