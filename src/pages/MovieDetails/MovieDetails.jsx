import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  NavLink,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../Api/Api';
import { Suspense } from 'react';
import '../../components/SharedLayout/SharedLayout.css';
import { getPoster } from '../../Api/getPoster';
import './MovieDetails.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movie = await getMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { genres, overview, vote_average, title, poster_path } = movie;
  const genresList = genres?.map(genre => genre.name).join(', ');
  const userScore = Math.round(vote_average * 10);
  const MovieInfo = { title, poster_path, userScore, overview, genresList };

  return (
    <main className="containerMain">
      <button
        className="homeBtn"
        onClick={() => {
          navigate(location.state?.from ?? '/home');
        }}
      >
        Go back
      </button>
      {movie && <MovieInfo movie={movie} />}
      {movie && (
        <div className="wrapper">
          <img width="250" src={getPoster(poster_path)} alt={title} />
          <div className="details">
            <h2>{title}</h2>
            <p>User Score: {userScore}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h4>Genres</h4>
            <p>{genresList}</p>
          </div>
        </div>
      )}
      <h3>Additional information</h3>
      <div className="wrapper">
        <NavLink className="navLink" to="cast">
          Cast
        </NavLink>
        <NavLink className="navLink" to="reviews">
          Reviews
        </NavLink>
      </div>
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </main>
  );
}
