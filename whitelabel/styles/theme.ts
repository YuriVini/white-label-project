import {boxVariants} from './boxVariant';
import {textVariants} from './textVariant';
import {createTheme} from '@shopify/restyle';
import {colors} from './colors';
import {spacing} from './spacing';

const theme = createTheme({
  colors,
  spacing,
  boxVariants,
  textVariants,
});

export type ThemeProps = typeof theme;
export default theme;
