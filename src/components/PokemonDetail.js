import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './PokemonDetail.module.css';
import { Info } from './Info';

export const PokemonDetail = () => {
  const { name } = useParams();
  const [fullInfo, setFullInfo] = useState(null);
  //const [tab, setTab] = useState(0);

  useEffect(() => {
    async function takeInfo() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        console.log(data);
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

        setFullInfo(profileInformation);
      } catch (error) {
        console.error(error);
      }
    }

    takeInfo();
  }, [name]);

  return (
    <div className={styles.container}>
      <div className={styles.pictureWrapper}>
        <h2 className={styles.naming}>{name}</h2>
        <img src={fullInfo?.pictureUrl} alt={name}></img>
      </div>
    </div>
  );
};
