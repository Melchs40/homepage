import './style.css';
import { header } from './header';
import { me } from './me';

let content = document.getElementById('content');

let testChild3 = document.createElement('div');
testChild3.setAttribute('id', 'test-child3');

content.appendChild(header);
content.appendChild(me);
content.appendChild(testChild3);
