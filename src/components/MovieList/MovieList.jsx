import { Link, useLocation } from 'react-router-dom';
import './MovieList.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className="movieList">
      {movies.map(({ id, title }) => {
        return (
          <li className="movieItem" key={id}>
            <Link state={{ from: location }} to={`/movies/${id}`}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
