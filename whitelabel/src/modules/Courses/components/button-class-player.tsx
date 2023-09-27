import React from 'react';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Press from '../../../components/press';

interface ButtonClassPlayerProps {
  playing: boolean;
  togglePlaying: () => void;
}

const ButtonClassPlayer = ({
  playing,
  togglePlaying,
}: ButtonClassPlayerProps) => {
  const {width} = Dimensions.get('window');

  return (
    <Press
      onPress={togglePlaying}
      position="absolute"
      bottom={30}
      right={width - width * 1.1}
      width={60}
      height={60}
      borderRadius={60}
      marginHorizontal="xxl"
      alignItems="center"
      justifyContent="center"
      bg="accent">
      <Icon name={playing ? 'pause' : 'play'} size={32} color="white" />
    </Press>
  );
};
export default ButtonClassPlayer;
