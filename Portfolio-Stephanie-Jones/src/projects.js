import quiz from './assets/images/chemQuiz.png'
import jate from './assets/images/jate.png'
import project1 from './assets/images/project1.jpg'
import project2 from './assets/images/project2.png'
import weather from './assets/images/weatherTracker.png'
import work from './assets/images/workDayScheduler.png'

const projects =
  [{
    id: 1,
    title: 'Buy a House with Pure Speculation!',
    summary: `This site enables users to lookup a given property's value in Bitcoin. The project calls two APIs to fetch a home's estimated price and Bitcoin's current exchange rate is USD. The site then returns a Bitcoin amount that a specified address is worth.`,
    image: project1,
    technologies: "Bulma, Coin API, RapidAPI, Zillow, JavaScript",
    deployedLink: 'https://sjones-njones.github.io/Group-Project-1/',
    github: 'https://github.com/sjones-njones/Group-Project-1.git',
  },
  {
    id: 2,
    title: 'Workday scheduler',
    summary: 'This code provides the user with a work day scheduler that changes colors showing the time (past, present, and future) using DayJS to track the current time. It also gives a space for the user to write their tasks for the day and saves it to local storage to be viewed later.',
    image: work,
    technologies: "JavaScript, local Storage, jQuery, Moment.js",
    deployedLink: 'https://sjones-njones.github.io/Work-Day-Scheduler/',
    github: 'https://github.com/sjones-njones/Work-Day-Scheduler.git',
  },
  {
    id: 3,
    title: 'Chemistry Timed Quiz',
    summary: 'This project uses javascript to make a quiz app that uses a set interval function with a varying amount of time left depending on how the questions were answered. This code gives 4 questions and gives the user a set amount of time to answer them. For each wrong answer given, the time left is reduced. At the end of the game, the user is prompted to enter their initials which are then stored in local storage and rendered in a list on the screen.',
    image: quiz,
    technologies: 'JavaScript, local Storage, jQuery',
    deployedLink: 'https://sjones-njones.github.io/Quiz-App/',
    github: 'https://github.com/sjones-njones/Quiz-App',
  },
  {
    id: 6,
    title: 'Weather Tracker App',
    summary: 'This project is a weather app that gives the user an input box to search by city. It saves the last 5 previous searches using local storage. The weather data comes from Open Weather Map API.',
    image: weather,
    technologies: "JavaScript, OpenWeatherMap API, localStorage",
    deployedLink: 'https://sjones-njones.github.io/Weather-Tracker-App/',
    github: 'https://github.com/sjones-njones/Weather-Tracker-App.git',
  },
  {
    id: 4,
    title: 'CookBookmark',
    summary: `CookBookmark is a website created to allow users to search for recipes. In addition to being able to fetch recipes, the user gets the ingredients and instructions so they can make their own version of the meal right at home. The user also has the option to save recipes from the database to their very own recipe book. Therefore having access to all their favorite meal's recipes without having to search and find it through the database. The use also has the option to print the recipe This is possible by a technology named: Gutenberg.`,
    image: project2,
    technologies: "Gutenberg, JavaScript, Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Heroku",
    deployedLink: 'https://vast-badlands-21401-8850fb886623.herokuapp.com/',
    github: 'https://github.com/sjones-njones/Recipe-Book-Group-3-Project-2.git',
  },
  {
    id: 5,
    title: 'JATE: Just Another Text Editor',
    summary: 'JATE is a text editor that runs in the browser. This app is a single-page application meeting the PWA criteria and featuring a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.',
    image: jate,
    technologies: 'IndexedDB API, Heroku, JavaScript',
    deployedLink: 'https://desolate-inlet-24339-93f2a68d0db8.herokuapp.com/',
    github: 'https://github.com/sjones-njones/Challenge-19-PWA-Text-Editor.git',
  },];

  export default projects;