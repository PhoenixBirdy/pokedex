import { Grid } from './Grid';
import styles from './Content.module.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './About';
import { PokemonDetail } from './PokemonDetail';

export const Content = () => {
  return (
    <div className={styles.content}>
      <Routes>
        <Route path="/" element={<About />}></Route>
        <Route path="/pokemons/:name" element={<PokemonDetail />}></Route>
        <Route exact path="/pokemons" element={<Grid />}></Route>
      </Routes>
    </div>
  );
};
