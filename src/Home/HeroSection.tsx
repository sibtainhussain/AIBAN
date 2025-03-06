import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router';
import { RoutePaths } from '../constants/routes';
import classes from './styles.module.css';

const HeroSection = () => {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '80vh']);

  return (
    <section ref={container} className={classes.row} id="Home" style={{ padding: 0 }}>
      <motion.div style={{ y, width: '100%' }}>
        <img
          className={classes.heroImage}
          src="https://picsum.photos/id/0/1280/720"
          style={{ transform: 'scale(-1, 1)' }}
        />
      </motion.div>
      <div className={classes.overlay}>
        <div className={classes.overlayText}>
          <h1>Age is but a</h1>
          <h1 className={classes.outline}>Number</h1>
        </div>
        <Link to={RoutePaths.EPISODES}>Listen</Link>
      </div>
    </section>
  );
};

export default HeroSection;
