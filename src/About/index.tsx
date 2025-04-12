import Socials from '../components/Socials';
import { Hosts } from '../constants/people';
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
      <section className={classes.row}>
        {Hosts.map((host, i) => (
          <div
            className={classes.hostRow}
            key={host.name}
            style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <div className={classes.hostPicture}>
              <img src={host.image} />
            </div>
            <div className={classes.hostProfile}>
              <h2>{host.name}</h2>
              <Socials links={host.socials} />
              <p>{host.bio}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default About;
