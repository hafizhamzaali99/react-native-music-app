import React, { useEffect, useState, useRef } from 'react';
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView, FlatList, Animated } from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons'
// eslint-disable-next-line
import IMG_1_IMAGE from '../assets/img/img1.jpg'
// import { FlatList } from 'react-native';
import songs from '../model/data';
import { TabBarItem } from 'react-native-tab-view';
import BottomContainer from './BottomContainer';

const { width, height } = Dimensions.get('window')

const MusicPlayer = () => {

  const [songIndex,setSongIndex] = useState(0)

  const scrollX = useRef(new Animated.Value(0)).current

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      console.log(`value: ${value}, Device width:${width}`)
      const index = Math.round(value/width)
      setSongIndex(index)
      console.log('index',index)
    })
  }, [])

  const renderSong = ({ item, index }) => {
    return (
      <Animated.View style={styles.mainImageContainer}>
        <View style={[styles.imageWrapper,]}>
          <Image source={item.artwork} style={[styles.songImage, styles.elevation]} />
        </View>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.mainContainer}>

        <Animated.FlatList
          renderItem={renderSong}
          data={songs}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent:{
                contentOffset:{x:scrollX}
              }
            }
          ],
          {useNativeDriver:true}
          )}
        />

        <View style={{ flex: 1 }}>
          <View>
            <Text style={[styles.songName, styles.songContent]}>{songs[songIndex].title}</Text>
            <Text style={[styles.songArtist, styles.songContent]}>{songs[songIndex].artist}</Text>
          </View>
          <View>
            <Slider
              style={{ height: 40, marginTop: 25 }}
              minimumValue={0}
              maximumValue={100}
              thumbTintColor='#FFD369'
              minimumTrackTintColor="#FFD369"
              maximumTrackTintColor="#FFF"
              onSlidingComplete={() => { }}
            />
            <View style={styles.progressLevelDuration}>
              <Text style={styles.progressLabelText}>00:00</Text>
              <Text style={styles.progressLabelText}>00:00</Text>
            </View>
          </View>
          <View style={styles.musicControlContainer}>
            {/* <TouchableOpacity onPress={() => { }}>
              <Ionicons name='heart-outline' size={30} color="#FFD369" />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={() => { }}>
              <Ionicons name='play-skip-back-outline' size={30} color="#FFD369" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Ionicons name='ios-pause-circle' size={70} color="#FFD369" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
              <Ionicons name='play-skip-forward-outline' size={30} color="#FFD369" />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={() => { }}>
              <Ionicons name='heart-outline' size={30} color="#FFD369" />
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <BottomContainer />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831'
  },
  mainContainer: {
    flex: 1,
    paddingVertical: 20
  },
  bottomContainer: {
    width: width,
    paddingVertical: 15,
    borderTopColor: '#393E46',
    borderTopWidth: 1
  },
  bottomIconWrapper: {
    // display:'flex',
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    // backgroundColor:'red'
  },
  imageWrapper: {
    marginBottom: 30,
    flex: 1
  },
  songImage: {
    width: width / 1.3,
    resizeMode: "contain",
    height: height / 2.5,
    borderRadius: 15,
    // alignSelf: "center"
  },
  elevation: {
    elevation: 5,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84
  },
  songName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10
  },
  songArtist: {
    fontSize: 16,
    fontWeight: '300',
  },
  songContent: {
    textAlign: 'center',
    color: '#eeeeee'
  },
  progressLevelDuration: {
    // width:340,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: "#fff"
  },
  musicControlContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor:"red",
    // width: 340,
    marginHorizontal: 20,
    marginTop: 15
  },
  mainImageContainer: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MusicPlayer;
