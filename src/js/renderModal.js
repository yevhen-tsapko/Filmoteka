import Refs from './refs';
const { backdrop, modal, modalClose } = Refs;
// console.log('modalClose', modalClose, Refs);
export default function renderModal(evt) {
  if (evt.target.nodeName === 'UL') {
    return;
  }
  // Datas for modal rendering
  const movieDatas = evt.target.closest('.gallery-item').dataset;
  const {
    year,
    title,
    genres,
    poster,
    // id,
    original_title,
    overview,
    popularity,
    vote,
    votes,
  } = movieDatas;

  // console.log('movie-data', movieDatas);
  modal.innerHTML = `          <img src="${poster}" alt="${title}" class="modal__img" />
          <div class="modal__about">
          <h2 class="modal__title">${title}</h2>
          <div class="modal__info">
     <div class="modal__info-item">
       <p class="modal__info-item-name">Vote / Votes</p>
      <p class="modal__info-item-value"><span class="modal__vote">${Number(
        vote
      ).toFixed(1)}</span> / ${votes}</p>
     </div>
     <div class="modal__info-item">
     <p class="modal__info-item-name">Popularity</p>
      <p class="modal__info-item-value">${Number(popularity).toFixed(1)}</p>
     </div>
     <div class="modal__info-item">
     <p class="modal__info-item-name">Original Title</p>
      <p class="modal__info-item-value">${original_title.toUpperCase()}</p>
     </div>
     <div class="modal__info-item">
       <p class="modal__info-item-name">Genre</p>
      <p class="modal__info-item-value">${genres}</p>
     </div>
     
     </div>
    <div class="modal__overview">
    <h3 class="modal__about-title">about</h3>
    <p class="modal__about-text">${overview}
    </p>
    </div>
    <div class="modal__buttons">
    <button class="modal__button" type="button">add to Watched</button>
    <button class="modal__button" type="button">add to queue</button>
    </div>
    </div>`;

  backdrop.classList.add('open');

  modalClose.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModalOnBackdrop);
}

function closeModal() {
  backdrop.classList.remove('open');
  modalClose.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModalOnBackdrop);
}
function closeModalOnBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}
