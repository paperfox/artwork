import { displayArt } from './displayArt.js';

export function filter(arts) {
  // filters - need to loop through all filter possibilities here
  // why can I access the original list if I keep hitting next?
  const noFilters = document.querySelector('#no-filters');
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
    btnFilterFanart,
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

  const defaultTab = (images) => {
    const finishedWork = document.querySelector('.art-list');
    displayArt(images, finishedWork);
  };

  const applyFilter = (button, filterType, filterValue) => {
    button.addEventListener('click', () => {
      removeActiveFilters(filterButtons);
      button.classList.add('active-filters');

      const filteredData = arts.filter((art) => art[filterType].includes(filterValue));
      defaultTab(filteredData);
    });
  };

  defaultTab(arts);

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
}
