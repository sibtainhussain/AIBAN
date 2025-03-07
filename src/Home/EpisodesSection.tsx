import { Link } from 'react-router';
import Button from '../components/Button';
import Socials from '../components/Socials';
import { RoutePaths } from '../constants/routes';
import { PodcastLinks } from '../constants/strings';
import EpisodesList from './EpisodesList';
import classes from './styles.module.css';

const EpisodesSection = () => {
  return (
    <section
      className={classes.row}
      id="Episodes Section"
      style={{ backgroundColor: 'var(--foreground)' }}
    >
      <h2>Latest Episodes</h2>
      <Socials links={PodcastLinks} />

      <EpisodesList />

      <Button Component={Link} to={RoutePaths.EPISODES}>
        View All
      </Button>
    </section>
  );
};

export default EpisodesSection;
