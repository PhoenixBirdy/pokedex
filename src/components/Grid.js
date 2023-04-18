import { useEffect, useState, useRef } from 'react';
import styles from './Grid.module.css';
import { GridElement } from './GridElement';
import { Pagination } from './Pagination';
import { Search } from './Search';

const RANGE = 12;

export const Grid = () => {
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState(1);
  const [cards, setCards] = useState([]);
  const inStockRef = useRef([]);
  const toRender =
    search.length >= 2
      ? cards.filter(item => item.name.includes(search))
      : cards.slice((pagination - 1) * RANGE, pagination * RANGE);

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

  const handleChangeSearch = string => {
    setSearch(string);
  };

  return (
    <>
      <Search
        search={search}
        handleChangeSearch={string => handleChangeSearch(string)}
      />
      <div className={styles.container}>
        <div className={styles.grid}>
          {toRender.map(card => (
            <GridElement key={card.name} cardName={card.name} url={card.url} />
          ))}
        </div>

        <Pagination
          page={pagination}
          onChangePage={number => {
            handleChangePage(number);
          }}
        />
      </div>
    </>
  );
};
