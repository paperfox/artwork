import './style.css';
import { displayArt } from './components/displayArt.js';
import { leftRail } from './components/leftRail.js';
import dataArt from './data/artData.json';
import dataSketches from './data/sketchData.json';
import { filter } from './components/filters.js';

// To Do
// Add all art data
// add filtering

export function openTab(evt, tabName) {
  const tabContent = document.getElementsByClassName('tab-content');
  const tabLinks = document.getElementsByClassName('tab-control');

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].className = tabContent[i].className.replace(' active', '');
    tabLinks[i].className = tabLinks[i].className.replace(' active', '');
  }

  if (tabName === 'sketchTab') {
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
filter(dataArt);
