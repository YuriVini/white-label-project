import React from 'react';
import Box from '../../../components/box';
import Text from '../../../components/text';
import {Dimensions, Image} from 'react-native';
import Press from '../../../components/press';
import navigation from '../../../routes/navigationRoot';
import {ROUTES} from '../../../routes/appRoutes.enum';
import logoAula from '../../../../assets/images/logoAula.png';

export interface BoxCoursesProps {
  id: string;
  img: string;
  courseName: string;
  author: string;
  value: string;
  isFree: boolean;
}

const BoxCourse = ({data}: {data: BoxCoursesProps}) => {
  const {width} = Dimensions.get('window');
  const {navigate} = navigation;

  return (
    <Box variant="shadow" width={width / 3} gap="s" mb="s" pb="s" bg="white">
      <Press
        onPress={() =>
          navigate(ROUTES.STACK_COURSES, {
            screen: ROUTES.COURSE_DETAILS,
            params: data,
          })
        }>
        <Image source={logoAula} />
        <Box flexGrow={1} gap="s" paddingHorizontal="s">
          <Text variant="bold" numberOfLines={3}>
            {data.courseName}
          </Text>
          <Text variant="regular" fontSize={14} numberOfLines={1}>
            {data.author}
          </Text>
        </Box>
        <Text variant="bold" paddingHorizontal="s">
          {data.isFree ? 'Gratuito' : data.value}
        </Text>
      </Press>
    </Box>
  );
};
export default BoxCourse;
