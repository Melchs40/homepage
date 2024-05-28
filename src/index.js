import './style.css';
import { header } from './header';
import { me } from './me';
import { about } from './about';
import { projects } from './projects';

let content = document.getElementById('content');

let testChild3 = document.createElement('div');
testChild3.setAttribute('id', 'test-child3');

content.appendChild(header);
content.appendChild(me);
content.append(about);
content.append(projects);
content.appendChild(testChild3);
