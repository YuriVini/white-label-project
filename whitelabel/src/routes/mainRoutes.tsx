import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomBar from './appNavigator';
import HomeStack from '../modules/Home/routes';
import CoursesStack from '../modules/Courses/routes';
import {ROUTES} from './appRoutes.enum';

export type MainRouteMap = {
  [ROUTES.BOTTOM_BAR]: undefined;
  [ROUTES.STACK_HOME]: undefined;
  [ROUTES.STACK_COURSES]: undefined;
};

const Stack = createNativeStackNavigator<MainRouteMap>();

const MainRoutes = () => (
  <Stack.Navigator
    initialRouteName={ROUTES.BOTTOM_BAR}
    screenOptions={{
      headerShown: false,
      gestureEnabled: true,
    }}>
    <Stack.Screen name={ROUTES.BOTTOM_BAR} component={BottomBar} />
    <Stack.Screen name={ROUTES.STACK_HOME} component={HomeStack} />
    <Stack.Screen name={ROUTES.STACK_COURSES} component={CoursesStack} />
  </Stack.Navigator>
);

export default MainRoutes;
