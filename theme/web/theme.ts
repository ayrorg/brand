import { merge } from 'theme-ui';
import { theme } from '../theme';

export const webTheme = merge(theme, {
  styles: {
    root: {
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
    },
  },
});
