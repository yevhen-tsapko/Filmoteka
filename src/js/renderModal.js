import Refs from './refs';
const { backdrop, modal, modalCloseBtn } = Refs();
let movieDatas;
export default function renderModal(evt) {
  if (evt.target.nodeName === 'UL') {
    return;
  }
  // Datas for modal rendering
  movieDatas = evt.target.closest('.gallery-item').dataset;
  // const movies = { ...movieDatas };
  const {
    year,
    title,
    genres,
    poster,
    id,
    original_title,
    overview,
    popularity,
    vote,
    votes,
  } = movieDatas;
  // console.log(isInLibrary('watched', id));
  // console.log('movies', movies);
  // console.log('movieDatas', movieDatas);
  const watchedBtn = isInLibrary('watched', id)
    ? `<button class="modal__button" id="watched" data-action="del" type="button">
      delete from watched
    </button>`
    : `<button class="modal__button" id="watched" data-action="add" type="button">
      add to watched
    </button>`;
  const queueBtn = isInLibrary('queue', id)
    ? `<button class="modal__button" id="queue" data-action="del" type="button">
      delete from queue
    </button>`
    : `<button class="modal__button" id="queue" data-action="add" type="button">
      add to queue
    </button>`;

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
      <div class="modal__buttons" >
    ${watchedBtn}
    ${queueBtn}
    
    </div>
        </div>`;

  const { queueButton, watchedButton } = Refs();

  modalCloseBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModalOnBackdrop);
  watchedButton.addEventListener('click', addDelMovie);
  queueButton.addEventListener('click', addDelMovie);

  backdrop.classList.add('open');
}
function isInLibrary(key, id) {
  const movieArray = JSON.parse(localStorage.getItem(key)) || [];
  return movieArray.some(movie => movie.id === id);
}
function closeModal() {
  const { queueButton, watchedButton } = Refs();
  backdrop.classList.remove('open');
  modalCloseBtn.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModalOnBackdrop);
  watchedButton.removeEventListener('click', addDelMovie);
  queueButton.removeEventListener('click', addDelMovie);
}
function addDelMovie() {
  console.log('thisaction', this.dataset.action);
  switch (this.dataset.action) {
    case 'add':
      addMovie(this);
      break;
    case 'del':
      delMovie(this);
      break;
  }
}
function closeModalOnBackdrop(evt) {
  if (evt.currentTarget === evt.target) {
    closeModal();
  }
}
function addMovie(elem) {
  const key = elem.id;
  const movieArray = JSON.parse(localStorage.getItem(key)) || [];
  movieArray.push(movieDatas);
  localStorage.setItem(key, JSON.stringify(movieArray));
  elem.textContent = `delete from ${key}`;
  elem.setAttribute('data-action', 'del');
}
function delMovie(elem) {
  const key = elem.id;
  const movieArray = JSON.parse(localStorage.getItem(key)) || [];
  const newMovieArray = movieArray.filter(({ id }) => id != movieDatas.id);
  localStorage.setItem(key, JSON.stringify(newMovieArray));
  elem.textContent = `add to ${key}`;
  elem.setAttribute('data-action', 'add');
}
