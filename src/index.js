import './style.css';
import { header } from './header';
import { me } from './me';
import { about } from './about';
import { projects } from './projects';
import { contact } from './contact';

let content = document.getElementById('content');

let testChild3 = document.createElement('div');
testChild3.setAttribute('id', 'test-child3');

content.appendChild(header);
content.appendChild(me);
content.appendChild(about);
content.appendChild(projects);
content.appendChild(contact);
// content.appendChild(testChild3);

let footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.innerHTML = 'Copyright © 2024 | Samuel Melchior Web Development ';
content.appendChild(footer);
