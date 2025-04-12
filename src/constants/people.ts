import { Brand, TSocialLinks } from '../components/Socials';

type TPerson = {
  name: string;
  socials: TSocialLinks;
  bio: string;
  image: string;
};

export const person1: TPerson = {
  name: 'Person One',
  socials: {
    [Brand.FACEBOOK]: '',
    [Brand.INSTAGRAM]: '',
    [Brand.TWITTER]: '',
    [Brand.TIKTOK]: '',
  },
  bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium facilisis
molestie. Quisque ac ligula lorem. Pellentesque commodo dolor sed posuere vehicula.
Etiam iaculis lectus eu aliquam faucibus. Duis lacinia mollis imperdiet. Aliquam non
vehicula tortor. Fusce aliquet urna at vehicula laoreet. Praesent a scelerisque felis.
Donec euismod volutpat velit, eu sagittis dui ultrices non. Curabitur eget mi nulla. In
hac habitasse platea dictumst.`,
  image: 'https://picsum.photos/id/21/1280/720',
};

export const person2: TPerson = {
  name: 'Person Two',
  socials: {
    [Brand.INSTAGRAM]: '',
    [Brand.TWITTER]: '',
    [Brand.LINKEDIN]: '',
  },
  bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium facilisis
molestie. Quisque ac ligula lorem. Pellentesque commodo dolor sed posuere vehicula.
Etiam iaculis lectus eu aliquam faucibus. Duis lacinia mollis imperdiet. Aliquam non
vehicula tortor. Fusce aliquet urna at vehicula laoreet. Praesent a scelerisque felis.
Donec euismod volutpat velit, eu sagittis dui ultrices non. Curabitur eget mi nulla. In
hac habitasse platea dictumst.`,
  image: 'https://picsum.photos/id/22/1280/720',
};

export const Hosts = [person1, person2];
