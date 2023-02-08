import React from 'react';
import {StyleSheet, View,TouchableOpacity,Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get('window')

const BottomContainer = () => {
  return (
    <View style={styles.bottomIconWrapper}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='heart-outline' size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='repeat' size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='share-outline' size={30} color="#888888" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>   
            <Ionicons name='ellipsis-horizontal' size={30} color="#888888" />
          </TouchableOpacity>
        </View>
  )};

  const styles = StyleSheet.create({

    bottomIconWrapper: {
      // display:'flex',
      width: "80%",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignSelf: 'center',
      // backgroundColor:'red'
    },
  });
export default BottomContainer;
