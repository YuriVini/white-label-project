import React from 'react';
import modules from '../modules';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable, PressableProps} from 'react-native';
import {colors} from '../../styles/colors';
import Box from '../components/box';
import Text from '../components/text';
import navigation from './navigationRoot';

const BottomTab = createBottomTabNavigator();

const BottomBar = () => {
  const {reset} = navigation;

  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      {modules.map(item => (
        <BottomTab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: () => null,
            tabBarButton: ({onPress, ...props}: PressableProps) => {
              return <Pressable {...props} onPress={() => reset(item.name)} />;
            },
            tabBarIcon: ({focused}) => (
              <Box alignItems="center" justifyContent="center" mt="s">
                <Icon
                  name={item.iconName}
                  size={item.size}
                  color={focused ? colors.accent : colors.text}
                />
                <Text
                  color={focused ? 'accent' : 'text'}
                  variant="bottomBarTitle">
                  {item.textBottomBar}
                </Text>
              </Box>
            ),
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomBar;
