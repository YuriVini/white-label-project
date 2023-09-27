import React from 'react';
import {Dimensions} from 'react-native';

import Box from '../../../components/box';
import Press from '../../../components/press';
import {BoxProps} from '@shopify/restyle';
import {ThemeProps} from '../../../../styles/theme';
import Text from '../../../components/text';

export interface BannerProps extends BoxProps<ThemeProps> {
  onPress: () => void;
}

const Banner = ({onPress, ...rest}: BannerProps) => {
  const {width} = Dimensions.get('window');

  return (
    <Box {...rest}>
      <Press height={120} activeOpacity={0.8} onPress={onPress}>
        <Box height={120} borderRadius={8} bg="accent" alignItems="center">
          <Text variant="semiBold" fontSize={20} color="white" mt="m">
            Quer ter seu próprio curso?
          </Text>
          <Text variant="bold" fontSize={20} color="white" mt="l">
            Clique aqui!
          </Text>
        </Box>
      </Press>
    </Box>
  );
};
export default Banner;
