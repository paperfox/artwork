export function modal(currentPageArtwork, arts) {
  const openEls = document.querySelectorAll('[data-open]');
  const closeEls = document.querySelectorAll('[data-close]');
  const modalContainer = document.getElementById('art-modal');
  const isVisible = 'is-visible';

  const closeModal = () => {
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
    document.body.classList.remove('no-scroll');
  };

  for (const [i, el] of openEls.entries()) {
    const artwork = i + currentPageArtwork;

    el.addEventListener('click', () => {
      closeEls[0].focus();
      modalContainer.classList.add(isVisible);
      document.body.classList.add('no-scroll');
      modalContainer.querySelector('.modal-title').textContent = arts[artwork].title;
      modalContainer.querySelector('.modal-content').innerHTML = `
        <p>${arts[artwork].date}  |  Media: ${arts[artwork].media.join(', ')}</p>
        <div>
          <img src="art/${arts[artwork].link}" alt="${arts[artwork].title}: ${arts[artwork].desc}" />
        </div>
      `;
    });
  }

  for (const el of closeEls) {
    el.addEventListener('click', function () {
      modalContainer.classList.remove(isVisible);
      document.body.classList.remove('no-scroll');
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
