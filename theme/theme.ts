import { merge } from 'theme-ui';
import system from '@theme-ui/preset-system';
import colors from '../tokens/colors';
import fonts from '../tokens/fontFamilies';
import fontWeights from '../tokens/fontWeights';
import radii from '../tokens/radii';
import { text } from './text';
import { buttons } from './buttons';
import { styles } from './styles';

export const theme = merge(system, {
  sizes: {
    container: 1205,
    readable: 770,
  },
  colors,
  fonts,
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
      p: 4,
      gap: 4,
      bg: 'white',
    },
  },
});