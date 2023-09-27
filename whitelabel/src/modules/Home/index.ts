import {ROUTES} from '../../routes/appRoutes.enum';
import HomeStack from './routes';

const moduleConfig = {
  id: 'home',
  title: 'Início',
  name: ROUTES.STACK_HOME,
  component: HomeStack,
  iconName: 'home-outline',
  size: 22,
  textBottomBar: 'Início',
  stack: {
    initialRouteName: ROUTES.STACK_HOME,
    routes: {
      HomeStack,
    },
  },
};

export default moduleConfig;
