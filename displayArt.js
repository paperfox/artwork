export function displayArt(arts) {
  const artList = document.querySelector('.art-list');
  const first = document.querySelector('.first');
  const prev = document.querySelector('.previous');
  const next = document.querySelector('.next');
  const last = document.querySelector('.last');

  let arrayList = [];
  let page = 0;
  const paginationValue = 15;
  let currentPage = 1;

  const pageCount = Math.ceil(arts.length / paginationValue);

  document.querySelector('.page-total').textContent = `${currentPage} of ${pageCount}`;

  const paginator = () => {
    artList.innerHTML = '';
    let pageValue;
    for (let i = page; i < page + paginationValue; i++) {
      artList.appendChild(arrayList[i]);

      pageValue = Math.ceil(i / paginationValue);
    }

    currentPage = pageValue;
    document.querySelector('.page-total').textContent = `${currentPage} of ${pageCount}`;
  };

  arts.forEach((art, i) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <div class="artpiece-${i}">
        <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
        <button type="button" class="open-modal" data-open="modal${i + 1}">${art.title}</button></div>
      </div>`;
    arrayList.push(li);
  });

  for (let i = 0; i < page + paginationValue; i++) {
    artList.appendChild(arrayList[i]);
  }

  next.addEventListener('click', function () {
    page === arrayList.length - paginationValue
      ? (page = arrayList.length - paginationValue)
      : (page += paginationValue);
    paginator();
  });

  prev.addEventListener('click', function () {
    page === 0 ? (page = 0) : (page -= paginationValue);
    paginator();
  });

  first.addEventListener('click', function () {
    page = 0;
    paginator();
  });

  last.addEventListener('click', function () {
    page = arrayList.length - paginationValue;
    paginator();
  });

  const openEls = document.querySelectorAll('[data-open]');
  const closeEls = document.querySelectorAll('[data-close]');
  const isVisible = 'is-visible';

  for (const [i, el] of openEls.entries()) {
    el.addEventListener('click', () => {
      document.getElementById('modal1').querySelector('.modal-title').textContent = arts[i].title;
      document.getElementById('modal1').querySelector('.modal-content').innerHTML = `
        <div>
          <img src="art/${arts[i].link}" alt="${arts[i].title}: ${arts[i].desc}" />
        </div>
        <div>
          <p>${arts[i].date}</p>
          <p>${arts[i].media}</p>
          <p>${arts[i].desc}</p>
          <p>any relevant links</p>
          <p>Additional images</p>
        </div>
      `;
      document.getElementById('modal1').classList.add(isVisible);
    });
  }
  for (const el of closeEls) {
    el.addEventListener('click', function () {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape' && document.querySelector('.modal.is-visible')) {
      document.querySelector('.modal.is-visible').classList.remove(isVisible);
    }
  });
}
