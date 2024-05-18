export let header = document.createElement('header');
header.setAttribute('id', 'nav-container');

let logoContainer = document.createElement('div');
logoContainer.setAttribute('id', 'logo-container');

let logo = document.createElement('img');
logo.setAttribute('id', 'logo');
logo.src = '../images/mylogo.png';
logo.alt = 'My logo';

let links = document.createElement('div');
links.setAttribute('id', 'nav-link-container');

let home = document.createElement('div');
home.classList.add('nav-link');
home.innerHTML = 'Home';

let projects = document.createElement('div');
projects.classList.add('nav-link');
projects.innerHTML = 'Projects';

let resume = document.createElement('div');
resume.classList.add('nav-link');
resume.innerHTML = 'Resume';

let contact = document.createElement('div');
contact.classList.add('nav-link');
contact.innerHTML = 'Contact';

header.appendChild(logoContainer);
header.appendChild(links);
logoContainer.appendChild(logo);
links.appendChild(home);
links.appendChild(projects);
links.appendChild(resume);
links.appendChild(contact);
