import {CoursesRouteMap} from '../src/modules/Courses/routes/index';
import {HomeRouteMap} from '../src/modules/Home/routes/index';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeRouteMap, CoursesRouteMap {}
  }
}
