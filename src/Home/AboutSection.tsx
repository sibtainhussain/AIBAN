import { Link } from 'react-router';
import Button from '../components/Button';
import { RoutePaths } from '../constants/routes';
import classes from './styles.module.css';

const AboutSection = () => {
  return (
    <section className={classes.row} id="About Section">
      <div className={classes.aboutSection}>
        <div className={classes.glowBackground} />
        <h2>The Podcast about something or the other</h2>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium facilisis molestie.
          Quisque ac ligula lorem. Pellentesque commodo dolor sed posuere vehicula. Etiam iaculis
          lectus eu aliquam faucibus. Duis lacinia mollis imperdiet. Aliquam non vehicula tortor.
          Fusce aliquet urna at vehicula laoreet. Praesent a scelerisque felis. Donec euismod
          volutpat velit, eu sagittis dui ultrices non.
        </p>
        <p>
          Curabitur eget mi nulla. In hac habitasse platea dictumst. Curabitur libero lorem, maximus
          id tellus ut, maximus iaculis nibh. Pellentesque ac elit ligula. Nulla nec facilisis ante,
          ac scelerisque lacus. Aliquam suscipit feugiat cursus. Nam faucibus massa rutrum metus
          lacinia tempor vitae eu est. Sed a lacinia metus. Sed at velit maximus, mollis nibh
          imperdiet, gravida felis. Integer vitae lorem a libero hendrerit malesuada. Quisque
          eleifend nisl eget risus convallis ultricies. Vestibulum ante ipsum primis in faucibus
          orci luctus et ultrices posuere cubilia curae;
        </p>
      </div>
      <Button Component={Link} to={RoutePaths.ABOUT}>
        Learn More
      </Button>
    </section>
  );
};

export default AboutSection;
