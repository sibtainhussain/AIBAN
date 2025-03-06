import { anticipate, motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useMemo, useRef } from 'react';
import classes from './styles.module.css';

const baseWidth = 60;
const minWidth = 20;
const maxWidth = 200;

const WaveLine = ({ widthFactor }: { widthFactor: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end 90%'],
  });
  const progress = useSpring(scrollYProgress);

  const targetWidth = useMemo(() => widthFactor * (maxWidth - minWidth) + minWidth, []);
  const backgroundColor = useTransform(
    progress,
    [0, 0.5, 1],
    ['#8994ae88', '#ec1539', '#8994ae88'],
    {
      ease: anticipate,
    }
  );
  const width = useTransform(
    progress,
    [0, 0.5, 1],
    [`${baseWidth}px`, `${targetWidth}px`, `${baseWidth}px`],
    {
      ease: anticipate,
    }
  );

  return (
    <motion.div
      ref={ref}
      className={classes.waveLine}
      style={{
        width,
        backgroundColor,
      }}
    ></motion.div>
  );
};

export default WaveLine;
