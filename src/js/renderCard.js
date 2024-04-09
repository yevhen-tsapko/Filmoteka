export default function renderCard({
  release_date,
  title,
  genres,
  poster_path,
}) {
  const fullPoster_path = `	https://image.tmdb.org/t/p/w500${poster_path}`;
  const date = release_date.slice(0, 4);
  return `<li class="gallery-item">
      <img src="${fullPoster_path}" alt="${title}" class="gallery-item__img" />
        <div class="gallery-item__info">
          <h2 class="gallery-item__title">${title}</h2>
          <p class="gallery-item__text">${genres.join(', ')} | ${date}</p>
        </div>
      </li>`;
}
