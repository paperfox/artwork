import './style.css';
import { displayArt } from './displayArt.js';
import { leftRail } from './leftRail.js';
import dataArt from './artData.json';
import dataSketches from './sketchData.json';

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

  // displayArt(dataSketches);
  document.getElementById(tabName).className += ' active';
  evt.currentTarget.className += ' active';
}
window.openTab = openTab;

// Left rail
leftRail();
// Main

const owo2 = document.querySelector('.art-list-sketches');
displayArt(dataSketches, owo2);
const owo = document.querySelector('.art-list');
displayArt(dataArt, owo);
// because I frequently need to know how many art pieces I have I'm leaving this here for now
// console.log(dataArt.length);
