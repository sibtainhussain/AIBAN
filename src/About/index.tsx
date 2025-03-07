import { PodcastDescription, PodcastTagline, PodcastTitle } from '../constants/strings';
import classes from './styles.module.css';

const About = () => {
  return (
    <div className={classes.root}>
      <section className={classes.row}>
        <h1>{PodcastTitle}</h1>
        <h3>{PodcastTagline}</h3>
        <div className={classes.PodcastDescription}>
          <p>{PodcastDescription}</p>
        </div>
      </section>
      <section className={classes.row}></section>
    </div>
  );
};

export default About;
