import { useState, useEffect } from 'react';
import Movie from '../components/Movie';
import styles from './Home.module.css';
import Loading from '../components/Loading';
import Navigation from '../components/Navigation';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`,
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={styles.container}>
      {loading ? (
        Loading()
      ) : (
        <div>
          <div>{Navigation()}</div>
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                mediumCoverImage={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
