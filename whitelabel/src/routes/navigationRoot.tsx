import React from 'react';
import {StackActions, CommonActions} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {NavigationContainerRef, ParamListBase} from '@react-navigation/core';
import {ROUTES} from './appRoutes.enum';

export type Routes = `${ROUTES}`;

enum RoutesAnimationPush {
  'stack-home',
}

export const navigationRef =
  React.createRef<NavigationContainerRef<ParamListBase>>();

const navigation = {
  getCurrentRouteName: () =>
    navigationRef?.current?.getCurrentRoute()?.name as Routes,

  navigate: (name: string, params = {}) => {
    if (navigationRef.current) {
      navigationRef.current.navigate(name as Routes, params as never);
    }
  },

  popToTop: () => {
    if (navigationRef.current) {
      navigationRef.current.dispatch(StackActions.popToTop());
    }
  },

  pop: (n = 1) => {
    if (navigationRef.current) {
      navigationRef.current.dispatch(StackActions.pop(n));
    }
  },

  goBack: () => {
    if (navigationRef.current && navigationRef.current.canGoBack()) {
      navigationRef.current.goBack();
    }
  },

  reset: (route: Routes = ROUTES.STACK_HOME, paramsRoute = {}) => {
    if (navigationRef.current) {
      if (paramsRoute) {
        navigationRef.current.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: route, params: paramsRoute}],
          }),
        );
      } else {
        navigationRef.current.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: route}],
          }),
        );
      }
    }
  },
};

export const screenOptions = (): NativeStackNavigationOptions => {
  const route = navigation.getCurrentRouteName();
  const isAnimationPop = Object.values(RoutesAnimationPush).includes(route);

  return {
    headerShown: false,
    animation: 'slide_from_right',
    animationTypeForReplace: isAnimationPop ? 'pop' : 'push',
  };
};

export default navigation;
