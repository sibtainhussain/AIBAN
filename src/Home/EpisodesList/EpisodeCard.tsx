import { motion } from 'motion/react';
import { CSSProperties } from 'react';
import classes from './styles.module.css';

const EpisodeCard = ({ style, flip = false }: { style?: CSSProperties; flip?: boolean }) => {
  return (
    <motion.div
      className={`${classes.card} ${flip ? classes.flip : ''}`}
      initial={{ opacity: 0, x: flip ? '-100%' : '100%' }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={style}
    >
      <div className={classes.arrow} />
      <h3>Episode Title</h3>
      <h6>Coming Soon...</h6>
    </motion.div>
  );
};

export default EpisodeCard;
