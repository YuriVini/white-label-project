import React from 'react';
import BottomBar from './appNavigator';
import {NavigationContainer} from '@react-navigation/native';
import MainRoutes from './mainRoutes';
import {navigationRef} from './navigationRoot';

const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainRoutes />
    </NavigationContainer>
  );
};
export default Routes;
