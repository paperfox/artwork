// export function displayArt(arts) {
//   const containerArt = document.querySelector('.artwork');

//   arts.forEach((art, i) => {
//     // const div = document.createElement("div");
//     const html = `
//         <div class="artpiece-${i}">
//           <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
//         </div>`;
//     // document.querySelector(".artwork").appendChild(div);
//     containerArt.insertAdjacentHTML('beforeend', html);
//   });
// }


export function displayArt(arts) {
  const containerArt = document.querySelector('.artwork');
  
  const artList = document.querySelector('.art-list')
  const first = document.querySelector('.first')
  const prev = document.querySelector('.previous')
  const next = document.querySelector('.next')
  const last = document.querySelector('.last')

  let arrayList = []
  let page = 0;

  arts.forEach((art, i) => {
    // const html = `
    //     <div class="artpiece-${i}">
    //       <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
    //     </div>`;
    // containerArt.insertAdjacentHTML('beforeend', html);
    for (let i = 1; i <= 100; i++) {
      let li = document.createElement('li');
      li.innerHTML = `<div><strong>List item ${i}</strong></div>
      <div>testing hello</div>`
      arrayList.push(li);
    }
  });

  
for (let i = 0; i < page+ 10; i++) {
  artList.appendChild(arrayList[i]);
}

next.addEventListener('click', function() {
  page === arrayList.length - 10 ? (page = 0) : (page+= 10)
  artList.innerHTML = '';
  for (let i = page; i < page+ 10; i++) {
    artList.appendChild(arrayList[i])
  }
});

prev.addEventListener('click', function() {
  page === 0 ? (page = arrayList.length - 10) : (page-= 10)
  artList.innerHTML = '';
  for (let i = page; i < page + 10; i++) {
    artList.appendChild(arrayList[i])
  }
});

first.addEventListener('click', function() {
  page = 0;
  artList.innerHTML = '';
  for (let i = page; i < page + 10; i++) {
    artList.appendChild(arrayList[i])
  }
});

last.addEventListener('click', function() {
  page = arrayList.length - 10
  artList.innerHTML = '';
  for (let i = page; i < page + 10; i++) {
    artList.appendChild(arrayList[i])
  }
});
}




