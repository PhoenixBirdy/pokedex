import { NavigationElement } from './NavigationElement';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = ({ elements, onHandleActiveElement }) => {
  return (
    <nav className={styles.navigation}>
      {elements.map(element => {
        return (
          <NavLink
            key={element.id}
            to={element.to}
            className={styles.noLinkLine}
            exact={!element.id}
          >
            <NavigationElement
              id={element.id}
              active={element.active}
              onHandleActiveElement={onHandleActiveElement}
            >
              {element.name}
            </NavigationElement>
          </NavLink>
        );
      })}
    </nav>
  );
};
