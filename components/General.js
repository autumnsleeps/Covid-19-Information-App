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
                    <Image style={styles.headerBackground} source={require('../img/coronavirus-header.jpg')} />
                </View>
                <View style={{flex: 0}}>
                    <Text style={styles.textSymptoms}>SYMPTOMS</Text>
                    <Image style={styles.symptomsImage1} source={require('../img/cough-icon.jpg')}></Image>
                    <View style={styles.symptoms1}>
                        <Text style={styles.symptomsText1}>Severe cough problems and short breath</Text>
                    </View>
                    <Image style={styles.symptomsImage2} source={require('../img/fever-icon.png')}></Image>
                    <View style={styles.symptoms2}>
                        <Text style={styles.symptomsText2}>Fever</Text>
                    </View>
                    <Image style={styles.symptomsImage3} source={require('../img/headache.png')}></Image>
                    <View style={styles.symptoms3}>
                        <Text style={styles.symptomsText3}>Headache and muscle pain</Text>
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
        height: 300,
        resizeMode: 'contain',
        marginLeft: -110,
    },
    textSymptoms: {
        position: 'absolute',
        top: -90,
        left: 20,
        fontSize: 20,
        color: '#943436',
        fontWeight: 'bold'
    },
    symptomsImage1: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: -50,
        left: 15
    },
    symptoms1: {
        height: 100,
        width: 250,
        position: 'absolute',
        backgroundColor: '#90cff2',
        top: -40,
        right: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    symptomsText1: {
        fontSize: 22,
        color: '#943436',
        textAlign: 'center'
    },
    symptomsImage2: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: 80,
        right: 10
    },
    symptoms2: {
        height: 100,
        width: 250,
        position: 'absolute',
        backgroundColor: '#f05978',
        top: 90,
        left: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    symptomsText2: {
        fontSize: 22,
        color: '#90cff2'
    },
    symptomsImage3: {
        width: 120,
        height: 120,
        position: 'absolute',
        top: 210,
        left: 15
    },
    symptoms3: {
        height: 100,
        width: 250,
        position: 'absolute',
        backgroundColor: '#90cff2',
        top: 220,
        right: 15,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    symptomsText3: {
        fontSize: 22,
        color: '#943436',
        textAlign: 'center'
    }
})