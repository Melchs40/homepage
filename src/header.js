export let header = document.createElement('header');
header.setAttribute('id', 'nav-container');

let logoContainer = document.createElement('div');
logoContainer.setAttribute('id', 'logo-container');

let logo = document.createElement('img');
logo.setAttribute('id', 'logo');
logo.src = '../images/Tuxedo38 Logo Black Background No Border.png';
logo.alt = 'My logo';

logo.addEventListener('click', () => {
  logo.classList.add('roll');
  setTimeout(() => {
    logo.classList.remove('roll');
  }, '6000');
});

let links = document.createElement('div');
links.setAttribute('id', 'nav-link-container');

let home = document.createElement('button');
home.classList.add('nav-link');
home.innerHTML = 'Home';

let aboutMe = document.createElement('button');
aboutMe.classList.add('nav-link');
aboutMe.innerHTML = 'About';

let projects = document.createElement('button');
projects.classList.add('nav-link');
projects.innerHTML = 'Projects';

// let resume = document.createElement('button');
// resume.classList.add('nav-link');
// resume.innerHTML = 'Resume';

let contact = document.createElement('button');
contact.classList.add('nav-link');
contact.innerHTML = 'Contact';

header.appendChild(logoContainer);
header.appendChild(links);
logoContainer.appendChild(logo);
links.appendChild(home);
links.appendChild(aboutMe);
links.appendChild(projects);
// links.appendChild(resume);
links.appendChild(contact);
