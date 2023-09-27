import {MainRouteMap} from './mainRoutes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CoursesStack from '../modules/Courses/routes';
import HomeStack from '../modules/Home/routes';
import {ROUTES} from './appRoutes.enum';
import {Routes} from './navigationRoot';

interface RoutesProps {
  name: Routes;
  component: ({route}: NativeStackScreenProps<MainRouteMap>) => JSX.Element;
  iconName: string;
  size: number;
  textBottomBar: string;
}

export const MENU_ROUTES: RoutesProps[] = [
  {
    name: ROUTES.STACK_HOME,
    component: HomeStack,
    iconName: 'home-outline',
    size: 22,
    textBottomBar: 'Início',
  },
  {
    name: ROUTES.STACK_COURSES,
    component: CoursesStack,
    iconName: 'clipboard-play-outline',
    size: 22,
    textBottomBar: 'Cursos',
  },
];
