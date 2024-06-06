import Battleship from '../images/Battleship-Image.png';
import Weather from '../images/Weather-App-Image.png';
import ToDo from '../images/Todo-Image.png';
import Restaurant from '../images/Restaurant-Page-Image.png';
import Library from '../images/Library-Image.png';

export let projects = document.createElement('div');
projects.setAttribute('id', 'projects');

let projectsContainer = document.createElement('div');
projectsContainer.setAttribute('id', 'projects-container');
projects.appendChild(projectsContainer);

export let projectsTitle = document.createElement('h1');
projectsTitle.classList.add('projects-title');
projectsTitle.innerHTML = 'Projects.';
projectsContainer.appendChild(projectsTitle);

let projectsDisclosure = document.createElement('h1');
projectsDisclosure.classList.add('projects-disclosure');
projectsDisclosure.innerHTML =
  'Here are five of the projects I have done as part of The Odin Project curriculum. Please note that they are in a descending chronological order and some of the earlier ones may not have as much functionality or be as responsive as the more recent ones.';
projectsContainer.appendChild(projectsDisclosure);

//battleship project

let battleshipContainer = document.createElement('div');
battleshipContainer.setAttribute('id', 'battleship-container');
battleshipContainer.classList.add('project-container-odd');
projectsContainer.appendChild(battleshipContainer);

let battleshipTitle = document.createElement('h2');
battleshipTitle.classList.add('project-title-odd');
battleshipTitle.innerHTML = '1. Battleship';
battleshipContainer.appendChild(battleshipTitle);

let battleshipPara = document.createElement('p');
battleshipPara.classList.add('project-para-odd');
battleshipPara.innerHTML =
  'This project allows for the user to play the classic boardgame against a smart AI opponent. Players can select where to place their ships on the board and click wherever on the AI board to attack. It features additional animation in the form of a persistant radar background and a variety of responses for hits, misses, sinking of ships, wins, and losses. Additionally, a mobile version of the webpage was created that eliminates most animation and allows for a better user experience on smaller devices.';
battleshipContainer.appendChild(battleshipPara);

let battleshipSource = document.createElement('a');
battleshipSource.classList.add('project-source-odd');
battleshipSource.innerHTML = 'Github ';
battleshipSource.href = 'https://github.com/Melchs40/battleship';
battleshipSource.target = '_blank';
battleshipContainer.appendChild(battleshipSource);

let battleshipLive = document.createElement('a');
battleshipLive.classList.add('project-live-odd');
battleshipLive.innerHTML = 'Live ';
battleshipLive.href = 'https://melchs40.github.io/battleship';
battleshipLive.target = '_blank';
battleshipContainer.appendChild(battleshipLive);

let battleshipTech = document.createElement('p');
battleshipTech.classList.add('project-tech-odd');
battleshipTech.innerHTML =
  '<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.';
battleshipContainer.appendChild(battleshipTech);

let battleshipImCon = document.createElement('div');
battleshipImCon.classList.add('project-image-container-odd');
battleshipContainer.appendChild(battleshipImCon);

let battleshipImage = document.createElement('img');
battleshipImage.setAttribute('id', 'battleship-image');
battleshipImage.classList.add('project-image-odd');
battleshipImage.src = Battleship;
battleshipImCon.appendChild(battleshipImage);

let battleshipBorder = document.createElement('div');
battleshipBorder.classList.add('project-bottom-border');
projectsContainer.appendChild(battleshipBorder);

//weather app project

let weatherAppContainer = document.createElement('div');
weatherAppContainer.setAttribute('id', 'weather-app-container');
weatherAppContainer.classList.add('project-container-even');
projectsContainer.appendChild(weatherAppContainer);

let weatherAppTitle = document.createElement('h2');
weatherAppTitle.classList.add('project-title-even');
weatherAppTitle.innerHTML = '2. Weather App';
weatherAppContainer.appendChild(weatherAppTitle);

let weatherappPara = document.createElement('p');
weatherappPara.classList.add('project-para-even');
weatherappPara.innerHTML =
  'QuickWeather is a project that accesses Weather API through fetch requests to show the user the current conditions as well as future conditions for the next two days. An easy to use application designed with minimal bells and whistles to get users the weather they want quickly. The only animation that occurs is a shuffle when the page is loading the weather of a new city.';
