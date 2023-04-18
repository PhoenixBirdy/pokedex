import { useState } from 'react';
import styles from './Grid.module.css';
import { GridElement } from './GridElement';
import { Pagination } from './Pagination';

const RANGE = 12;

export const Grid = () => {
  const [pagination, setPagination] = useState(0);
  const [cards, setCards] = useState([]);
  console.log('cards', cards);

  useState(() => {
    async function fetchData() {
      console.log('pagination', pagination);
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${RANGE}&offset=${
            pagination * RANGE
          }`
        );
        const data = await response.json();

        setCards(prevCards => [...prevCards, ...data.results]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [pagination]);

  const handleChangePage = number => {
    setPagination(number);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {cards.map(card => (
          <GridElement key={card.name} cardName={card.name} url={card.url} />
        ))}
      </div>

      <Pagination
        page={pagination}
        onChangePage={number => handleChangePage(number)}
      />
    </div>
  );
};
