import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faSpotify,
  faTiktok,
  faXTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { IconDefinition, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HTMLAttributes } from 'react';
import Button from '../Button';
import Tooltip from '../Tooltip';
import classes from './styles.module.css';

enum Brand {
  TWITTER = 'Twitter',
  INSTAGRAM = 'Instagram',
  FACEBOOK = 'Facebook',
  LINKEDIN = 'LinkedIn',
  YOUTUBE = 'Youtube',
  TIKTOK = 'TikTok',
  SPOTIFY = 'Spotify',
  PODCAST = 'Apple Podcast',
}

const SocialIcons: Record<Brand, IconDefinition> = {
  [Brand.TWITTER]: faXTwitter,
  [Brand.INSTAGRAM]: faInstagram,
  [Brand.FACEBOOK]: faFacebook,
  [Brand.LINKEDIN]: faLinkedin,
  [Brand.YOUTUBE]: faYoutube,
  [Brand.TIKTOK]: faTiktok,
  [Brand.SPOTIFY]: faSpotify,
  [Brand.PODCAST]: faPodcast,
};

const PodcastLinks: Partial<Record<Brand, string>> = {
  [Brand.TWITTER]: '',
  [Brand.INSTAGRAM]: '',
  [Brand.FACEBOOK]: '',
  // [Brand.LINKEDIN]: '',
  [Brand.YOUTUBE]: '',
  [Brand.TIKTOK]: '',
  [Brand.SPOTIFY]: '',
  [Brand.PODCAST]: '',
};

const Socials = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={classes.row} {...props}>
      {Object.entries(PodcastLinks).map(([brand, link]) => (
        <Tooltip key={brand} id={brand} content={brand}>
          <Button icon Component="a" href={link}>
            {/* @ts-expect-error */}
            <FontAwesomeIcon icon={SocialIcons[brand]} size="lg" fixedWidth />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
