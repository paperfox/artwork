export function modal(currentPageArtwork, arts) {
  const openEls = document.querySelectorAll('[data-open]');
  const closeEls = document.querySelectorAll('[data-close]');
  const modalContainer = document.getElementById('art-modal');
  const isVisible = 'is-visible';

  const closeModal = () => document.querySelector('.modal.is-visible').classList.remove(isVisible);

  for (const [i, el] of openEls.entries()) {
    const artwork = i + currentPageArtwork;

    el.addEventListener('click', () => {
      closeEls[0].focus();
      modalContainer.classList.add(isVisible);
      modalContainer.querySelector('.modal-title').textContent = arts[artwork].title;
      modalContainer.querySelector('.modal-content').innerHTML = `
        <div>
          <img src="art/${arts[artwork].link}" alt="${arts[artwork].title}: ${arts[artwork].desc}" />
        </div>
        <div>
          <p>${arts[artwork].date}</p>
          <p>${arts[artwork].media}</p>
          <p>${arts[artwork].desc}</p>
          <p>any relevant links</p>
          ${arts[artwork].hasOwnProperty('additionalImages') === true ? `<p>Additional images</p>` : ''}
        </div>
      `;
    });
  }

  for (const el of closeEls) {
    el.addEventListener('click', function () {
      modalContainer.classList.remove(isVisible);
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
