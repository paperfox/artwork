export function displayArt(arts) {
  const artList = document.querySelector('.art-list');
  const first = document.querySelector('.first');
  const prev = document.querySelector('.previous');
  const next = document.querySelector('.next');
  const last = document.querySelector('.last');

  let arrayList = [];
  let page = 0;
  const paginationValue = 15;

  const pageCount = Math.ceil(arts.length / paginationValue);
  console.log(pageCount);

  const paginator = () => {
    artList.innerHTML = '';
    for (let i = page; i < page + paginationValue; i++) {
      artList.appendChild(arrayList[i]);
    }
  };

  arts.forEach((art, i) => {
    let li = document.createElement('li');
    li.innerHTML = `
      <div class="artpiece-${i}">
        <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
        <p>${i}</p>
      </div>`;
    arrayList.push(li);
  });

  for (let i = 0; i < page + paginationValue; i++) {
    artList.appendChild(arrayList[i]);
  }

  next.addEventListener('click', function () {
page === arrayList.length - paginationValue ? (page = arrayList.length - paginationValue) : (page+= paginationValue)
    paginator();
  });

  prev.addEventListener('click', function () {
    page <= 0 ? (page = 0) : (page -= paginationValue);
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
}
