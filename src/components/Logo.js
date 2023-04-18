import styles from './Logo.module.css';
import logoSrc from '../images/logo.png';

export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <img className={styles.logo} src={logoSrc} alt="Logo"></img>
    </div>
  );
};
