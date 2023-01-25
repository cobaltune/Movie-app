import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Navigation from '../components/Navigation';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, [id]);

  return (
    <div className={styles.container}>
      {loading ? Loading() : <div>{Navigation()}</div>}
    </div>
  );
}

export default Detail;