weatherAppContainer.appendChild(weatherappPara);

let weatherAppSource = document.createElement('a');
weatherAppSource.classList.add('project-source-even');
weatherAppSource.innerHTML = 'Github ';
weatherAppSource.href = 'https://github.com/Melchs40/weather-app';
weatherAppSource.target = '_blank';
weatherAppContainer.appendChild(weatherAppSource);

let weatherAppLive = document.createElement('a');
weatherAppLive.classList.add('project-live-even');
weatherAppLive.innerHTML = 'Live ';
weatherAppLive.href = 'https://melchs40.github.io/weather-app';
weatherAppLive.target = '_blank';
weatherAppContainer.appendChild(weatherAppLive);

let weatherAppTech = document.createElement('p');
weatherAppTech.classList.add('project-tech-even');
weatherAppTech.innerHTML =
  '<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Webpack, WeatherAPI.';
weatherAppContainer.appendChild(weatherAppTech);

let weatherAppImCon = document.createElement('div');
weatherAppImCon.classList.add('project-image-container-even');
weatherAppContainer.appendChild(weatherAppImCon);

let weatherAppImage = document.createElement('img');
weatherAppImage.setAttribute('id', 'weather-app-image');
weatherAppImage.classList.add('project-image-even');
weatherAppImage.src = Weather;
weatherAppImCon.appendChild(weatherAppImage);

let weatherAppBorder = document.createElement('div');
weatherAppBorder.classList.add('project-bottom-border');
projectsContainer.appendChild(weatherAppBorder);

//to-do list project

let todoContainer = document.createElement('div');
todoContainer.setAttribute('id', 'todo-container');
todoContainer.classList.add('project-container-odd');
projectsContainer.appendChild(todoContainer);

let todoTitle = document.createElement('h2');
todoTitle.classList.add('project-title-odd');
todoTitle.innerHTML = '3. To-Do List';
todoContainer.appendChild(todoTitle);

let todoPara = document.createElement('p');
todoPara.classList.add('project-para-odd');
todoPara.innerHTML =
  'The To-Do List lets the user create lists for specific projects and then add in individual items. When adding to-dos to a project, one can add in the title, a more detailed description, a due date, and whether or it is important. After being added it can be edited or discarded and can be marked as completed which will gray it out. The user can also sort to-do items regardless of project by all tasks, if an item is due that day or that week, and if it is marked as important. All items are stored locally within each individual web browser.';
todoContainer.appendChild(todoPara);

let todoSource = document.createElement('a');
todoSource.classList.add('project-source-odd');
todoSource.innerHTML = 'Github ';
todoSource.href = 'https://github.com/Melchs40/to-do-list';
todoSource.target = '_blank';
todoContainer.appendChild(todoSource);

let todoLive = document.createElement('a');
todoLive.classList.add('project-live-odd');
todoLive.innerHTML = 'Live ';
todoLive.href = 'https://melchs40.github.io/to-do-list';
todoLive.target = '_blank';
todoContainer.appendChild(todoLive);

let todoTech = document.createElement('p');
todoTech.classList.add('project-tech-odd');
todoTech.innerHTML =
  '<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.';
todoContainer.appendChild(todoTech);

let todoImCon = document.createElement('div');
todoImCon.classList.add('project-image-container-odd');
todoContainer.appendChild(todoImCon);

let todoImage = document.createElement('img');
todoImage.setAttribute('id', 'todo-image');
todoImage.classList.add('project-image-odd');
todoImage.src = ToDo;
todoImCon.appendChild(todoImage);

let todoBorder = document.createElement('div');
todoBorder.classList.add('project-bottom-border');
projectsContainer.appendChild(todoBorder);

//restaurant project

let restaurantContainer = document.createElement('div');
restaurantContainer.setAttribute('id', 'restaurant-container');
restaurantContainer.classList.add('project-container-even');
projectsContainer.appendChild(restaurantContainer);

let restaurantTitle = document.createElement('h2');
restaurantTitle.classList.add('project-title-even');
restaurantTitle.innerHTML = '4. Restaurant Page';
restaurantContainer.appendChild(restaurantTitle);

