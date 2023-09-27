import {createBox} from '@shopify/restyle';
import React from 'react';
import {
  TouchableOpacityProps,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

import {ThemeProps} from '../../styles/theme';

interface BaseProps extends TouchableOpacityProps {
  children?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void | Promise<void>;
}

const Base = ({children, ...props}: BaseProps) => (
  <TouchableOpacity activeOpacity={0.7} {...props}>
    {children}
  </TouchableOpacity>
);

const Press = createBox<ThemeProps, BaseProps>(Base);

export default Press;
