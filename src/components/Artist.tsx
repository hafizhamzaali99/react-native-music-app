import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import songs from '../model/data';
import ARTIST_IMG from '../assets/img/artist.png'
import Ionicons from 'react-native-vector-icons/Ionicons'


const { width, height } = Dimensions.get('window')

const Artist = () => {

    const [timesPressed, setTimesPressed] = useState(0);

    return (
        <View style={styles.mainWrapper}>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={ARTIST_IMG} style={styles.image} />
                    </View>
                    <View style={styles.contentContainer}>
                        <View>
                            <Text style={[styles.contentHead,styles.content]}>Unknown Artist</Text>
                            <Text style={[styles.contentText,styles.content]}>1 album</Text>
                        </View>
                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name='ellipsis-vertical-sharp' size={20} color="#FFD369" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        backgroundColor: '#222831',
        flex: 1
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 20
    },
    mainContainer: {
        // flex:1,
        width: width / 2.2,
        // backgroundColor:'red',
        borderWidth: 0.7,
        borderColor: '#FFD369',
        borderRadius: 10
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 0.7,
        borderBottomColor: '#FFD369'
    },
    image: {
        width: width / 2.4,
        resizeMode: "contain",
        height: height / 3.5,
        borderRadius: 15,
    },
    contentContainer: {
        paddingVertical: 5,
        paddingHorizontal: 5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    content:{
        color:'#fff'
    },
    contentHead: {
        fontSize:16,
        letterSpacing:1
    },
    contentText: {

    }
});

export default Artist;