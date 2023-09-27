import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Courses from '../screens/Courses';
import {ROUTES} from '../../../routes/appRoutes.enum';
import CourseDetails from '../screens/CourseDetails';
import {CardCoursesProps} from '../components/card-course';
import CourseClass from '../screens/CourseClass';
import {CardClassProps} from '../components/card-class';

export type CoursesRouteMap = {
  [ROUTES.COURSES]: undefined;
  [ROUTES.COURSE_DETAILS]: CardCoursesProps;
  [ROUTES.COURSE_CLASS]: {
    data: CardClassProps;
    courseData: CardCoursesProps;
  };
};

const Stack = createNativeStackNavigator<CoursesRouteMap>();

const CoursesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, gestureEnabled: true}}>
      <Stack.Screen name={ROUTES.COURSES} component={Courses} />
      <Stack.Screen name={ROUTES.COURSE_DETAILS} component={CourseDetails} />
      <Stack.Screen
        options={{orientation: 'portrait'}}
        name={ROUTES.COURSE_CLASS}
        component={CourseClass}
      />
    </Stack.Navigator>
  );
};

export default CoursesStack;
