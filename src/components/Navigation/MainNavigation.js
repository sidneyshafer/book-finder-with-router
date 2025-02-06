import { NavLink } from 'react-router-dom';

import styles from "./MainNavigation.module.css";

function MainNavigation() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.list}>
                    <li>
                        <NavLink 
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`} 
                        to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                        className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                        to='/book-search'>
                            Book Search
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;