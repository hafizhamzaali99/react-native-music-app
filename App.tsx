import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
// import TabViewExample from './screens/Main';
// import MusicPlayer from './components/MusicPlayer';
import Main from './screens/Main';


const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle='light-content' />
      <Main />
    </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});
export default App;
