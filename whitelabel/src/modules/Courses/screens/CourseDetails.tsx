import React from 'react';

import Box from '../../../components/box';
import CardClass, {CardClassProps} from '../components/card-class';
import {FlatList, Image, ListRenderItem} from 'react-native';
import CardClassHeader from '../components/card-class-header';
import {CoursesRouteMap} from '../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ROUTES} from '../../../routes/appRoutes.enum';
import {DATA_BOX_ABOUT_COURSE, DATA_CLASS} from './consts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../components/text';
import {colors} from '../../../../styles/colors';
import author from '../../../../assets/images/author.png';

interface RouteProps
  extends NativeStackScreenProps<CoursesRouteMap, ROUTES.COURSE_DETAILS> {}

const CourseDetails = (params: RouteProps) => {
  const dataClassHeader = params.route.params;
  const renderItem: ListRenderItem<CardClassProps> = ({item}) => (
    <CardClass data={item} courseData={dataClassHeader} />
  );

  const listHeaderComponent = () => (
    <>
      <CardClassHeader data={dataClassHeader} />
      <Box
        width={'100%'}
        flexDirection="row"
        flexWrap="wrap"
        m="s"
        mb="xl"
        gap="m"
        justifyContent="space-between">
        {DATA_BOX_ABOUT_COURSE.map(item => (
          <Box
            width={'30%'}
            key={item.title}
            alignItems="center"
            justifyContent="space-between"
            gap="s"
            p="s">
            <Icon name={item.iconName} color={colors.accent} size={30} />
            <Text variant="medium" fontSize={14} textAlign="center">
              {item.title}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );

  return (
    <Box flex={1}>
      <Box
        width="100%"
        bg="accent"
        alignItems="center"
        justifyContent="center"
        paddingVertical="l">
        <Image source={author} style={{borderRadius: 50, marginTop: 32}} />
      </Box>

      <FlatList
        data={DATA_CLASS}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        style={{marginHorizontal: 20}}
        contentContainerStyle={{paddingBottom: 60}}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};
export default CourseDetails;
