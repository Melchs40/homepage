export let about = document.createElement('div');
about.setAttribute('id', 'about-me');

let aboutContainer = document.createElement('div');
aboutContainer.setAttribute('id', 'about-container');
about.appendChild(aboutContainer);

export let aboutMeTitle = document.createElement('h1');
aboutMeTitle.classList.add('about-me-title');
aboutMeTitle.innerHTML = 'About Me.';
aboutContainer.appendChild(aboutMeTitle);

let aboutMePara = document.createElement('p');
aboutMePara.setAttribute('id', 'about-me-para-1');
aboutMePara.classList.add('about-me-para');
aboutMePara.innerHTML =
  "Hey there, I'm Sam (or Samuel as you may have noticed in the hero above) and I'm a web dev.";
aboutContainer.appendChild(aboutMePara);

let aboutMePara2 = document.createElement('p');
aboutMePara2.classList.add('about-me-para');
aboutMePara2.innerHTML = `I've always enjoyed anything related to computers and had the urge to mess around and create things myself. From building LEGO sets in my youth to building custom PCs as an adult and jailbreaking my iPhone to install custom themes to solving just about any tech issue with my friends and family, I've used my creativity and knowledge of technology in my spare time. Now I've taken this passion and worked to build it into a career. My career in web development.`;
aboutContainer.appendChild(aboutMePara2);

let aboutMePara3 = document.createElement('p');
aboutMePara3.classList.add('about-me-para');
aboutMePara3.innerHTML = `I graduated with high honors and earned a Bachelors Degree in Geography in 2014 and had worked for the United States Postal Service for roughly six years after that, but it didn't feel like my career path was where I wanted it to be. Since late 2022, I've been taking an online full-stack web dev bootcamp known as The Odin Project. I've been able to put to use a wide variety of languages, enviromments, and programs to create a variety of experiences, projects, and webpages. My creativity and problem solving skills are shown throughout the projects section below <i><small>(go on, click the projects button or scroll down. I'll still be here when you get back)</small></i> and on this page itself. I hope you give them a look and have some fun playing around!`;
aboutContainer.appendChild(aboutMePara3);

//list of skills graphics

let skills = document.createElement('div');
skills.setAttribute('id', 'all-skills-container');
about.appendChild(skills);

let htmlContainer = document.createElement('div');
htmlContainer.setAttribute('id', 'html-container');
htmlContainer.classList.add('skill-container');
skills.appendChild(htmlContainer);

let html = document.createElement('img');
html.setAttribute('id', 'html-logo');
html.classList.add('skill-logo');
html.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
html.alt = 'HTML 5 logo';
htmlContainer.appendChild(html);

let htmlLabel = document.createElement('label');
htmlLabel.classList.add('skill-label');
htmlLabel.innerHTML = 'HTML 5';
htmlContainer.appendChild(htmlLabel);

let cssContainer = document.createElement('div');
cssContainer.setAttribute('id', 'css-container');
cssContainer.classList.add('skill-container');
skills.appendChild(cssContainer);

let css = document.createElement('img');
css.setAttribute('id', 'css-logo');
css.classList.add('skill-logo');
css.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg';
css.alt = 'CSS 3 logo';
cssContainer.appendChild(css);

let cssLabel = document.createElement('label');
cssLabel.classList.add('skill-label');
cssLabel.innerHTML = 'CSS 3';
cssContainer.appendChild(cssLabel);

let jsContainer = document.createElement('div');
jsContainer.setAttribute('id', 'js-container');
jsContainer.classList.add('skill-container');
skills.appendChild(jsContainer);

let js = document.createElement('img');
js.setAttribute('id', 'js-logo');
js.classList.add('skill-logo');
js.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
js.alt = 'Javascript logo';
jsContainer.appendChild(js);

let jsLabel = document.createElement('label');
jsLabel.classList.add('skill-label');
jsLabel.innerHTML = 'Javascript';
jsContainer.appendChild(jsLabel);

let sassContainer = document.createElement('div');
sassContainer.setAttribute('id', 'sass-container');
sassContainer.classList.add('skill-container');
skills.appendChild(sassContainer);

let sass = document.createElement('img');
sass.setAttribute('id', 'sass-logo');
sass.classList.add('skill-logo');
sass.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg';
sass.alt = 'Sass logo';
sassContainer.appendChild(sass);

let sassLabel = document.createElement('label');
sassLabel.classList.add('skill-label');
sassLabel.innerHTML = 'Sass';
sassContainer.appendChild(sassLabel);

let gitContainer = document.createElement('div');
gitContainer.setAttribute('id', 'git-container');
gitContainer.classList.add('skill-container');
skills.appendChild(gitContainer);

