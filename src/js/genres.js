import fetchData from './movie-api-service';
const genresArray = await fetchData('moviesGenres').then(
  ({ data }) => data.genres
);
const genresObject = {};
genresArray.forEach(genre => {
  genresObject[genre.id] = genre.name;
});
export default function addGenresToMovie(moviesArray) {
  moviesArray.map(movie => {
    movie.genres = [];
    movie.genre_ids.forEach(id => movie.genres.push(genresObject[id]));
    if (movie.genres.length > 2) {
      movie.genres[2] = 'other';
      movie.genres.length = 3;
    }
  });
}
