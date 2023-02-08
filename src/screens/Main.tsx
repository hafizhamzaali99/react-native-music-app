import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar} from 'react-native-tab-view';
import Artist from '../components/Artist';
import MusicPlayer from '../components/MusicPlayer';

const FirstRoute = () => (
  <MusicPlayer />
);

const SecondRoute = () => (
  <Artist />
);

const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#222831' }} />
);

const FourthRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#222831' }} />
);

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#FFD369' }}
    style={{ backgroundColor: '#222831' }}
  />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth:FourthRoute,
});

export default function Main() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'SONGS' },
    { key: 'second', title: 'ARTIST' },
    { key: 'third', title: 'ALBUMS' },
    { key: 'fourth', title: 'TRACK' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      // style={{backgroundColor:'#222831'}}
      renderTabBar={renderTabBar}
    />
  );
}