let git = document.createElement('img');
git.setAttribute('id', 'git-logo');
git.classList.add('skill-logo');
git.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
git.alt = 'Git logo';
gitContainer.appendChild(git);

let gitLabel = document.createElement('label');
gitLabel.classList.add('skill-label');
gitLabel.innerHTML = 'Git';
gitContainer.appendChild(gitLabel);

let githubContainer = document.createElement('div');
githubContainer.setAttribute('id', 'github-container');
githubContainer.classList.add('skill-container');
skills.appendChild(githubContainer);

let github = document.createElement('img');
github.setAttribute('id', 'github-logo');
github.classList.add('skill-logo');
github.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
github.alt = 'Github logo';
githubContainer.appendChild(github);

let githubLabel = document.createElement('label');
githubLabel.classList.add('skill-label');
githubLabel.innerHTML = 'GitHub';
githubContainer.appendChild(githubLabel);

let webpackContainer = document.createElement('div');
webpackContainer.setAttribute('id', 'webpack-container');
webpackContainer.classList.add('skill-container');
skills.appendChild(webpackContainer);

let webpack = document.createElement('img');
webpack.setAttribute('id', 'webpack-logo');
webpack.classList.add('skill-logo');
webpack.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg';
webpack.alt = 'Webpack logo';
webpackContainer.appendChild(webpack);

let webpackLabel = document.createElement('label');
webpackLabel.classList.add('skill-label');
webpackLabel.innerHTML = 'Webpack';
webpackContainer.appendChild(webpackLabel);

let jestContainer = document.createElement('div');
jestContainer.setAttribute('id', 'jest-container');
jestContainer.classList.add('skill-container');
skills.appendChild(jestContainer);

let jest = document.createElement('img');
jest.setAttribute('id', 'jest-logo');
jest.classList.add('skill-logo');
jest.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg';
jest.alt = 'Jest logo';
jestContainer.appendChild(jest);

let jestLabel = document.createElement('label');
jestLabel.classList.add('skill-label');
jestLabel.innerHTML = 'Jest';
jestContainer.appendChild(jestLabel);

let npmContainer = document.createElement('div');
npmContainer.setAttribute('id', 'npm-container');
npmContainer.classList.add('skill-container');
skills.appendChild(npmContainer);

let npm = document.createElement('img');
npm.setAttribute('id', 'npm-logo');
npm.classList.add('skill-logo');
npm.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg';
npm.alt = 'NPM logo';
npmContainer.appendChild(npm);

let npmLabel = document.createElement('label');
npmLabel.classList.add('skill-label');
npmLabel.innerHTML = 'npm';
npmContainer.appendChild(npmLabel);

let nodeContainer = document.createElement('div');
nodeContainer.setAttribute('id', 'node-container');
nodeContainer.classList.add('skill-container');
skills.appendChild(nodeContainer);

let node = document.createElement('img');
node.setAttribute('id', 'node-logo');
node.classList.add('skill-logo');
node.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg';
node.alt = 'Node logo';
nodeContainer.appendChild(node);

let nodeLabel = document.createElement('label');
nodeLabel.classList.add('skill-label');
nodeLabel.innerHTML = 'Node.js';
nodeContainer.appendChild(nodeLabel);

let vsCodeContainer = document.createElement('div');
vsCodeContainer.setAttribute('id', 'vs-code-container');
vsCodeContainer.classList.add('skill-container');
skills.appendChild(vsCodeContainer);

let vsCode = document.createElement('img');
vsCode.setAttribute('id', 'vs-code-logo');
vsCode.classList.add('skill-logo');
vsCode.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg';
vsCode.alt = 'Visual Studio Code logo';
vsCodeContainer.appendChild(vsCode);

let vsCodeLabel = document.createElement('label');
vsCodeLabel.classList.add('skill-label');
vsCodeLabel.innerHTML = 'VS Code';
vsCodeContainer.appendChild(vsCodeLabel);

let xCodeContainer = document.createElement('div');
xCodeContainer.setAttribute('id', 'x-code-container');
xCodeContainer.classList.add('skill-container');
skills.appendChild(xCodeContainer);

let xCode = document.createElement('img');
xCode.setAttribute('id', 'x-code-logo');
xCode.classList.add('skill-logo');
xCode.src =
  'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg';
xCode.alt = 'Visual Studio Code logo';
xCodeContainer.appendChild(xCode);

let xCodeLabel = document.createElement('label');
xCodeLabel.classList.add('skill-label');
xCodeLabel.innerHTML = 'xCode';
xCodeContainer.appendChild(xCodeLabel);
