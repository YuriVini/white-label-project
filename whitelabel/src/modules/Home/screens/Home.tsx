import React from 'react';
import {
  FlatList,
  Linking,
  ListRenderItem,
  Platform,
  ScrollView,
} from 'react-native';
import Header from '../components/header';
import Box from '../../../components/box';
import BoxWrapper from '../../../components/box-wrapper';
import BoxCourse, {BoxCoursesProps} from '../components/box-course';
import Banner from '../components/banner';
import {DATA} from './consts';
import {ROUTES} from '../../../routes/appRoutes.enum';
import navigation from '../../../routes/navigationRoot';

const Home = () => {
  const {navigate} = navigation;

  const renderItem: ListRenderItem<BoxCoursesProps> = ({item}) => (
    <BoxCourse data={item} />
  );

  return (
    <Box flex={1} mt={Platform.OS === 'ios' ? 'm' : 'none'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <BoxWrapper
          show
          seeMore
          title="Mais Vendidos"
          onPress={() => navigate(ROUTES.STACK_COURSES)}>
          <FlatList
            data={DATA.slice(4)}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10, paddingRight: 40}}
          />
        </BoxWrapper>
        <Banner
          marginVertical="l"
          marginHorizontal="l"
          onPress={() => Linking.openURL('https://ead.guru/')}
        />
        <BoxWrapper
          show
          seeMore
          title="Mais Acessados"
          onPress={() => navigate(ROUTES.STACK_COURSES)}>
          <FlatList
            data={DATA.slice(4)}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10, paddingRight: 40}}
          />
        </BoxWrapper>
        <BoxWrapper
          show
          seeMore
          title="Melhores Avaliações"
          onPress={() => navigate(ROUTES.STACK_COURSES)}>
          <FlatList
            data={DATA.slice(4)}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{gap: 10, paddingRight: 40}}
          />
        </BoxWrapper>
      </ScrollView>
    </Box>
  );
};
export default Home;
