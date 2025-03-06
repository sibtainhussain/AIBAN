import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router';
import Button from '../components/Button';
import { RoutePaths } from '../constants/routes';
import { title } from '../constants/strings';
import useScrollOffset from '../hooks/useScrollOffset';
import styles from './styles.module.css';
import logo from '/logo.svg';

const Nav = () => {
  const stickied = useScrollOffset(10);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${stickied ? styles.sticky : ''}`}>
        <Link to={RoutePaths.HOME} className={styles.logoWrapper}>
          <img src={logo} alt={title} />
        </Link>
        <span className={styles.linksMenu}>
          <Button icon>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </span>
        <span className={styles.linksWrapper}>
          <NavLink
            to={'/'}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to={'/episodes'}
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
          >
            Episodes
          </NavLink>
        </span>
      </nav>
    </header>
  );
};

export default Nav;
