import './style.css';
import { displayArt } from './displayArt.js';
import { leftRail } from './leftRail.js';
import data from './artData.json';

// To Do
// Add all art data
// add ability to click on an art piece to view it bigger and with more info
// add filtering
// add pagination

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

// openTab();
// Left rail
leftRail();
// Main
displayArt(data);

// const containerPaginationResults = document.querySelector('.paginaton-content');

// let results = data;
// const resultsPerPage = 10;
// let newPage = document.createElement('div');
// newPage.classList.add(`page-content`);

// export function pagination(evt, pageName) {
//   const pageContent = document.getElementsByClassName('page-content');
//   const pageControl = document.getElementsByClassName('page-control');

//   for (let i = 0; i < pageContent.length; i++) {
//     pageContent[i].className = pageContent[i].className.replace(' active', '');
//     pageControl[i].className = pageControl[i].className.replace(' active', '');
//   }

//   document.getElementById(pageName).className += ' active';
//   evt.currentTarget.className += ' active';
// }
// // window.openTab = pagination;

// for (let i = 0; i < results.length; i += resultsPerPage) {
//   let pageResults = results.slice(i, i + resultsPerPage);
//   console.log(pageResults);
//   let newPage = document.createElement('div');
//   // let newPageContent = document.createElement('div');
//   // let newPage = document.getElementsByClassName('.paginaton-content').appendChild(newPageContent);
//   newPage.classList.add(`page-${i}`);

//   let formatted = [];

//   //   Append the results to the new page
//   pageResults.forEach((art, i) => {
//     // let html = `<div class="item-${i}">
//     //   <p>${res.title}</p>
//     //   <p>${res.desc}</p>
//     //   <p>${res.dimensions}</p>
//     // </div>`;

//     let html = `<div class="artpiece" id="item-${i}">
//           <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
//         </div>`;

//     // containerPaginationResults.insertAdjacentHTML('afterbegin', html)
//     // console.log(html)
//     formatted.push(html);
//   });
//   newPage.innerHTML = `
//   <div>${formatted.join('')}</div>
//   `;
//   //   Append the new page to the document body
//   document.body.appendChild(newPage);
//   // console.log(formatted);
//   const owo = `<div class="page'>${newPage.innerHTML}</div>`;
//   console.log(newPage.innerHTML);

//   containerPaginationResults.insertAdjacentHTML('afterbegin', newPage.innerHTML);
// }

// // document.getElementById("myList").appendChild(node);
// function myFunction() {
//   // Create an "li" node:
//   const node = document.createElement('li');

//   // Create a text node:
//   const textnode = document.createTextNode('Water');

//   // Append the text node to the "li" node:
//   node.appendChild(textnode);

//   // Append the "li" node to the list:
//   document.getElementById('myList').appendChild(node);
// }
