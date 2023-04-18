import { useEffect, useState } from 'react';
import styles from './GridElement.module.css';
import { Link } from 'react-router-dom';

export const GridElement = ({ cardName, url }) => {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function takeInfo() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setInfo({
          pictureUrl: data.sprites.other.dream_world.front_default,
        });
      } catch (error) {
        console.error(error);
      }
    }

    takeInfo();
  }, []);

  return info ? (
    <Link to={`/pokemons/${cardName}`} className={styles.noLinkLine}>
      <div className={styles.gridElement}>
        <div className={styles.pictureWrapper}>
          <img
            className={styles.picture}
            src={info.pictureUrl}
            alt={`${cardName}`}
          ></img>
        </div>
        <div className={styles.naming}>{cardName}</div>
      </div>
    </Link>
  ) : null;
};