let restaurantPara = document.createElement('p');
restaurantPara.classList.add('project-para-even');
restaurantPara.innerHTML =
  'This project is a business webpage with different pages built within it. There is a main introductory splash page featuring information about the business as well as the company logo. Different modules were created for additional pages with buttons for them in the nav bar. These buttons include links to new pages which are for their products and specials, an events page, a contact us form (disabled on this example page), and one button that brings the user back to the home page.';
restaurantContainer.appendChild(restaurantPara);

let restaurantSource = document.createElement('a');
restaurantSource.classList.add('project-source-even');
restaurantSource.innerHTML = 'Github ';
restaurantSource.href = 'https://github.com/Melchs40/restaurant-page';
restaurantSource.target = '_blank';
restaurantContainer.appendChild(restaurantSource);

let restaurantLive = document.createElement('a');
restaurantLive.classList.add('project-live-even');
restaurantLive.innerHTML = 'Live ';
restaurantLive.href = 'https://melchs40.github.io/restaurant-page';
restaurantLive.target = '_blank';
restaurantContainer.appendChild(restaurantLive);

let restaurantTech = document.createElement('p');
restaurantTech.classList.add('project-tech-even');
restaurantTech.innerHTML =
  '<b>Tech Stack:</b> HTML, CSS, SASS, Javascript, npm, Jest, Webpack.';
restaurantContainer.appendChild(restaurantTech);

let restaurantImCon = document.createElement('div');
restaurantImCon.classList.add('project-image-container-even');
restaurantContainer.appendChild(restaurantImCon);

let restaurantImage = document.createElement('img');
restaurantImage.setAttribute('id', 'restaurant-page-image');
restaurantImage.classList.add('project-image-even');
restaurantImage.src = Restaurant;
restaurantImCon.appendChild(restaurantImage);

let restaurantBorder = document.createElement('div');
restaurantBorder.classList.add('project-bottom-border');
projectsContainer.appendChild(restaurantBorder);

//library project

let libraryContainer = document.createElement('div');
libraryContainer.setAttribute('id', 'library-container');
libraryContainer.classList.add('project-container-odd');
projectsContainer.appendChild(libraryContainer);

let libraryTitle = document.createElement('h2');
libraryTitle.classList.add('project-title-odd');
libraryTitle.innerHTML = '5. Book Library';
libraryContainer.appendChild(libraryTitle);

let libraryPara = document.createElement('p');
libraryPara.classList.add('project-para-odd');
libraryPara.innerHTML =
  "My Book Library is an application that allows for users to add both books they have read and ones they haven't. It features a basic form for adding the author's name, the title of the book, whether or not they have read the book, and a rating slide bar from 1-5. The book name is the only required input and the author will default to unknown when the user has left that field blank. The read/not read status can be changed after the fact. A modal box will be enabled that alerts the user to rate the book when changed to read and the rating automatically be removed when not read is chosen.";
libraryContainer.appendChild(libraryPara);

let librarySource = document.createElement('a');
librarySource.classList.add('project-source-odd');
librarySource.innerHTML = 'Github ';
librarySource.href = 'https://github.com/Melchs40/library';
librarySource.target = '_blank';
libraryContainer.appendChild(librarySource);

let libraryLive = document.createElement('a');
libraryLive.classList.add('project-live-odd');
libraryLive.innerHTML = 'Live ';
libraryLive.href = 'https://melchs40.github.io/library';
libraryLive.target = '_blank';
libraryContainer.appendChild(libraryLive);

let libraryTech = document.createElement('p');
libraryTech.classList.add('project-tech-odd');
libraryTech.innerHTML = '<b>Tech Stack:</b> HTML, CSS, Javascript.';
libraryContainer.appendChild(libraryTech);

let libraryImCon = document.createElement('div');
libraryImCon.classList.add('project-image-container-odd');
libraryContainer.appendChild(libraryImCon);

let libraryImage = document.createElement('img');
libraryImage.setAttribute('id', 'library-image');
libraryImage.classList.add('project-image-odd');
libraryImage.src = Library;
libraryImCon.appendChild(libraryImage);
