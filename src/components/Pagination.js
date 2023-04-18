import styles from './Pagination.module.css';

export const Pagination = ({ page, onChangePage }) => {
  const handleChange = event => {
    const newPage = event.target.value;
    if (newPage >= 1 && newPage <= 13) {
      onChangePage(newPage);
    }
  };

  const handleClickLeft = () => {
    if (page - 1 >= 0) onChangePage(page - 1);
  };

  const handleClickRight = () => {
    if (page + 1 < 13) onChangePage(page + 1);
  };

  return (
    <div className={styles.container}>
      <button className={styles.buttons} onClick={handleClickLeft}>
        Left
      </button>
      <input
        className={styles.page}
        type="text"
        name="pagination"
        value={page + 1}
        onChange={handleChange}
        disabled
      ></input>
      <button className={styles.buttons} onClick={handleClickRight}>
        Right
      </button>
    </div>
  );
};
