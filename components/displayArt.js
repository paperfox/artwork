import { modal } from './modal.js';

export function displayArt(arts, location) {
  const artList = location;
  const first = document.querySelector('.first');
  const prev = document.querySelector('.previous');
  const next = document.querySelector('.next');
  const last = document.querySelector('.last');
  const mainCont = document.querySelector('.main');

  let arrayList = [];
  let page = 0;
  const paginationValue = 15;
  let currentPage = 1;
  let currentPageArtwork = 0;

  const pageCount = Math.ceil(arts.length / paginationValue);

  document.querySelector('.page-total').textContent = `${currentPage} of ${pageCount}`;

  const paginator = () => {
    artList.innerHTML = '';

    for (let i = page; i < page + paginationValue && i < arrayList.length; i++) {
      artList.appendChild(arrayList[i]);
    }

    const pageCount = Math.ceil(arrayList.length / paginationValue);
    currentPage = Math.ceil(page / paginationValue) + 1;
    document.querySelector('.page-total').textContent = `${currentPage} of ${pageCount}`;
    currentPageArtwork = (currentPage - 1) * paginationValue;

    mainCont.scrollTo(0, 0);
    modal(currentPageArtwork, arts);
  };

  arts.forEach((art, i) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <div class="artpiece-${i}">
        <img src="/art/${art.link}" alt="${art.title}: ${art.desc}" />
        <button type="button" class="open-modal" data-open="modal${i + 1}">${art.title}</button></div>
      </div>`;
    arrayList.push(li);
  });

  // On load
  paginator();

  next.addEventListener('click', function () {
    if (page + paginationValue < arrayList.length) {
      page += paginationValue;
      paginator();
    }
  });

  prev.addEventListener('click', function () {
    if (page - paginationValue >= 0) {
      page -= paginationValue;
      paginator();
    }
  });

  first.addEventListener('click', function () {
    page = 0;
    paginator();
  });

  last.addEventListener('click', function () {
    page = Math.max(0, arrayList.length - paginationValue);
    paginator();
  });
}
