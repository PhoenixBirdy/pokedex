import { useEffect, useState, useRef } from 'react';
import styles from './Grid.module.css';
import { GridElement } from './GridElement';
import { Pagination } from './Pagination';

const RANGE = 12;

export const Grid = () => {
  const [pagination, setPagination] = useState(1);
  const [cards, setCards] = useState([]);
  const inStockRef = useRef([]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (!inStockRef.current.includes(pagination)) {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?limit=${RANGE}&offset=${
              (pagination - 1) * RANGE
            }
            }`
          );
          inStockRef.current = [...inStockRef.current, pagination];
          console.log('inStock', inStockRef);
          const data = await response.json();
          setCards([...cards, ...data.results]);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [pagination]);

  const handleChangePage = number => {
    console.log('here!', number);
    setPagination(number);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {cards.slice((pagination - 1) * RANGE, pagination * RANGE).map(card => (
          <GridElement key={card.name} cardName={card.name} url={card.url} />
        ))}
      </div>

      <Pagination
        page={pagination}
        onChangePage={number => {
          console.log('new:', number);
          handleChangePage(number);
        }}
      />
    </div>
  );
};
