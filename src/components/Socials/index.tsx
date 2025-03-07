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

export enum Brand {
  TWITTER = 'Twitter',
  INSTAGRAM = 'Instagram',
  FACEBOOK = 'Facebook',
  LINKEDIN = 'LinkedIn',
  YOUTUBE = 'Youtube',
  TIKTOK = 'TikTok',
  SPOTIFY = 'Spotify',
  Podcast = 'Apple Podcast',
}

const SocialIcons: Record<Brand, IconDefinition> = {
  [Brand.TWITTER]: faXTwitter,
  [Brand.INSTAGRAM]: faInstagram,
  [Brand.FACEBOOK]: faFacebook,
  [Brand.LINKEDIN]: faLinkedin,
  [Brand.YOUTUBE]: faYoutube,
  [Brand.TIKTOK]: faTiktok,
  [Brand.SPOTIFY]: faSpotify,
  [Brand.Podcast]: faPodcast,
};

export type TSocialLinks = Partial<Record<Brand, string>>;
interface IProps extends HTMLAttributes<HTMLDivElement> {
  links: TSocialLinks;
}

const Socials = ({ links, ...props }: IProps) => {
  return (
    <div className={classes.row} {...props}>
      {Object.entries(links).map(([brand, link]) => (
        <Tooltip key={brand} id={brand} content={brand}>
          <Button icon Component="a" href={link}>
            {/* @ts-expect-error - brand is a key of SocialIcons */}
            <FontAwesomeIcon icon={SocialIcons[brand]} size="lg" fixedWidth />
          </Button>
        </Tooltip>
      ))}
    </div>
  );
};

export default Socials;
