import './style.css';
import { header } from './header';
import { me } from './me';
import { about } from './about';
import { projects } from './projects';
import { contact } from './contact';

let content = document.getElementById('content');

content.appendChild(header);
content.appendChild(me);
content.appendChild(about);
content.appendChild(projects);
content.appendChild(contact);

let footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
footer.innerHTML = 'Copyright © 2024 | Samuel Melchior Web Development ';
content.appendChild(footer);
