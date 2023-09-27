import React from 'react';
import Box from '../../../components/box';
import Text from '../../../components/text';
import {Dimensions, Image} from 'react-native';
import Press from '../../../components/press';
import navigation from '../../../routes/navigationRoot';
import {ROUTES} from '../../../routes/appRoutes.enum';
import logoAulaM from '../../../../assets/images/logoAulaM.png';

export interface CardCoursesProps {
  id: string;
  img: string;
  courseName: string;
  author: string;
  value: string;
  isFree: boolean;
}

const CardCourse = ({data}: {data: CardCoursesProps}) => {
  const {width} = Dimensions.get('window');
  const {navigate} = navigation;

  return (
    <Box
      width={width / 2.45}
      variant="shadow"
      gap="s"
      m="s"
      mb="s"
      pb="s"
      bg="white">
      <Press onPress={() => navigate(ROUTES.COURSE_DETAILS, data)}>
        <Image source={logoAulaM} />
        <Box gap="s" paddingHorizontal="s">
          <Text variant="bold" numberOfLines={2} lineBreakMode="clip">
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
export default CardCourse;
