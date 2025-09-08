import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <li key={movie.id} className={css.movieItem}>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={css.movieTitle}
          >
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              className={css.poster}
            />
          </Link>
          <Link
            to={`/movies/${movie.id}`}
            state={location}
            className={css.movieTitle}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
