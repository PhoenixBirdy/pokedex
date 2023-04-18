import { useState } from 'react';
import styles from './Search.module.css';
import searchSrc from '../images/search_icon.png';
import clearSrc from '../images/x_icon.png';

export const Search = () => {
  const [search, setSearch] = useState('');

  const handleClickClear = () => {
    setSearch('');
  };

  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles.container}>
      <div>
        <img src={searchSrc} alt="search icon"></img>
      </div>

      <input
        type="text"
        name="search"
        placeholder="Zadejte jméno pokemona"
        className={styles.search}
        onChange={handleChange}
        value={search}
      ></input>

      <div className={styles.clear} onClick={handleClickClear}>
        <img src={clearSrc} alt="cross icon"></img>
      </div>
    </div>
  );
};
