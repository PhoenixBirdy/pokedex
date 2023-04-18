import { NavigationElement } from './NavigationElement';
import styles from './Navigation.module.css';

export const Navigation = ({ elements, onHandleActiveElement }) => {
  return (
    <nav className={styles.navigation}>
      {elements.map(element => {
        return (
          <NavigationElement
            key={element.id}
            id={element.id}
            active={element.active}
            onHandleActiveElement={onHandleActiveElement}
          >
            {element.name}
          </NavigationElement>
        );
      })}
    </nav>
  );
};
