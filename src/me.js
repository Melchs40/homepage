export let me = document.createElement('div');
me.setAttribute('id', 'me-container');

let meBackground = document.createElement('div');
meBackground.setAttribute('id', 'me-background');

let meBackgroundImage = document.createElement('img');
meBackgroundImage.setAttribute('id', 'me-background-image');
meBackgroundImage.src = '../images/pexels-hngstrm-1939485.jpg';

let firstName = document.createElement('h1');
firstName.classList.add('main-text');
firstName.setAttribute('id', 'first-name');
firstName.innerHTML = 'Samuel';

let lastName = document.createElement('h1');
lastName.classList.add('main-text');
lastName.setAttribute('id', 'last-name');
lastName.innerHTML = 'Melchior';

let firstTitle = document.createElement('h1');
firstTitle.classList.add('main-text');
firstTitle.setAttribute('id', 'first-title');
firstTitle.innerHTML = 'Web';

let lastTitle = document.createElement('h1');
lastTitle.classList.add('main-text');
lastTitle.setAttribute('id', 'last-title');
lastTitle.innerHTML = 'Developer';

let names = [];
names.push(firstName, lastName, firstTitle, lastTitle);

me.appendChild(meBackground);
meBackground.appendChild(meBackgroundImage);
me.appendChild(firstName);
me.appendChild(lastName);
me.appendChild(firstTitle);
me.appendChild(lastTitle);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('main-text-transition');
      return;
    }

    entry.target.classList.remove('main-text-transition');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  names.forEach((name) => observer.observe(name));
});
