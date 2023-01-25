import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Movie from '../components/Movie';
import Navigation from '../components/Navigation';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const [genres, setGenres] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setGenres(json.data.movie.genres);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div className={styles.container}>
      {loading ? (
        Loading()
      ) : (
        <div>
          <div>{Navigation()}</div>

          <div className={styles.detail}>
            <div className={styles.poster}>
              <img src={movie.large_cover_image} />
            </div>

            <h1 className={styles.title}>{movie.title}</h1>

            <p className={styles.info}>
              <span>({movie.year}) |</span>
              <span>{movie.runtime}분 |</span>
              <span>{movie.genres}</span>
            </p>

            <p>평점 : ★ {movie.rating}</p>

            <p className={styles.description}>{movie.description_full}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
