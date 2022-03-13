import system from '@theme-ui/preset-system';
import { merge } from 'theme-ui';
import colors from '../tokens/colors';
import fonts from '../tokens/fontFamilies';
import fontWeights from '../tokens/fontWeights';
import radii from '../tokens/radii';
import { buttons } from './buttons';
import { styles } from './styles';
import { text } from './text';

export const theme = merge(system, {
  sizes: {
    container: 1205,
    readable: 770,
  },
  colors: {
    ...colors,
    primary: colors.blue,
    secondary: colors.blue02,
    background: colors.blue06
  },
  fonts: {
    body: [fonts.regular, system.fonts.body].join(', '),
  },
  fontWeights,
  text,
  buttons,
  radii,
  badges: {},
  styles,
  forms: {
    label: {
      gap: 2,
    },
  },
  cards: {
    primary: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    },
  },
});
