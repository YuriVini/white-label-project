import React from 'react';
import {FlatList, ListRenderItem, Platform} from 'react-native';
import {DATA} from '../../Home/screens/consts';
import {BoxCoursesProps} from '../../Home/components/box-course';
import Box from '../../../components/box';
import CardCourse from '../components/card-course';
import Text from '../../../components/text';

const Courses = () => {
  const renderItem: ListRenderItem<BoxCoursesProps> = ({item}) => (
    <CardCourse data={item} />
  );

  const listHeaderComponent = () => (
    <Text variant="headerTitle" textAlign="center" mt="l" mb="l">
      Cursos Disponíveis
    </Text>
  );

  return (
    <Box
      flex={1}
      alignItems="center"
      justifyContent="center"
      mt={Platform.OS === 'ios' ? 'xl' : 'none'}>
      <FlatList
        data={DATA}
        keyExtractor={({id}) => id}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 60}}
        showsVerticalScrollIndicator={false}
      />
    </Box>
  );
};

export default Courses;
