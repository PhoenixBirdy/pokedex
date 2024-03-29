import { useState } from 'react';
import { Logo } from './Logo';
import styles from './Header.module.css';
import { Navigation } from './Navigation';
import { NavLink } from 'react-router-dom';

const counterId = (initialId = 0) => {
  let counter = initialId;
  return () => counter++;
};
const id = counterId();

export const Header = () => {
  const [elements, setElements] = useState([
    { name: 'O nás', id: id(), active: false, to: '/' },
    { name: 'Pokémoni', id: id(), active: true, to: '/pokemons' },
  ]);
  console.log(elements);

  const handleActiveElement = elementId => {
    setElements(prevElements =>
      prevElements.map(element =>
        elementId === element.id
          ? { ...element, active: true }
          : { ...element, active: false }
      )
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Logo />
        <Navigation
          elements={elements}
          onHandleActiveElement={handleActiveElement}
        />
      </div>
    </div>
  );
};
