export default function renderCard({
  release_date,
  title,
  genres,
  poster_path,
  id,
  original_title,
  overview,
  popularity,
  vote_average,
  vote_count,
}) {
  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const year = release_date.slice(0, 4);
  return `<li class="gallery-item "data-id="${id}" data-original_title="${original_title}" data-title="${title}" data-genres="${genres}" data-year="${year}" data-poster="${poster}" data-popularity="${popularity}" data-vote="${vote_average}" data-votes="${vote_count}" data-overview="${overview}">
      <img src="${poster}" alt="${title}" class="gallery-item__img" />
        <div class="gallery-item__info">
          <h2 class="gallery-item__title">${title}</h2>
          <p class="gallery-item__text">${genres} | ${year}</p>
        </div>
      </li>`;
}
