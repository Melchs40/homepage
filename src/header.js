import { aboutMeTitle } from './about';
import { contactTitle } from './contact';
import { projectsTitle } from './projects';

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

home.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

let aboutMe = document.createElement('button');
aboutMe.classList.add('nav-link');
aboutMe.innerHTML = 'About';

aboutMe.addEventListener('click', function () {
  let headerOffset = 80;
  let elementPosition = aboutMeTitle.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
});

let projects = document.createElement('button');
projects.classList.add('nav-link');
projects.innerHTML = 'Projects';

projects.addEventListener('click', function () {
  let headerOffset = 80;
  let elementPosition = projectsTitle.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
});

// let resume = document.createElement('button');
// resume.classList.add('nav-link');
// resume.innerHTML = 'Resume';

let contact = document.createElement('button');
contact.classList.add('nav-link');
contact.innerHTML = 'Contact';

contact.addEventListener('click', function () {
  let headerOffset = 80;
  let elementPosition = contactTitle.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
});

header.appendChild(logoContainer);
header.appendChild(links);
logoContainer.appendChild(logo);
links.appendChild(home);
links.appendChild(aboutMe);
links.appendChild(projects);
// links.appendChild(resume);
links.appendChild(contact);

//mobile nav

let mobileButton = document.createElement('button');
mobileButton.setAttribute('id', 'mobile-nav-button');
mobileButton.classList.add('mobile');
mobileButton.classList.add('material-symbols-outlined');
mobileButton.innerHTML = 'menu';
mobileButton.style.backgroundColor = 'transparent';
links.appendChild(mobileButton);

mobileButton.addEventListener('click', function () {
  //   links.classList.toggle('clicked');
  mobileButton.classList.toggle('clicked');
  mobileContainer.classList.toggle('active');
  mobileHome.classList.toggle('active');
  mobileAbout.classList.toggle('active');
  mobileProjects.classList.toggle('active');
  mobileContact.classList.toggle('active');
  //   let mobileStuff = document.querySelectorAll('.mobile');
  //   for (let i = 0; i < mobileStuff.length; i++) {
  //     if (mobileStuff[i].style.display == 'none') {
  //       mobileStuff[i].style.display == 'block';
  //     } else mobileStuff[i].style.display == 'none';
  //   }
});

let mobileContainer = document.createElement('div');
mobileContainer.setAttribute('id', 'mobile-nav-container');
mobileContainer.classList.add('mobile');
links.appendChild(mobileContainer);

let mobileHome = document.createElement('button');
mobileHome.setAttribute('id', 'mobile-home-button');
mobileHome.classList.add('mobile-buttons');
mobileHome.classList.add('mobile');
mobileHome.innerHTML = 'Home';
mobileContainer.appendChild(mobileHome);

mobileHome.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  //   links.classList.toggle('clicked');
  mobileButton.classList.toggle('clicked');
  mobileContainer.classList.toggle('active');
  mobileHome.classList.toggle('active');
  mobileAbout.classList.toggle('active');
  mobileProjects.classList.toggle('active');
  mobileContact.classList.toggle('active');
});

let mobileAbout = document.createElement('button');
mobileAbout.setAttribute('id', 'mobile-about-button');
mobileAbout.classList.add('mobile-buttons');
mobileAbout.classList.add('mobile');
mobileAbout.innerHTML = 'About';
mobileContainer.appendChild(mobileAbout);

mobileAbout.addEventListener('click', function () {
  let headerOffset = 80;
  let elementPosition = aboutMeTitle.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  //   links.classList.toggle('clicked');
  mobileButton.classList.toggle('clicked');
  mobileContainer.classList.toggle('active');
  mobileHome.classList.toggle('active');
  mobileAbout.classList.toggle('active');
  mobileProjects.classList.toggle('active');
  mobileContact.classList.toggle('active');
});

let mobileProjects = document.createElement('button');
mobileProjects.setAttribute('id', 'mobile-projects-button');
mobileProjects.classList.add('mobile-buttons');
mobileProjects.classList.add('mobile');
mobileProjects.innerHTML = 'Projects';
mobileContainer.appendChild(mobileProjects);

mobileProjects.addEventListener('click', function () {
  let headerOffset = 80;
  let elementPosition = projectsTitle.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  //   links.classList.toggle('clicked');
  mobileButton.classList.toggle('clicked');
  mobileContainer.classList.toggle('active');
  mobileHome.classList.toggle('active');
  mobileAbout.classList.toggle('active');
  mobileProjects.classList.toggle('active');
  mobileContact.classList.toggle('active');
});

let mobileContact = document.createElement('button');
mobileContact.setAttribute('id', 'mobile-contact-button');
mobileContact.classList.add('mobile-buttons');
mobileContact.classList.add('mobile');
mobileContact.innerHTML = 'Contact';
mobileContainer.appendChild(mobileContact);

mobileContact.addEventListener('click', function () {
  let headerOffset = 80;
  let elementPosition = contactTitle.getBoundingClientRect().top;
  let offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
  //   links.classList.toggle('clicked');
  mobileButton.classList.toggle('clicked');
  mobileContainer.classList.toggle('active');
  mobileHome.classList.toggle('active');
  mobileAbout.classList.toggle('active');
  mobileProjects.classList.toggle('active');
  mobileContact.classList.toggle('active');
});
