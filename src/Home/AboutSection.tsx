import { Link } from 'react-router';
import Button from '../components/Button';
import { RoutePaths } from '../constants/routes';
import { PodcastDescription, PodcastTagline } from '../constants/strings';
import classes from './styles.module.css';

const AboutSection = () => {
  return (
    <section className={classes.row} id="About Section">
      <div className={classes.aboutSection}>
        <div className={classes.glowBackground} />
        <h2>{PodcastTagline}</h2>
        <br />
        <p>{PodcastDescription}</p>
      </div>
      <Button Component={Link} to={RoutePaths.ABOUT}>
        Learn More
      </Button>
    </section>
  );
};

export default AboutSection;
