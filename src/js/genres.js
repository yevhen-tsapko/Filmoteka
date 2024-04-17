import fetchData from './movie-api-service';
const genresArray = await fetchData('moviesGenres').then(
  ({ data }) => data.genres
);
const genresObject = {};
genresArray.forEach(genre => {
  genresObject[genre.id] = genre.name;
});
export default function addGenresToMovie(moviesArray) {
  const genresArray = [];
  moviesArray.map(movie => {
    movie.genre_ids.forEach(id => genresArray.push(genresObject[id]));
    if (genresArray.length > 2) {
      genresArray[2] = 'other';
      genresArray.length = 3;
    }
    movie.genres = genresArray.join(', ');
  });
}
