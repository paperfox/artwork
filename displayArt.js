export function displayArt(arts) {
  const artList = document.querySelector('.art-list');
  const first = document.querySelector('.first');
  const prev = document.querySelector('.previous');
  const next = document.querySelector('.next');
  const last = document.querySelector('.last');

  let arrayList = [];
  let page = 0;

  arts.forEach((art, i) => {
    let li = document.createElement('li');
    li.innerHTML = `<div class="artpiece-${i}">
              <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
            </div>`;
    arrayList.push(li);
  });

  for (let i = 0; i < page + 10; i++) {
    artList.appendChild(arrayList[i]);
  }

  next.addEventListener('click', function () {
    page <= 0 ? (page += 10) : (page = 0);
    // page <= arrayList.length - 10 ? (page += 10) : (page += 0);
    artList.innerHTML = '';
    for (let i = page; i < page + 10; i++) {
      artList.appendChild(arrayList[i]);
    }
  });

  prev.addEventListener('click', function () {
    page >= 0 ? (page = 0) : (page -= 10);
    artList.innerHTML = '';
    for (let i = page; i < page + 10; i++) {
      artList.appendChild(arrayList[i]);
    }
  });

  first.addEventListener('click', function () {
    page = 0;
    artList.innerHTML = '';
    for (let i = page; i < page + 10; i++) {
      artList.appendChild(arrayList[i]);
    }
  });

  last.addEventListener('click', function () {
    page = arrayList.length - 10;
    artList.innerHTML = '';
    for (let i = page; i < page + 10; i++) {
      artList.appendChild(arrayList[i]);
    }
  });
}
