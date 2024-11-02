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




// let results = data;
// const resultsPerPage = 10;

// console.log(results)

// const artList = document.querySelector('.art-list')
// const first = document.querySelector('.first')
// const prev = document.querySelector('.previous')
// const next = document.querySelector('.next')
// const last = document.querySelector('.last')

// // this is setting up the empty array, could be from an api or something
// let arrayList = []
// let page = 0;

// for (let i = 1; i <= 100; i++) {
//   let li = document.createElement('li');
//   li.innerHTML = `<div><strong>List item ${i}</strong></div>
//   <div>testing divs</div>`
//   arrayList.push(li);
// }

// for (let i = 0; i < page+ 10; i++) {
//   artList.appendChild(arrayList[i]);
// }

// next.addEventListener('click', function() {
//   page === arrayList.length - 10 ? (page = 0) : (page+= 10)
//   artList.innerHTML = '';
//   for (let i = page; i < page+ 10; i++) {
//     artList.appendChild(arrayList[i])
//   }
// });

// prev.addEventListener('click', function() {
//   page === 0 ? (page = arrayList.length - 10) : (page-= 10)
//   artList.innerHTML = '';
//   for (let i = page; i < page + 10; i++) {
//     artList.appendChild(arrayList[i])
//   }
// });

// first.addEventListener('click', function() {
//   page = 0;
//   artList.innerHTML = '';
//   for (let i = page; i < page + 10; i++) {
//     artList.appendChild(arrayList[i])
//   }
// });

// last.addEventListener('click', function() {
//   page = arrayList.length - 10
//   artList.innerHTML = '';
//   for (let i = page; i < page + 10; i++) {
//     artList.appendChild(arrayList[i])
//   }
// });