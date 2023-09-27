import React from 'react';
import {Image} from 'react-native';
import Box from '../../../components/box';
import Text from '../../../components/text';
import logo from '../../../../assets/images/logo.png';

const Header = () => {
  return (
    <Box
      mt="m"
      p="m"
      width="100%"
      flexDirection="row"
      alignItems="center"
      gap="s">
      <Image source={logo} style={{borderRadius: 50}} />
      <Text variant="headerTitle">Flow Cursos</Text>
    </Box>
  );
};
export default Header;
