export function displayArt(arts) {
  const containerArt = document.querySelector('.artwork');

  arts.forEach((art, i) => {
    // const div = document.createElement("div");
    const html = `
        <div class="artpiece-${i}">
          <img src="art/${art.link}" alt="${art.title}: ${art.desc}" />
        </div>`;
    // document.querySelector(".artwork").appendChild(div);
    containerArt.insertAdjacentHTML('beforeend', html);
  });
}
