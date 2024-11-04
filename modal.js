export function modal(currentPageArtwork, arts) {
  const openEls = document.querySelectorAll('[data-open]');
  const closeEls = document.querySelectorAll('[data-close]');
  const isVisible = 'is-visible';
  const closeModal = () => document.querySelector('.modal.is-visible').classList.remove(isVisible);

  for (const [i, el] of openEls.entries()) {
    const owo = i + currentPageArtwork;
    el.addEventListener('click', () => {
      document.getElementById('art-modal').querySelector('.modal-title').textContent = arts[owo].title;
      document.getElementById('art-modal').querySelector('.modal-content').innerHTML = `
        <div>
          <img src="art/${arts[owo].link}" alt="${arts[owo].title}: ${arts[owo].desc}" />
        </div>
        <div>
          <p>${arts[owo].date}</p>
          <p>${arts[owo].media}</p>
          <p>${arts[owo].desc}</p>
          <p>any relevant links</p>
          ${arts[owo].hasOwnProperty('additionalImages') === true ? `<p>Additional images</p>` : ''}
        </div>
      `;
      document.getElementById('art-modal').classList.add(isVisible);
    });
    console.log(owo);
  }

  for (const el of closeEls) {
    el.addEventListener('click', function () {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
    });
  }

  document.addEventListener('click', (e) => {
    if (e.target == document.querySelector('.modal.is-visible')) {
      closeModal();
    }
  });

  document.addEventListener('keyup', (e) => {
    if (e.key == 'Escape' && document.querySelector('.modal.is-visible')) {
      closeModal();
    }
  });
}
