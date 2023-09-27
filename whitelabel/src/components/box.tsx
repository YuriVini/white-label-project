import {
  BackgroundColorProps,
  LayoutProps,
  SpacingProps,
  VariantProps,
  backgroundColor,
  createBox,
  createRestyleComponent,
  createVariant,
  layout,
  spacing,
} from '@shopify/restyle';

import {ThemeProps} from '../../styles/theme';

const variant = createVariant({
  themeKey: 'boxVariants',
});
const BaseBox = createBox<ThemeProps>();

const Box = createRestyleComponent<
  VariantProps<ThemeProps, 'boxVariants'> &
    SpacingProps<ThemeProps> &
    LayoutProps<ThemeProps> &
    React.ComponentProps<typeof BaseBox> &
    BackgroundColorProps<ThemeProps>,
  ThemeProps
>([variant, spacing, layout, backgroundColor], BaseBox);

export default Box;
