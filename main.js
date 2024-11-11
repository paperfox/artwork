import './style.css';
import { displayArt } from './components/displayArt.js';
import { leftRail } from './components/leftRail.js';
import dataArt from './data/artData.json';
import dataSketches from './data/sketchData.json';

// To Do
// Add all art data
// add filtering

const defaultTab = (images) => {
  const finishedWork = document.querySelector('.art-list');
  displayArt(images, finishedWork);
};

export function openTab(evt, tabName) {
  const tabContent = document.getElementsByClassName('tab-content');
  const tabLinks = document.getElementsByClassName('tab-control');

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].className = tabContent[i].className.replace(' active', '');
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  if (tabName === 'artTab') {
    defaultTab();
  } else {
    const sketches = document.querySelector('.art-list-sketches');
    displayArt(dataSketches, sketches);
  }

  document.getElementById(tabName).className += ' active';
  evt.currentTarget.className += ' active';
}
window.openTab = openTab;

// Left rail
leftRail();

// Main
defaultTab(dataArt);

//
// because I frequently need to know how many art pieces I have I'm leaving this here for now
// console.log(dataArt.length);

// filters - need to loop through all filter possibilities here
// why can I access the original list if I keep hitting next?
const activeFilters = document.querySelectorAll('.active-filters');
const btnFilterWatercolor = document.querySelector('#filter-watercolor');
const btnFilterInk = document.querySelector('#filter-ink');
const btnFilterPrintmaking = document.querySelector('#filter-printmaking');
const btnFilterAcrylic = document.querySelector('#filter-acrylic');

const btnFilterAnimal = document.querySelector('#filter-animals');
const btnFilterFanart = document.querySelector('#filter-fanart');
const btnFilterFantasy = document.querySelector('#filter-fantasy');
const btnFilterPeople = document.querySelector('#filter-people');
const btnFilterPlant = document.querySelector('#filter-plants');
const btnFilterVehicle = document.querySelector('#filter-vehicles');

const filterButtons = [
  btnFilterWatercolor,
  btnFilterInk,
  btnFilterPrintmaking,
  btnFilterAcrylic,
  btnFilterAnimal,
  btnFilterFantasy,
  btnFilterPeople,
  btnFilterPlant,
  btnFilterVehicle,
];

const removeActiveFilters = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.remove('active-filters');
  }
};

const applyFilter = (button, filterType, filterValue) => {
  button.addEventListener('click', () => {
    removeActiveFilters(filterButtons);
    button.classList.add('active-filters');

    const filteredData = dataArt.filter((art) => art[filterType].includes(filterValue));
    defaultTab(filteredData);
  });
};

// Apply filters
applyFilter(btnFilterWatercolor, 'media', 'watercolor');
applyFilter(btnFilterInk, 'media', 'ink');
applyFilter(btnFilterPrintmaking, 'media', 'printmaking');
applyFilter(btnFilterAcrylic, 'media', 'painting');

applyFilter(btnFilterAnimal, 'content', 'animal');
applyFilter(btnFilterFanart, 'content', 'fanart');
applyFilter(btnFilterFantasy, 'content', 'fantasy');
applyFilter(btnFilterPeople, 'content', 'people');
applyFilter(btnFilterPlant, 'content', 'plant');
applyFilter(btnFilterVehicle, 'content', 'vehicle');
