import "./style.css";
import { displayArt } from "./displayArt.js";
import { leftRail } from "./leftRail.js";
import data from "./artData.json";

// To Do
// Add all art data
// add ability to click on an art piece to view it bigger and with more info
// add filtering
// add pagination

export function openTab(evt, tabName) {
  const tabContent = document.getElementsByClassName("tab-content");
  const tabLinks = document.getElementsByClassName("tab-control");

  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].className = tabContent[i].className.replace(" active", "");
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).className += " active";
  evt.currentTarget.className += " active";
}
window.openTab = openTab;

// openTab();
// Left rail
leftRail();
// Main
displayArt(data);

//
//
//
//
// pagination stuff maybe??
// let results = data;
// const resultsPerPage = 10;

// for (let i = 0; i < results.length; i += resultsPerPage) {
//   let pageResults = results.slice(i, i + resultsPerPage);

//   // Create a new page or div for each set of results
//   let newPage = document.createElement("div");
//   newPage.classList.add("page");

//   // Append the results to the new page
//   pageResults.forEach((result) => {
//     let resultElement = document.createElement("p");
//     resultElement.textContent = result;
//     newPage.appendChild(resultElement);
//   });

//   // Append the new page to the document body
//   document.body.appendChild(newPage);
// }
