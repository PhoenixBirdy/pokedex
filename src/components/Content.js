import { Search } from './Search';
import { Grid } from './Grid';
import styles from './Content.module.css';

export const Content = () => {
  return (
    <div className={styles.content}>
      <Search />
      <Grid />
    </div>
  );
};
