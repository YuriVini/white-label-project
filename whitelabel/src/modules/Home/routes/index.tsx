import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {ROUTES} from '../../../routes/appRoutes.enum';

export type HomeRouteMap = {
  [ROUTES.HOME]: undefined;
};

const Stack = createNativeStackNavigator<HomeRouteMap>();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
