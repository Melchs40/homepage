import './style.css';
import { header } from './header';

let content = document.getElementById('content');

let testChild2 = document.createElement('div');
testChild2.setAttribute('id', 'test-child2');

let testChild3 = document.createElement('div');
testChild3.setAttribute('id', 'test-child3');

content.appendChild(header);
content.appendChild(testChild2);
testChild2.appendChild(testChild3);
