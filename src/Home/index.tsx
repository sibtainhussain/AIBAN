import AboutSection from './AboutSection';
import EpisodesSection from './EpisodesSection';
import HeroSection from './HeroSection';
import classes from './styles.module.css';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <img className={classes.dividerImage} src="https://picsum.photos/id/39/1280/720" />
      <EpisodesSection />
    </div>
  );
};

export default Home;
