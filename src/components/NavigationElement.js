import { useRef, useEffect } from 'react';
import styles from './NavigationElement.module.css';

export const NavigationElement = ({
  children,
  onHandleActiveElement,
  id,
  active,
}) => {
  const refElement = useRef(null);

  const handleClick = elementId => {
    onHandleActiveElement(elementId);
    if (!active) {
      refElement.current.classList.add('clicked');
    }
  };

  useEffect(() => {
    console.log('active', active);
    if (active) {
      refElement.current.classList.remove('clicked');
    } else {
      refElement.current.classList.add('clicked');
    }
  }, [active]);

  return (
    <span
      className={styles.element}
      onClick={() => handleClick(id)}
      ref={refElement}
    >
      {children}
    </span>
  );
};
