import './style.css';
import { displayArt } from './displayArt.js';
import { leftRail } from './leftRail.js';
import data from './artData.json';

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

  document.getElementById(tabName).className += ' active';
  evt.currentTarget.className += ' active';
}
window.openTab = openTab;

// Left rail
leftRail();
// Main
displayArt(data);

console.log(data.length);
