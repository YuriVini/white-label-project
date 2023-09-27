import React, {ReactNode} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Box from './box';
import Text from './text';
import Press from './press';

export interface BoxWrapperTypes {
  title?: string;
  seeMore?: boolean;
  show: boolean;
  loading?: boolean;
  onPress?: () => void;
  children?: ReactNode;
}

const BoxWrapper = ({
  title,
  seeMore = false,
  show,
  loading,
  onPress,
  children,
}: BoxWrapperTypes) => {
  if (!show) return null;

  return (
    <Box marginVertical="s" marginLeft="m">
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="s">
        <Text variant="semiBold" fontSize={22}>
          {title}
        </Text>
        {seeMore && (
          <Press
            disabled={loading}
            onPress={onPress}
            activeOpacity={0.7}
            flexDirection="row"
            alignItems="center"
            marginRight="l">
            <Text variant="regular">Ver mais</Text>
            <Icon name="chevron-right" size={22} />
          </Press>
        )}
      </Box>
      {children}
    </Box>
  );
};
export default BoxWrapper;
