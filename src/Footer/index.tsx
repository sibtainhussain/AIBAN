import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router';
import Button from '../components/Button';
import Input from '../components/Input';
import Socials from '../components/Socials';
import { RoutePaths } from '../constants/routes';
import { title } from '../constants/strings';
import useScrollOffset from '../hooks/useScrollOffset';
import styles from './styles.module.css';
import logo from '/logo.svg';

const Footer = () => {
  const scrolled = useScrollOffset(300);
  const [email, setEmail] = useState('');
  // const isValid = useMemo(() => validateEmail(email || ''), [email]);

  return (
    <footer className={styles.footer}>
      <div
        className={styles.topButtonWrapper}
        style={{ opacity: scrolled ? 1 : 0, pointerEvents: scrolled ? 'auto' : 'none' }}
      >
        <button
          className={styles.topButton}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <FontAwesomeIcon icon={faCaretUp} size="xl" />
          <h3>TOP</h3>
        </button>
      </div>
      <div className={styles.topRow}>
        <Link to={RoutePaths.HOME} className={styles.logoWrapper}>
          <img src={logo} alt={title} />
        </Link>
        <div className={styles.contentWrapper}>
          <div>
            <Input
              id="Email"
              type="email"
              label={<h2 style={{ textTransform: 'uppercase' }}>get the newsletter</h2>}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              placeholder="Email"
              centerLabel
            >
              <Button style={{ flex: 1 }}>Subscribe</Button>
            </Input>
          </div>
          <div>
            <Socials />
          </div>
        </div>
      </div>
      <span className={styles.subFooter}>
        <p>© 2025 Age Is But a Number</p>
        <span>
          <a>Terms of Use</a>|<a>Privacy Policy</a>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
