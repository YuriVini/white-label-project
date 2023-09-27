import {ROUTES} from '../../routes/appRoutes.enum';
import CoursesStack from './routes';
import Courses from './screens/Courses';

const moduleConfig = {
  id: 'courses',
  title: 'Cursos',
  name: ROUTES.STACK_COURSES,
  component: CoursesStack,
  iconName: 'clipboard-play-outline',
  size: 22,
  textBottomBar: 'Cursos',
  stack: {
    initialRouteName: ROUTES.STACK_COURSES,
    routes: {
      CoursesStack,
    },
  },
};

export default moduleConfig;
