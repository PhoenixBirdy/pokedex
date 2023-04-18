import { useEffect, useState } from 'react';
import styles from './GridElement.module.css';

export const GridElement = ({ cardName, url }) => {
  const [info, setInfo] = useState({});

  const handleShowInfo = () => {
    console.log('showInfo');
  };

  useEffect(() => {
    async function takeInfo() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        const profileInformation = {
          profile: {
            abilities: data.abilities.map(slot => slot.ability.name),
            height: data.height,
            weight: data.weight,
            type: data.types[0].type.name,
          },
          pictureUrl: data.sprites.other.dream_world.front_default,
          stats: {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            sp_atk: data.stats[3].base_stat,
            sp_def: data.stats[4].base_stat,
            speed: data.stats[5].base_stat,
          },
        };

        setInfo(profileInformation);
      } catch (error) {
        console.error(error);
      }
    }

    takeInfo();
  }, []);

  return (
    <div className={styles.gridElement} onClick={handleShowInfo}>
      <div className={styles.pictureWrapper}>
        <img
          className={styles.picture}
          src={info.pictureUrl}
          alt={`${cardName}`}
        ></img>
      </div>
      <div className={styles.naming}>{cardName}</div>
    </div>
  );
};
