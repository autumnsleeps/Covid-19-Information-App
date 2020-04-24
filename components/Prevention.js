import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class General extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image style={styles.headerBackground} source={require('../img/prevention-header-resized.jpg')} />
                </View>
                <View style={{flex: 0}}>
                    <Text style={styles.textSymptoms}>PREVENTION</Text>
                    <View style={styles.preventContainer1}>
                        <Image style={styles.preventImage1} source={require('../img/washhands-icon.png')}/>
                        <Text style={styles.preventText1}>Wash your hands with soap/hand sanitizer and do not touch any metal surfaces or shake hands with other people.</Text>
                    </View>
                    <View style={styles.preventContainer2}>
                        <Image style={styles.preventImage2} source={require('../img/facemask-icon.png')}/>
                        <Text style={styles.preventText2}>Always wearing your face masks when you go outside to avoid the transmission of the virus.</Text>
                    </View>
                    <View style={styles.preventContainer3}>
                        <Image style={styles.preventImage3} source={require('../img/socialdistancing-icon.png')}/>
                        <Text style={styles.preventText3}>Do not go outside except for absolutely essential needs, keep 2 metres away from others and avoid public gathering.</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    header: {
        width: '100%',
        height: 300,
        position: 'absolute',
        top: 0,
    },
    headerBackground: {
        width: '100%',
        height: 300,
    },
    textSymptoms: {
        position: 'absolute',
        top: -90,
        left: 20,
        fontSize: 20,
        color: '#943436',
        fontWeight: 'bold'
    },
    preventContainer1: {
        width: '100%',
        height: 125,
        backgroundColor: '#90cff2',
        position: 'absolute',
        top: -50,
    },
    preventContainer2: {
        width: '100%',
        height: 125,
        backgroundColor: '#90cff2',
        position: 'absolute',
        top: 100,
    },
    preventContainer3: {
        width: '100%',
        height: 125,
        backgroundColor: '#90cff2',
        position: 'absolute',
        top: 250,
    },
    preventImage1: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 15,
        left: 10
    },
    preventText1: {
        width: '70%',
        position: 'absolute',
        top: 15,
        right: 10,
        fontSize: 18,
        textAlign: 'center'
    },
    preventImage2: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 15,
        left: 10
    },
    preventText2: {
        width: '70%',
        position: 'absolute',
        top: 27,
        right: 10,
        fontSize: 18,
        textAlign: 'center'
    },
    preventImage3: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 10,
        left: 15
    },
    preventText3: {
        width: '70%',
        position: 'absolute',
        top: 18,
        right: 10,
        fontSize: 18,
        textAlign: 'center'
    }
})