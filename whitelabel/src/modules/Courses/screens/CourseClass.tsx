import React, {useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CoursesRouteMap} from '../routes';
import {ROUTES} from '../../../routes/appRoutes.enum';
import {Alert, FlatList, ListRenderItem, Platform} from 'react-native';
import YoutubePlayer, {PLAYER_STATES} from 'react-native-youtube-iframe';
import Box from '../../../components/box';
import CardClass, {CardClassProps} from '../components/card-class';
import ButtonClassPlayer from '../components/button-class-player';
import {DATA_CLASS} from './consts';

interface RouteProps
  extends NativeStackScreenProps<CoursesRouteMap, ROUTES.COURSE_CLASS> {}

const CourseClass = (params: RouteProps) => {
  const courseData = params.route.params.courseData;
  const courseClass = params.route.params.data;
  const [playing, setPlaying] = useState(true);

  const onStateChange = useCallback((state: PLAYER_STATES) => {
    if (state === PLAYER_STATES.ENDED) {
      setPlaying(false);
      Alert.alert('O vídeo terminou! =)');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const renderItem: ListRenderItem<CardClassProps> = ({item}) => (
    <CardClass data={item} courseData={courseData} />
  );

  return (
    <Box flex={1} pt={Platform.OS === 'ios' ? 'xl' : 'none'}>
      <YoutubePlayer
        height={230}
        webViewStyle={{marginTop: Platform.OS === 'ios' ? 10 : 0}}
        play={playing}
        allowWebViewZoom={false}
        videoId={courseClass.videoId}
        onChangeState={onStateChange}
      />

      <FlatList
        data={DATA_CLASS}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{marginHorizontal: 20, paddingTop: 20}}
        contentContainerStyle={{paddingBottom: 50}}
        showsVerticalScrollIndicator={false}
      />
      <ButtonClassPlayer playing={playing} togglePlaying={togglePlaying} />
    </Box>
  );
};
export default CourseClass;
