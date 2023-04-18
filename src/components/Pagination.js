import styles from './Pagination.module.css';

export const Pagination = ({ page, onChangePage }) => {
  const handleClickLeft = () => {
    if (page > 1) onChangePage(page - 1);
  };

  const handleClickRight = () => {
    if (page < 20) onChangePage(page + 1);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.buttons}
        onClick={handleClickLeft}
        disabled={!(page - 1)}
      >
        Left
      </button>
      <input
        className={styles.page}
        type="text"
        name="pagination"
        value={page}
        disabled
      ></input>
      <button
        className={styles.buttons}
        onClick={handleClickRight}
        disabled={page === 19}
      >
        Right
      </button>
    </div>
  );
};
