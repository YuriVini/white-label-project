import React from 'react';
import Box from '../../../components/box';
import Text from '../../../components/text';
import Press from '../../../components/press';
import navigation from '../../../routes/navigationRoot';
import {ROUTES} from '../../../routes/appRoutes.enum';
import {CardCoursesProps} from './card-course';

export interface CardClassProps {
  id: number;
  lessonName: string;
  hoursClass: string;
  videoId: string;
}

const CardClass = ({
  data,
  courseData,
}: {
  data: CardClassProps;
  courseData: CardCoursesProps;
}) => {
  const {navigate} = navigation;

  return (
    <Box width="100%" p="s" bg="white" borderWidth={1} borderColor="gray_100">
      <Press onPress={() => navigate(ROUTES.COURSE_CLASS, {data, courseData})}>
        <Box
          paddingHorizontal="s"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center">
          <Box width={'80%'}>
            <Text variant="bold" numberOfLines={2}>
              {data.id}. {data.lessonName}
            </Text>
          </Box>
          <Box width={'20%'} alignItems="flex-end">
            <Text variant="regular" fontSize={14} numberOfLines={1}>
              {data.hoursClass}
            </Text>
          </Box>
        </Box>
      </Press>
    </Box>
  );
};
export default CardClass;
