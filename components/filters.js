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
    { button: btnFilterWatercolor, filterType: 'media', filterValue: 'watercolor' },
    { button: btnFilterInk, filterType: 'media', filterValue: 'ink' },
    { button: btnFilterPrintmaking, filterType: 'media', filterValue: 'printmaking' },
    { button: btnFilterAcrylic, filterType: 'media', filterValue: 'painting' },
    { button: btnFilterAnimal, filterType: 'content', filterValue: 'animal' },
    { button: btnFilterFanart, filterType: 'content', filterValue: 'fanart' },
    { button: btnFilterFantasy, filterType: 'content', filterValue: 'fantasy' },
    { button: btnFilterPeople, filterType: 'content', filterValue: 'people' },
    { button: btnFilterPlant, filterType: 'content', filterValue: 'plant' },
    { button: btnFilterVehicle, filterType: 'content', filterValue: 'vehicle' },
  ];

  const defaultTab = (images) => {
    const finishedWork = document.querySelector('.art-list');
    displayArt(images, finishedWork);
  };

  const applyFilter = (button, filterType, filterValue) => {
    button.addEventListener('click', () => {
      filterButtons.forEach(({ button }) => button.classList.remove('active-filters'));
      button.classList.add('active-filters');

      const filteredData = arts.filter((art) => art[filterType].includes(filterValue));
      defaultTab(filteredData);
    });
  };

  defaultTab(arts);

  filterButtons.forEach(({ button, filterType, filterValue }) => {
    applyFilter(button, filterType, filterValue);
  });
}
